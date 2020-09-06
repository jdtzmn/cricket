import { byteToBits, bitsToByte } from './byteConversion'

export type Binary = 0 | 1

/**
 * @description A guard to ensure that a binary value is in fact binary
 * @param {Binary} bit The bit to test
 * @param {number} [index] An index to help with debugging purposes
 */
function binaryGuard(bit: Binary, index?: number) {
  if (bit !== 0 && bit !== 1) {
    if (typeof index !== 'undefined') {
      throw new Error(`Cannot set a non-binary value at position ${index}`)
    } else {
      throw new Error('Cannot set a non-binary value')
    }
  }
}

export default class BitArray {
  /**
   * @description The underlying array
   * @private
   * @type {number[]}
   * @memberof BitArray
   */
  private array: Binary[]

  /**
   * @description The length of the bit array
   * @readonly
   * @type {number}
   * @memberof BitArray
   */
  get length(): number {
    return this.array.length
  }

  /**
   * @description Access a copy of the underlying array
   * THIS IS NOT RECOMMENDED
   * @readonly
   * @type {Binary[]}
   * @memberof BitArray
   */
  get underlyingArray(): Binary[] {
    return this.array.slice()
  }

  /**
   * Creates an instance of BitArray
   * @param {number} size The size of the BitArray
   * @memberof BitArray
   */
  constructor(sizeOrArray: number | Binary[] = 0) {
    const size = Array.isArray(sizeOrArray) ? sizeOrArray.length : sizeOrArray

    this.array = new Array(size).fill(0)

    if (Array.isArray(sizeOrArray)) {
      sizeOrArray.forEach((bit, index) => this.setAt(index, bit))
    }
  }

  /**
   * @description Gets the value at a position in the bit array
   * @param {number} index The position where the bit is stored in the array
   * @returns The value at that position
   * @memberof BitArray
   */
  getAt(index: number) {
    return this.array[index]
  }

  /**
   * @description Set a binary value at the specified index
   * @param {number} index The position to set the value
   * @param {number} value The value to be set
   * @memberof BitArray
   */
  setAt(index: number, value: Binary) {
    binaryGuard(value, index)

    this.array[index] = value
  }

  /**
   * @description Add a binary value at the specified index
   * @param {number} index The position to set the value
   * @param {Binary} value The value to be set
   * @memberof BitArray
   */
  addAt(index: number, value: Binary) {
    binaryGuard(value, index)

    this.array.splice(index, 0, value)
  }

  /**
   * @description Remove a binary value at the specified index
   * @param {number} index The position from which to remove the value
   * @memberof BitArray
   */
  removeAt(index: number) {
    this.array.splice(index, 1)
  }

  /**
   * @description Toggle the binary value at the specified index
   * @param {number} index The position to set the value
   * @memberof BitArray
   */
  toggleAt(index: number) {
    if (this.getAt(index) === 1) {
      this.setAt(index, 0)
    } else {
      this.setAt(index, 1)
    }
  }

  /**
   * @description Determine whether this bit array is equal to another
   * @param {BitArray} bitArray The bit array to compare against
   * @returns Whether the two arrays match
   * @memberof BitArray
   */
  equals(bitArray: BitArray) {
    return (
      this.length === bitArray.length &&
      this.array.every((value, index) => bitArray.getAt(index) === value)
    )
  }

  /**
   * @description Concatenate one bit array onto the end of the current one
   * @param {BitArray} bitArray The bit array to append
   * @returns The concatenated bit arrays
   * @memberof BitArray
   */
  concat(bitArray: BitArray) {
    const mergedUnderlyingArrays = this.array.concat(bitArray['array'])
    return new BitArray(mergedUnderlyingArrays)
  }

  /**
   * @description Slice a portion of the bit array into a new bit array instance
   * @param {number} start The zero-based index at which to start extraction
   * @param {number} [end] Zero-based index before which to end extraction
   * @returns {BitArray} A portion of the original
   * @memberof BitArray
   */
  slice(start: number, end?: number): BitArray {
    return new BitArray(this.array.slice(start, end))
  }

  /**
   * @description Convert a bit array to a Uint8Array buffer
   * @returns A Uint8Array buffer filled with the bit array's data
   * @memberof BitArray
   */
  toUint8Array() {
    const byteLength = this.length / 8

    if (!Number.isInteger(byteLength)) {
      throw new Error('Cannot convert to Uint8Array if bit length is not a multiple of 8')
    }

    const byteArray = new Uint8Array(byteLength)
    for (let i = 0; i < byteLength; i++) {
      const cursor = 8 * i
      byteArray[i] = bitsToByte(this.slice(cursor, cursor + 8))
    }

    return byteArray
  }

  /**
   * @description Clone a copy of the bit array instance
   * @returns {BitArray} The copy of the current instance
   * @memberof BitArray
   */
  clone(): BitArray {
    return new BitArray(this.array)
  }

  *iterate() {
    for (let i = 0; i < this.array.length; i++) {
      yield [this.getAt(i), i]
    }
  }

  /**
   * @description Instantiate a bit array from a Uint8Array
   * @static
   * @param {Uint8Array} buffer The Uint8Array to instantiate from
   * @returns A populated instance of the BitArray class
   * @memberof BitArray
   */
  static from(buffer: Uint8Array) {
    return buffer.reduce((bitArray: BitArray, byte: number) => {
      return bitArray.concat(byteToBits(byte))
    }, new BitArray())
  }
}

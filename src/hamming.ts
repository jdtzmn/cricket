import { flatten, chunk } from 'lodash-es'
import BitArray, { Binary } from './BitArray'

/**
 * @description Returns whether the number is a power of two
 * @param {number} num The number to test
 */
function isPowerOfTwo(num: number): boolean {
  return Number.isInteger(Math.log2(num))
}

/**
 * @description Information about the parity of a hamming grid
 * @interface ParityInformation
 */
interface ParityInformation {
  parity: number
  count: number
}

/**
 * @description A generator for powers of 2 less than a certain number
 * This is a utility function for use in for loops:
 *
 * for (const powerOf2 of powersOf2LessThan(16)) {
 *   [...]
 * }
 * @param {number} size The size that the powers of 2 will be less than
 * @param {boolean} [includeOne=true] Whether to include 1 in the sequence
 */
function* powersOf2LessThan(size: number, includeOne = true) {
  const startValue = includeOne ? 1 : 2

  for (let groupSize = startValue; groupSize < size; groupSize *= 2) {
    yield groupSize
  }
}

/**
 * @description A hamming encoder and decoder
 * @export
 * @class Hamming
 */
export default class Hamming {
  private readonly dataBits: number

  /**
   * Creates an instance of Hamming.
   * @param {number} size The number of bits for this hamming code
   * @memberof Hamming
   */
  constructor(private readonly size: number) {
    if (!isPowerOfTwo(size)) {
      throw new Error('Hamming codes must be powers of 2')
    }

    this.dataBits = size - Math.log2(size) - 1
  }

  /* ============================== */
  /* =========== ENCODING ========= */
  /* ============================== */

  /**
   * @description Encode a bit array into a series of hamming grids
   * @param {BitArray} bits The bits to encode
   * @returns {BitArray} The encoded hamming grids
   * @memberof Hamming
   */
  encodeBitArray(bits: BitArray): BitArray {
    const formatted = this.formatWithRemovalChunk(bits)

    let encoded = new BitArray(0)

    for (let cursor = 0; cursor < formatted.length; cursor += this.dataBits) {
      const dataChunk = formatted.slice(cursor, cursor + this.dataBits)
      const hammingGrid = this.encodeDataBits(dataChunk)
      encoded = encoded.concat(hammingGrid)
    }

    return encoded
  }

  /**
   * @description Pad the data with 0's and a removal chunk to know how many to remove
   * @private
   * @param {BitArray} bits The bits to be formatted
   * @returns {BitArray} A new bit array with correct formatting
   * @memberof Hamming
   */
  private formatWithRemovalChunk(bits: BitArray): BitArray {
    let { length } = bits

    /**
     * Since the bits won't divide evenly, use the last hamming code
     * in the bit array to know how many superfluous bits to remove
     * from the last data chunk
     */
    let dataBitsInLastChunk = length % this.dataBits
    if (dataBitsInLastChunk === 0) dataBitsInLastChunk = this.dataBits

    const superfluousBits: number = this.dataBits - dataBitsInLastChunk

    // Add the superfluous bits to the last chunk
    let paddedData = bits.concat(new BitArray(superfluousBits))

    // Append a chunk of data bits to know how many to remove
    const superfluousBitsInBinary = superfluousBits
      .toString(2)
      .split('')
      .map((str) => +str) as Binary[]

    // Pad the superfluous bits in binary format to be the right size
    const removalChunk = new BitArray(this.dataBits - superfluousBitsInBinary.length).concat(
      new BitArray(superfluousBitsInBinary)
    )

    return paddedData.concat(removalChunk)
  }

  /**
   * @description Encode the data bits into a full hamming grid
   * @private
   * @param {BitArray} bits The data bits to encrypt
   * @returns {BitArray} The encoded bit array
   * @memberof Hamming
   */
  private encodeDataBits(bits: BitArray): BitArray {
    if (bits.length !== this.dataBits) {
      throw new Error(`To encode a chunk it must be of size ${this.dataBits}`)
    }

    const hammingGrid = bits.clone()
    this.fillParityBitsInto(hammingGrid)
    this.solveParityBits(hammingGrid)
    this.setOverallParity(hammingGrid)
    return hammingGrid
  }

  /**
   * @description Mutates the inputted bits array to add parity bits at the correct locations
   * @private
   * @param {BitArray} bits The data bits to add parity bits to
   * @returns {BitArray} Returns the bit array (for utility)
   * @memberof Hamming
   */
  private fillParityBitsInto(bits: BitArray): BitArray {
    if (bits.length !== this.dataBits) {
      throw new Error(`Parity bits can only be added to a bit array of length ${this.dataBits}`)
    }

    bits.addAt(0, 0)

    for (const index of powersOf2LessThan(this.size)) {
      bits.addAt(index, 0)
    }

    return bits
  }

  /**
   * @description Mutates the inputted bits array to remove parity bits from the correct locations
   * @private
   * @param {BitArray} bits The data bits to remove parity bits from
   * @returns {BitArray} Returns the bit array (for utility)
   * @memberof Hamming
   */
  private removeParityBitsFrom(bits: BitArray): BitArray {
    if (bits.length !== this.size) {
      throw new Error(`Parity bits can only be removed from a bit array of length ${this.size}`)
    }

    bits.removeAt(0)

    for (let i = 0; i < Math.log2(this.size); i++) {
      const numberAlreadyRemoved = i + 1
      bits.removeAt(2 ** i - numberAlreadyRemoved)
    }

    return bits
  }

  /**
   * @description Determine the parity of a grid both in count and xor
   * @private
   * @param {BitArray} bits The hamming grid to determine the parity of
   * @returns {ParityInformation} The count and parity xor of the hamming grid
   * @memberof Hamming
   */
  private determineParity(bits: BitArray): ParityInformation {
    if (bits.length !== this.size) {
      throw new Error(
        `Parity information cannot be determined if the number of bits don't match the hamming size`
      )
    }

    let count = 0
    let parity = 0

    for (let i = 0; i < bits.length; i++) {
      const bit = bits.getAt(i)

      if (bit === 1) {
        count++
        parity = parity ^ i
      }
    }

    return { count, parity }
  }

  /**
   * @description Solve for the parity bits of a hamming grid in place
   * @private
   * @param {BitArray} bits The hamming grid
   * @param {number} [tryIndex=1] The current index to try (do not set this)
   * @memberof Hamming
   */
  private solveParityBits(bits: BitArray) {
    if (bits.length !== this.size) {
      throw new Error(
        `Parity bits cannot be solved for if the number of bits don't match the hamming size`
      )
    }

    for (const parityLocation of powersOf2LessThan(this.size)) {
      const trimmed = bits.slice(parityLocation)

      /**
       * Filter by groups of parity location
       * At parity bit 1, group by every other 1
       * At parity bit 2, group by every other 2
       * etc.
       */
      const chunked = chunk(trimmed.underlyingArray, parityLocation)
      const filtered = chunked.filter((_, index) => index % 2 === 0)
      const flattened = flatten(filtered)

      const parity = flattened.reduce((count, bit) => count + bit, 0 as number)
      const isEven = parity % 2 === 0

      if (!isEven) bits.toggleAt(parityLocation)
    }
  }

  /**
   * @description Set the overall parity bit in position 0
   * @private
   * @param {BitArray} bits The bit array to set the overall partiy for
   * @memberof Hamming
   */
  private setOverallParity(bits: BitArray) {
    if (bits.length !== this.size) {
      throw new Error(
        `Overall parity bit cannot be set if the number of bits don't match the hamming size`
      )
    }

    const { count } = this.determineParity(bits)
    const isEven = count % 2 === 0
    if (!isEven) bits.toggleAt(0)
  }

  /* ============================== */
  /* =========== DECODING ========= */
  /* ============================== */

  /**
   * @description Decode a bit array of encoded hamming grids
   * @param {BitArray} bits The hamming grid bit array
   * @returns {(BitArray | null)} Returns bit array of data if the error can be corrected, null otherwise
   * @memberof Hamming
   */
  decodeBitArray(bits: BitArray): BitArray | null {
    if (bits.length % this.size !== 0) {
      throw new Error(`Can't decode a bit array that is not a multiple of the hamming size`)
    }

    // Extract the data bits from the grids
    let dataBits = new BitArray(0)
    for (let cursor = 0; cursor < bits.length; cursor += this.size) {
      const grid = bits.slice(cursor, cursor + this.size)
      const dataBitsOrNull = this.decodeHammingGrid(grid)

      // Short-circuit if this data couldn't be decoded
      if (dataBitsOrNull === null) return null

      dataBits = dataBits.concat(dataBitsOrNull)
    }

    // Remove the last chunk and the padded 0's
    const dataWithoutPadding = this.removePaddingAndRemovalChunkFrom(dataBits)
    return dataWithoutPadding
  }

  /**
   * @description Attempt to decode a hamming grid
   * @param {BitArray} bits The hamming grid to try and decode
   * @returns {(BitArray | null)} Returns bit array of data if the error can be corrected, null otherwise
   * @memberof Hamming
   */
  private decodeHammingGrid(bits: BitArray): BitArray | null {
    if (bits.length !== this.size) {
      throw new Error(`Can't decode a grid that does not match the hamming size`)
    }

    const copy = bits.clone()
    const { parity, count } = this.determineParity(copy)
    const isEven = count % 2 === 0

    if (parity !== 0 && !isEven) {
      // Attempt to fix the error
      copy.toggleAt(parity)
      return this.removeParityBitsFrom(copy)
    } else if (parity === 0 && isEven) {
      // The grid had no errors
      return this.removeParityBitsFrom(copy)
    }

    return null
  }

  /**
   * @description Remove the padded 0's and remove the removal chunk
   * @private
   * @param {BitArray} bits The data bits to be formatted
   * @returns {BitArray} A new bit array without padding and the chunk
   * @memberof Hamming
   */
  private removePaddingAndRemovalChunkFrom(bits: BitArray): BitArray {
    // Separate the data and the removal chunk
    let dataBits = bits.slice(0, -this.dataBits)
    const removalChunk = bits.slice(-this.dataBits)

    // Extract superfluous bits amount
    const superfluousBitsInBinary = removalChunk.underlyingArray.join('')
    const superfluousBits = parseInt(superfluousBitsInBinary, 2)

    // Remove the bits
    if (superfluousBits > 0) {
      dataBits = dataBits.slice(0, -superfluousBits)
    }

    return dataBits
  }
}

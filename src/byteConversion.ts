import BitArray, { Binary } from './BitArray'

/**
 * @description Converts a byte to a bit array
 * @export
 * @param {number} byte The byte to convert to a bit array
 * @returns The converted bit array
 */
export function byteToBits(byte: number) {
  if (byte < 0 || byte > 255) throw new Error('byte value must be between 0 and 255')
  if (!Number.isInteger(byte)) throw new Error('byte must be an integer')

  const bitArray = new BitArray(8)
  const bits = Array.from(byte.toString(2))

  /**
   * Start at the first defined bit since the `toString` method doesn't include padding 0's
   *
   * Example:
   * 120.toString(2) is '1111000' which is not 8 bits long
   */
  for (let i = bitArray.length - bits.length; i < bitArray.length; i++) {
    const bitValue = +bits.shift()! as Binary
    bitArray.setAt(i, bitValue)
  }

  return bitArray
}

/**
 * @description Convert a bit array to a byte number
 * @export
 * @param {BitArray} bits The bits to convert
 * @returns The converted byte number
 */
export function bitsToByte(bits: BitArray) {
  if (bits.length !== 8) throw new Error('bit array must be of length 8')

  let byte = 0
  for (let i = 0; i < bits.length; i++) {
    const bit = bits.getAt(i)
    byte += bit * Math.pow(2, bits.length - i - 1)
  }

  return byte
}

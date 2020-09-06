import BitArray, { Binary } from './bitArray'

/**
 * @description A guard to ensure that the bit arrays are multiples of a given number
 * @param {BitArray} bits The bits to compare the length with
 * @param {number} size The size of the interleaver instance
 */
function multipleOfSizeGuard(bits: BitArray, size: number) {
  if (bits.length % size !== 0) {
    throw new Error(`Bit length must be a multiple of ${size}`)
  }
}

/**
 * @description A bit array interleaver to be used in conjunction with
 * the hamming encoding
 * @export
 * @class Interleaver
 */
export default class Interleaver {
  /**
   * Creates an instance of Interleaver.
   * @param {number} size The size of each chunk
   * @memberof Interleaver
   */
  constructor(private readonly size: number) {}

  /**
   * @description Interlave the bits
   * @param {BitArray} bits The original bits
   * @returns {BitArray} An interleaved version of the data bits
   * @memberof Interleaver
   */
  interleave(bits: BitArray): BitArray {
    multipleOfSizeGuard(bits, this.size)

    const chunks = bits.length / this.size
    const copy = bits.clone()

    for (const [_, index] of copy.iterate()) {
      const inChunk = Math.floor(index / this.size)
      const positionInChunk = index % this.size
      const fromChunk = (inChunk + positionInChunk) % chunks
      const fromIndex = fromChunk * this.size + positionInChunk
      copy.setAt(index, bits.getAt(fromIndex))
    }

    return copy
  }

  /**
   * @description Uninterleave the bits
   * @param {BitArray} bits The previously interleaved bits
   * @returns {BitArray} The original data bits
   * @memberof Interleaver
   */
  uninterleave(bits: BitArray): BitArray {
    multipleOfSizeGuard(bits, this.size)

    const chunks = bits.length / this.size
    const copy = bits.clone()

    for (const [_, index] of copy.iterate()) {
      const inChunk = Math.floor(index / this.size)
      const positionInChunk = index % this.size

      // ensure that `fromChunk` is positive
      let fromChunk = (inChunk - positionInChunk) % chunks
      if (fromChunk < 0) {
        const positiveAdjustment = chunks * Math.ceil(fromChunk / -chunks)
        fromChunk = (fromChunk + positiveAdjustment) % chunks
      }

      const fromIndex = fromChunk * this.size + positionInChunk
      copy.setAt(index, bits.getAt(fromIndex))
    }

    return copy
  }
}

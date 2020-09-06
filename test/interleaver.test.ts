import Interleaver from '../src/interleaver'
import BitArray from '../src/bitArray'

describe('Interleaver class', () => {
  it("shouldn't interleave a bit array that is not a multiple of the interleaver size", () => {
    const interleaver = new Interleaver(10)
    const bitArray = new BitArray(7)

    expect(() => {
      interleaver.interleave(bitArray)
    }).toThrowError()
  })

  it('should be able to interleave a bit array with more chunks than its size', () => {
    const bits = new BitArray([0, 1, 0, 0, 0, 1])
    const interleaver = new Interleaver(2)

    const interleaved = interleaver.interleave(bits)
    expect(interleaved.underlyingArray).toEqual([0, 0, 0, 1, 0, 1])
  })

  it('should be able to interleave a bit array with fewer chunks than its size', () => {
    const bits = new BitArray([0, 1, 0, 0, 0, 1])
    const interleaver = new Interleaver(3)

    const interleaved = interleaver.interleave(bits)
    expect(interleaved.underlyingArray).toEqual([0, 0, 0, 0, 1, 1])
  })

  it('should be able to uninterleave an interleaved bit array with more chunks than its size', () => {
    const bits = new BitArray([0, 1, 0, 0, 0, 1])
    const interleaver = new Interleaver(2)

    const interleaved = interleaver.interleave(bits)
    const uninterleaved = interleaver.uninterleave(interleaved)

    expect(uninterleaved.underlyingArray).toEqual(bits.underlyingArray)
  })

  it('should be able to uninterleave an interleaved bit array with fewer chunks than its size', () => {
    const bits = new BitArray([1, 1, 0, 1, 0, 0])
    const interleaver = new Interleaver(3)

    const interleaved = interleaver.interleave(bits)
    const uninterleaved = interleaver.uninterleave(interleaved)

    expect(uninterleaved.underlyingArray).toEqual(bits.underlyingArray)
  })
})

import { byteToBits, bitsToByte } from '../src/byteConversion'
import BitArray from '../src/bitArray'

describe('byte conversions', () => {
  it('should be able to convert a byte to a bit array', () => {
    const byte = 120
    const bitArray = byteToBits(byte)
    const idealBitArray = new BitArray([0, 1, 1, 1, 1, 0, 0, 0])
    expect(bitArray.equals(idealBitArray)).toBeTruthy()
  })

  it('should throw errors if the byte is not a valid format', () => {
    expect(() => {
      byteToBits(-1)
    }).toThrowError()
  })

  it('should throw an error if bitToByte bits are not of length 8', () => {
    const bitArray = new BitArray(2)
    expect(() => bitsToByte(bitArray)).toThrowError()
  })

  it('should convert a bit array to a byte', () => {
    const bitArray = new BitArray([0, 1, 1, 1, 1, 0, 0, 0])
    const byte = bitsToByte(bitArray)
    expect(byte).toBe(120)
  })
})

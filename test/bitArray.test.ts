import BitArray, { byteToBits, bitsToByte } from '../src/bitArray'

describe('BitArray class', () => {
  it('should be able to set bits in the bit array', () => {
    expect(() => {
      const bitArray = new BitArray(5)
      bitArray.setAt(0, 1)
    }).not.toThrowError()
  })

  it('should throw an error when trying to set a non-binary value', () => {
    expect(() => {
      const bitArray = new BitArray(5)
      bitArray.setAt(0, 2 as 0)
    }).toThrow('Cannot set a non-binary value at position 0')
  })

  it('should get bits at the right location', () => {
    const bitArray = new BitArray(5)
    bitArray.setAt(2, 1)
    bitArray.setAt(3, 0)
    expect(bitArray.getAt(2)).toBe(1)
    expect(bitArray.getAt(3)).toBe(0)
  })

  it('should be able to add bits at a given location', () => {
    const bitArray = new BitArray(5)
    bitArray.addAt(2, 1)
    expect(bitArray.getAt(2)).toBe(1)
    expect(bitArray.getAt(3)).toBe(0)
    expect(bitArray.length).toBe(6)
  })

  it('should be able to remove bits at a given location', () => {
    const bitArray = new BitArray(5)
    bitArray.addAt(2, 1)
    bitArray.removeAt(2)
    expect(bitArray.getAt(2)).toBe(0)
    expect(bitArray.length).toBe(5)
  })

  it('should be able to toggle bits at a given location', () => {
    const bitArray = new BitArray(5)
    bitArray.toggleAt(2)
    expect(bitArray.getAt(2)).toBe(1)
  })

  it('should return to previous state after toggling twice', () => {
    const bitArray = new BitArray(5)
    bitArray.toggleAt(2)
    bitArray.toggleAt(2)
    expect(bitArray.getAt(2)).toBe(0)
  })

  it('should be able to initialize from an array', () => {
    const bitArray = new BitArray([0, 0, 1, 1, 0])
    expect(bitArray.getAt(2)).toBe(1)
  })

  it('should throw an error if the initialization array contains a non-binary value', () => {
    expect(() => {
      const _ = new BitArray([0, 2 as 0])
    }).toThrow('Cannot set a non-binary value at position 1')
  })

  it('should be able to concatenate two bit arrays together', () => {
    const bitArray = new BitArray([1])
    const bitArray2 = new BitArray([0])
    const concatenated = bitArray.concat(bitArray2)
    expect(concatenated.equals(new BitArray([1, 0]))).toBeTruthy()
  })

  it('should be able to extract a slice', () => {
    const bitArray = new BitArray([1, 0, 1, 0, 1, 0])
    const slice = bitArray.slice(1, 3)
    expect(slice['array']).toEqual([0, 1])
  })

  it('should be able to instantiate from a Uint8Array buffer', () => {
    const uint8Array = new Uint8Array([1, 2])
    const bitArray = BitArray.from(uint8Array)
    const idealBitArray = byteToBits(1).concat(byteToBits(2))
    expect(bitArray.equals(idealBitArray)).toBeTruthy()
  })

  it('should convert to Uint8Array buffer', () => {
    const bitArray = new BitArray([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1])
    const uint8Array = bitArray.toUint8Array()
    const goal = new Uint8Array([240, 255])
    expect(uint8Array).toEqual(goal)
  })

  it('should be able to go from a Uint8Array buffer to a Uint8Array buffer', () => {
    const uint8Array = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8])
    const bitArray = BitArray.from(uint8Array)
    const backToUint8Array = bitArray.toUint8Array()
    expect(backToUint8Array).toEqual(uint8Array)
  })

  it('should be iterable', () => {
    const bitArray = new BitArray([0, 1, 0, 1])

    const generator = bitArray.iterate()
    expect(generator.next().value).toEqual([0, 0])
    expect(generator.next().value).toEqual([1, 1])
    expect(generator.next().value).toEqual([0, 2])
    expect(generator.next().value).toEqual([1, 3])
    expect(generator.next().done).toBeTruthy()
  })

  it('should be cloneable to stop mutations', () => {
    const bitArray = new BitArray([0, 1, 0, 1])
    const copy = bitArray.clone()
    copy.setAt(1, 0)
    expect(bitArray.getAt(1)).toBe(1)
  })
})

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

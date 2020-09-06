import Hamming from '../src/hamming'
import BitArray, { Binary } from '../src/BitArray'

describe('Hamming class', () => {
  it('Should throw error on initialization if constructed with an incorrect size', () => {
    expect(() => {
      const _ = new Hamming(12)
    }).toThrow('Hamming codes must be powers of 2')
  })

  it('should throw an error when trying to encode chunks of incorrect length', () => {
    const bits = new BitArray([0, 1])
    const hamming = new Hamming(16)
    expect(() => {
      const _ = hamming['encodeDataBits'](bits)
    }).toThrowError()
  })

  it('should add parity bits', () => {
    const hamming = new Hamming(16)
    const bits = new BitArray(new Array(11).fill(1))

    hamming['fillParityBitsInto'](bits)

    expect(bits).toHaveLength(16)
    const idealBitArray = new BitArray([0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1])
    expect(bits.equals(idealBitArray))
  })

  it('should remove parity bits', () => {
    const hamming = new Hamming(16)

    // prettier-ignore
    const bits = new BitArray([
      0, 1, 0, 1,
      0, 1, 0, 1,
      1, 0, 1, 0,
      1, 0, 1, 0
    ])

    hamming['removeParityBitsFrom'](bits)

    expect(bits).toHaveLength(11)
    const idealBitArray = new BitArray([1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])
    expect(bits['array']).toEqual(idealBitArray['array'])
  })

  it('should determine parity information', () => {
    const hamming = new Hamming(16)
    const bits = new BitArray(new Array(15).fill(1).concat([0]))

    const parityInfo = hamming['determineParity'](bits)
    expect(parityInfo.count).toBe(15)
    expect(parityInfo.parity).toBe(15)
  })

  // This test does not ensure that the overall parity check is met
  it('should solve group parity bits', () => {
    const hamming = new Hamming(16)

    interface HammingTest {
      from: Binary[]
      to: Binary[]
    }

    // prettier-ignore
    const tests: HammingTest[] = [
      {
        from: [
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 1, 0
        ],
        to: [
          1, 0, 0, 1,
          0, 1, 1, 1,
          0, 1, 1, 1,
          1, 1, 1, 0
        ]
      },
      {
        from: [
          0, 0, 0, 1,
          0, 1, 0, 1,
          0, 0, 1, 0,
          1, 0, 1, 0
        ],
        to: [
          0, 1, 0, 1,
          0, 1, 0, 1,
          1, 0, 1, 0,
          1, 0, 1, 0
        ]
      }
    ]

    for (const hammingGrid of tests) {
      const bits = new BitArray(hammingGrid.from)

      hamming['solveParityBits'](bits)

      expect(bits['array']).toEqual(hammingGrid.to)
    }
  })

  it('should encode data bits', () => {
    const hamming = new Hamming(16)

    // prettier-ignore
    const dataBits = new BitArray([
              1,
        1, 1, 1,
        1, 1, 1,
      1,1, 1, 0
    ])

    const encodedBits = hamming['encodeDataBits'](dataBits)

    // prettier-ignore
    const solvedGrid = new BitArray([
      0, 0, 0, 1,
      0, 1, 1, 1,
      0, 1, 1, 1,
      1, 1, 1, 0
    ])

    expect(encodedBits['array']).toEqual(solvedGrid['array'])
  })

  it('should decode hamming grid with no errors', () => {
    const hamming = new Hamming(16)

    // prettier-ignore
    const grid = new BitArray([
      0, 1, 0, 1,
      0, 1, 0, 1,
      1, 0, 1, 0,
      1, 0, 1, 0
    ])

    expect(hamming['decodeHammingGrid'](grid)).not.toBeNull()
    // prettier-ignore
    expect(hamming['decodeHammingGrid'](grid)!['array'])
      .toEqual([1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])
  })

  it('should decode hamming grid with 1 error', () => {
    const hamming = new Hamming(16)

    // prettier-ignore
    const grid = new BitArray([
      0, 1, 0, 1,
      0, 1, 1, 1,
      1, 0, 1, 0,
      1, 0, 1, 0
    ])

    expect(hamming['decodeHammingGrid'](grid)).not.toBeNull()
    // prettier-ignore
    expect(hamming['decodeHammingGrid'](grid)!['array'])
      .toEqual([1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])
  })

  it('should not decode hamming grid with 2 errors', () => {
    const hamming = new Hamming(16)

    // prettier-ignore
    const grid = new BitArray([
      0, 1, 0, 1,
      0, 1, 1, 1,
      1, 1, 1, 0,
      1, 0, 1, 0
    ])

    expect(hamming['decodeHammingGrid'](grid)).toBeNull()
  })

  it('should format with a removal chunk', () => {
    const hamming = new Hamming(16)

    const data = new BitArray([0, 1, 0, 1])
    const formatted = hamming['formatWithRemovalChunk'](data)

    // prettier-ignore
    const idealBitArray = new BitArray([
      0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1
    ])

    expect(formatted['array']).toEqual(idealBitArray['array'])
  })

  it('should encode a bit array', () => {
    const hamming = new Hamming(16)

    // prettier-ignore
    const data = new BitArray([
      0, 1, 0, 1
    ])

    const encoded = hamming.encodeBitArray(data)
    // prettier-ignore
    expect(encoded['array']).toEqual([
      1, 0, 1, 0,
      0, 1, 0, 1,
      0, 0, 0, 0,
      0, 0, 0, 0,

      1, 0, 0, 0,
      1, 0, 0, 0,
      1, 0, 0, 0,
      0, 1, 1, 1
    ])
  })

  it('should remove padding and removal chunk', () => {
    const hamming = new Hamming(16)

    // prettier-ignore
    const withRemovalChunk = new BitArray([
      0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1
    ])
    const withoutChunk = hamming['removePaddingAndRemovalChunkFrom'](withRemovalChunk)

    const idealBitArray = new BitArray([0, 1, 0, 1])

    expect(withoutChunk['array']).toEqual(idealBitArray['array'])
  })

  it('should decode an encoded bit array', () => {
    const hamming = new Hamming(16)

    // prettier-ignore
    const data = new BitArray([
      0, 1, 0, 1
    ])

    const encoded = hamming.encodeBitArray(data)
    const decoded = hamming.decodeBitArray(encoded)

    expect(decoded).not.toBeNull()
    expect(decoded!['array']).toEqual(data['array'])
  })

  it('should decode an encoded bit array that includes an error', () => {
    const hamming = new Hamming(32)

    const data = new BitArray([0, 1, 0, 1])

    const encoded = hamming.encodeBitArray(data)

    // Change a random bit
    const randomIndex = Math.round(Math.random() * (encoded.length - 2))
    encoded.toggleAt(randomIndex)

    const decoded = hamming.decodeBitArray(encoded)
    expect(decoded).not.toBeNull()
    expect(decoded!['array']).toEqual(data['array'])
  })
})

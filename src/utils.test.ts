import { calculateMultiplier } from './utils'

describe('utils', () => {
  test('should calculate multiplier', () => {
    const sampleRate = 48000
    const handshakeEnd = 4352
    const baseFrequency = 2304
    expect(calculateMultiplier(sampleRate, handshakeEnd, baseFrequency)).toBe(5.859375)
  })
})

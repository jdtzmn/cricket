/* ============================== */
/* ========= FREQUENCIES ======== */
/* ============================== */

/**
 * Calculate the multiplier based on the device's sample rate
 * @param sampleRate The sample rate of the microphone
 * @param handshakeEnd The handshake end frequency
 * @param baseFrequency The base for which other frequencies are based on
 * @returns The multiplier based on given parameters
 */
export const calculateMultiplier = (sampleRate: number, handshakeEnd: number, baseFrequency: number) => {
  // find the biggest multiplier in order to decrease fft size
  const defaultMultiplier = sampleRate / Math.pow(2, Math.ceil(Math.log(sampleRate) / Math.log(2)))
  const factor = Math.floor((handshakeEnd - baseFrequency) / 256 / defaultMultiplier)
  return defaultMultiplier * Math.pow(2, Math.floor(Math.log(factor) / Math.log(2)))
}

/**
 * Round a given frequency to the nearest frequency multiplier
 * @param frequency The note's frequency
 * @param multiplier The calculated multiplier
 * @returns The note's rounded frequency
 */
export const roundFrequency = (frequency: number, multiplier: number) => (
  Math.round(frequency / multiplier) * multiplier - multiplier / 2
)

/**
 * Gets the frequency index of a given frequency and multiplier
 * @param frequency The note's frequency
 * @param multiplier The calculated multiplier
 * @returns The frequency index
 */
export const getFreqIndex = (frequency: number, multiplier: number) => (
  Math.floor(frequency / multiplier)
)

/**
 * Determines if a frequency is dominant relative to its neighbors
 * @param index The frequency's index
 * @param array The array of frequencies
 * @returns The given frequency {number} if it is dominant otherwise {false}
 */
export const relativeFrequencyIsDominant = (index: number, array: number[]) => {
  const current = array[index]
  const next = array[index + 1]
  const prev = array[index - 1]
  if (prev < current && next < current) {
    return current
  }
  return false
}

/* ============================== */
/* ===== BINARY CONVERSIONS ===== */
/* ============================== */

/**
 * Convert a byte number to a bit array
 * @param byte A number representation of a byte (0-255)
 * @returns A bit array
 */
export const byteToBit = (byte: number) => {
  const buckets = new Array(8).fill(0)
  return buckets.map((_e, i) => {
    if (byte - Math.pow(2, 7 - i) >= 0) {
      return Math.min((byte -= Math.pow(2, 7 - i)) + 1, 1)
    }
    return 0
  })
}

/**
 * Converts a bit array to a byte number
 * @param bit A bit array
 * @returns A byte number
 */
export const bitToByte = (bit: number[]) => {
  return bit.reduce((sum: number, bitValue: number, index: number) => {
    return sum + bitValue * Math.pow(2, 7 - index)
  }, 0)
}

/* ============================== */
/* ======= DE/STRUCTERING ======= */
/* ============================== */

/**
 * Get groups of `num` size
 * @param arr A generic array
 * @param num The number of elements to be in each group
 */
export const getGroupsOf = (arr: any[], num: number) => {
  const size = Math.ceil(arr.length / num)
  return new Array(size).fill(undefined).reduce((arr, _element, i) => {
    const start = i * num
    const end = (i + 1) * num
    const slice = arr.slice(start, end)
    arr.concat([slice])
  }, [])
}

/**
 * Combine arrays of arrays into one array
 * @param arr An array of arrays
 */
export const combine = (arr: any[]) => {
  return arr.reduce((sum, e) => sum.concat(e), [])
}

/* ============================== */
/* ========== FILTERING ========= */
/* ============================== */

const indexIsEqual = (indexA: any[], indexB: any[]) => indexA[0] === indexB[0] && indexA[1] === indexB[1]

/**
 * Remove repeated data/general cleanup of data
 * @param data The data received from the listener
 */
export const reduce = (data: number[]): number[] => {
  if (!indexIsEqual(byteToBit(data[0]).slice(0, 2), [0, 0])) {
    return reduce(data.slice(1))
  }

  let lastIndex: number[] = []

  return data.filter(e => {
    let indexData = byteToBit(e).slice(0, 2)
    let duplicate = indexIsEqual(indexData, lastIndex)
    lastIndex = indexData
    return !duplicate
  })
}

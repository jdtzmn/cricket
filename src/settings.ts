export interface CricketSettings {
  duration: number // time in seconds for each frequency to play
  baseFrequency: number // base frequency to go up from
  packetSize: number // the bit size of the hamming encoders (must be a power of 2)
}

const defaultSettings: CricketSettings = {
  duration: 0.1,
  baseFrequency: 2304,
  packetSize: 16
}

export default defaultSettings

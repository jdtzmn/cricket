import { defaults } from 'lodash'
import defaultSettings, { CricketSettings } from './settings'
import BitArray from './bitArray'
import Hamming from './hamming'
import Interleaver from './interleaver'

interface WindowExtension {
  webkitAudioContext?: typeof window.AudioContext
}

declare var window: Window & typeof globalThis & WindowExtension

/**
 * @description The main cricket class
 * @export
 * @class Radar
 */
export default class Cricket {
  private readonly settings: CricketSettings
  private readonly hamming: Hamming
  private readonly interleaver: Interleaver

  constructor(settings?: Partial<CricketSettings>) {
    if (!(window.AudioContext || window.webkitAudioContext) && !(process.env.NODE_ENV === 'test')) {
      throw new Error('AudioContext is not supported in this browser')
    }

    this.settings = defaults(settings, defaultSettings)

    this.hamming = new Hamming(this.settings.packetSize)
    this.interleaver = new Interleaver(this.settings.packetSize)
  }

  /**
   * @description Send byte data over sound
   * @memberof Cricket
   */
  send(buffer: Uint8Array) {
    // TODO: finish writing this
  }

  /**
   * @description Package a byte array for transmission
   * @param {Uint8Array} buffer The byte array
   * @returns {Uint8Array} A packaged byte array with error correction mechanisms
   * @memberof Cricket
   */
  package(buffer: Uint8Array): Uint8Array {
    const bits = BitArray.from(buffer)
    const hammingEncoded = this.hamming.encodeBitArray(bits)
    const interleaved = this.interleaver.interleave(hammingEncoded)
    return interleaved.toUint8Array()
  }

  /**
   * @description Unpackage and error-correct a byte array
   * @param {Uint8Array} buffer The received byte array
   * @returns {(Uint8Array | null)} The original data byte array or null if decoding proves impossible
   * @memberof Cricket
   */
  unpackage(buffer: Uint8Array): Uint8Array | null {
    const bits = BitArray.from(buffer)
    const uninterleaved = this.interleaver.uninterleave(bits)
    const hammingDecoded = this.hamming.decodeBitArray(uninterleaved)
    if (hammingDecoded === null) return null
    return hammingDecoded.toUint8Array()
  }
}

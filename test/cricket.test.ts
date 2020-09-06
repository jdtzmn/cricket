import Cricket from '../src/cricket'

describe('Cricket class', () => {
  it('should be able to unpackage packaged data', () => {
    const cricket = new Cricket({
      packetSize: 64
    })

    const data = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8])
    const packaged = cricket.package(data)
    const unpackaged = cricket.unpackage(packaged)
    expect(unpackaged).toEqual(data)
  })
})

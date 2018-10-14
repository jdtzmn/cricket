[cricket](../README.md) > ["utils"](../modules/_utils_.md)

# External module: "utils"

## Index

### Functions

* [bitToByte](_utils_.md#bittobyte)
* [byteToBit](_utils_.md#bytetobit)
* [calculateMultiplier](_utils_.md#calculatemultiplier)
* [combine](_utils_.md#combine)
* [getFreqIndex](_utils_.md#getfreqindex)
* [getGroupsOf](_utils_.md#getgroupsof)
* [indexIsEqual](_utils_.md#indexisequal)
* [reduce](_utils_.md#reduce)
* [relativeFrequencyIsDominant](_utils_.md#relativefrequencyisdominant)
* [roundFrequency](_utils_.md#roundfrequency)

---

## Functions

<a id="bittobyte"></a>

### `<Const>` bitToByte

▸ **bitToByte**(bit: *`number`[]*): `number`

*Defined in utils.ts:79*

Converts a bit array to a byte number

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bit | `number`[] |  A bit array |

**Returns:** `number`
A byte number

___
<a id="bytetobit"></a>

### `<Const>` byteToBit

▸ **byteToBit**(byte: *`number`*): `number`[]

*Defined in utils.ts:64*

Convert a byte number to a bit array

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| byte | `number` |  A number representation of a byte (0-255) |

**Returns:** `number`[]
A bit array

___
<a id="calculatemultiplier"></a>

### `<Const>` calculateMultiplier

▸ **calculateMultiplier**(sampleRate: *`number`*, handshakeEnd: *`number`*, baseFrequency: *`number`*): `number`

*Defined in utils.ts:12*

Calculate the multiplier based on the device's sample rate

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sampleRate | `number` |  The sapmle rate of the microphone |
| handshakeEnd | `number` |  The handshake end frequency |
| baseFrequency | `number` |  The base for which other frequencies are based on |

**Returns:** `number`
The multiplier based on given parameters

___
<a id="combine"></a>

### `<Const>` combine

▸ **combine**(arr: *`any`[]*): `any`

*Defined in utils.ts:108*

Combine arrays of arrays into one array

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| arr | `any`[] |  An array of arrays |

**Returns:** `any`

___
<a id="getfreqindex"></a>

### `<Const>` getFreqIndex

▸ **getFreqIndex**(frequency: *`number`*, multiplier: *`number`*): `number`

*Defined in utils.ts:35*

Gets the frequency index of a given frequency and multiplier

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| frequency | `number` |  The note's frequency |
| multiplier | `number` |  The calculated multiplier |

**Returns:** `number`
The frequency index

___
<a id="getgroupsof"></a>

### `<Const>` getGroupsOf

▸ **getGroupsOf**(arr: *`any`[]*, num: *`number`*): `any`

*Defined in utils.ts:94*

Get groups of `num` size

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| arr | `any`[] |  A generic array |
| num | `number` |  The number of elements to be in each group |

**Returns:** `any`

___
<a id="indexisequal"></a>

### `<Const>` indexIsEqual

▸ **indexIsEqual**(indexA: *`any`[]*, indexB: *`any`[]*): `boolean`

*Defined in utils.ts:116*

**Parameters:**

| Param | Type |
| ------ | ------ |
| indexA | `any`[] |
| indexB | `any`[] |

**Returns:** `boolean`

___
<a id="reduce"></a>

### `<Const>` reduce

▸ **reduce**(data: *`number`[]*): `number`[]

*Defined in utils.ts:122*

Remove repeated data/general cleanup of data

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `number`[] |  The data received from the listener |

**Returns:** `number`[]

___
<a id="relativefrequencyisdominant"></a>

### `<Const>` relativeFrequencyIsDominant

▸ **relativeFrequencyIsDominant**(index: *`number`*, array: *`number`[]*):  `number` &#124; `false`

*Defined in utils.ts:45*

Determines if a frequency is dominant relative to its neighbors

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| index | `number` |  The frequency's index |
| array | `number`[] |  The array of frequencies |

**Returns:**  `number` &#124; `false`

The given frequency {number} if it is dominant otherwise {false}

___
<a id="roundfrequency"></a>

### `<Const>` roundFrequency

▸ **roundFrequency**(frequency: *`number`*, multiplier: *`number`*): `number`

*Defined in utils.ts:25*

Round a given frequency to the nearest frequency multiplier

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| frequency | `number` |  The note's frequency |
| multiplier | `number` |  The calculated multiplier |

**Returns:** `number`
The note's rounded frequency

___


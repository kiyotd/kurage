import { getType } from "../../src";

test("getType 123 valid", () => {
  expect(getType(123)).toBe("Number");
});

test('getType "sample" valid', () => {
  expect(getType("sample")).toBe("String");
});

test("getType true valid", () => {
  expect(getType(true)).toBe("Boolean");
});

test("getType [] valid", () => {
  expect(getType([])).toBe("Array");
});

test("getType {} valid", () => {
  expect(getType({})).toBe("Object");
});

test("getType NaN valid", () => {
  expect(getType(NaN)).toBe("NaN");
});

test("getType Infinity valid", () => {
  expect(getType(Infinity)).toBe("Infinity");
  expect(getType(-Infinity)).toBe("Infinity");
});

test("getType function valid", () => {
  expect(getType(function () {})).toBe("Function");
});

test("getType null valid", () => {
  expect(getType(null)).toBe("Null");
});

test("getType undefined valid", () => {
  expect(getType(undefined)).toBe("Undefined");
});

test("getType Symbol valid", () => {
  expect(getType(Symbol())).toBe("Symbol");
});

test("getType BigInt valid", () => {
  expect(getType(BigInt(123))).toBe("BigInt");
});

test("getType new Date() valid", () => {
  expect(getType(new Date())).toBe("Date");
});

test("getType new RegExp() valid", () => {
  expect(getType(new RegExp("\\w+"))).toBe("RegExp");
});

test("getType new Error() valid", () => {
  expect(getType(new Error())).toBe("Error");
});

test("getType new Map() valid", () => {
  expect(getType(new Map())).toBe("Map");
});

test("getType new Set() valid", () => {
  expect(getType(new Set())).toBe("Set");
});

test("getType new WeakMap() valid", () => {
  expect(getType(new WeakMap())).toBe("WeakMap");
});

test("getType new WeakSet() valid", () => {
  expect(getType(new WeakSet())).toBe("WeakSet");
});

test("getType new Int8Array() valid", () => {
  expect(getType(new Int8Array())).toBe("Int8Array");
});

test("getType new Uint8Array() valid", () => {
  expect(getType(new Uint8Array())).toBe("Uint8Array");
});

test("getType new Uint8ClampedArray() valid", () => {
  expect(getType(new Uint8ClampedArray())).toBe("Uint8ClampedArray");
});

test("getType new Int16Array() valid", () => {
  expect(getType(new Int16Array())).toBe("Int16Array");
});

test("getType new Uint16Array() valid", () => {
  expect(getType(new Uint16Array())).toBe("Uint16Array");
});

test("getType new Int32Array() valid", () => {
  expect(getType(new Int32Array())).toBe("Int32Array");
});

test("getType new Uint32Array() valid", () => {
  expect(getType(new Uint32Array())).toBe("Uint32Array");
});

test("getType new Float32Array() valid", () => {
  expect(getType(new Float32Array())).toBe("Float32Array");
});

test("getType new Float64Array() valid", () => {
  expect(getType(new Float64Array())).toBe("Float64Array");
});

test("getType new BigInt64Array() valid", () => {
  expect(getType(new BigInt64Array())).toBe("BigInt64Array");
});

test("getType new BigUint64Array() valid", () => {
  expect(getType(new BigUint64Array())).toBe("BigUint64Array");
});

test("getType new Promise() valid", () => {
  expect(getType(new Promise(() => {}))).toBe("Promise");
});

// JavaScript の制限により、Proxy オブジェクトを確実に検出することは出来ない
// 2023/10/20 時点
// test('getType new Proxy() valid', () => {
//   expect(getType(new Proxy({}, {}))).toBe('Proxy');
// });

test("getType new ArrayBuffer() valid", () => {
  expect(getType(new ArrayBuffer(8))).toBe("ArrayBuffer");
});

test("getType new SharedArrayBuffer() valid", () => {
  expect(getType(new SharedArrayBuffer(1024))).toBe("SharedArrayBuffer");
});

test("getType new DataView() valid", () => {
  expect(getType(new DataView(new ArrayBuffer(8)))).toBe("DataView");
});

test("getType new URLSearchParams() valid", () => {
  expect(getType(new URLSearchParams())).toBe("URLSearchParams");
});

test("getType new Blob() valid", () => {
  expect(getType(new Blob())).toBe("Blob");
});

// test('getType new File() valid', () => {
//   expect(getType(new File([], ''))).toBe('File');
// });

// test('getType new FileList() valid', () => {
//   expect(getType(new FileList())).toBe('FileList');
// });

// test('getType new ImageData() valid', () => {
//   expect(getType(new ImageData(1, 1))).toBe('ImageData');
// });

// test('getType new ImageBitmap() valid', () => {
//   expect(getType(new ImageBitmap())).toBe('ImageBitmap');
// });

test("getType new WeakRef() valid", () => {
  // tsconfig.json の lib で es2021.weakref を指定する必要がある
  // "lib": [
  //   "es2021.weakref"
  // ]
  expect(getType(new WeakRef({ name: "object 1" }))).toBe("WeakRef");
});

test("getType new FinalizationRegistry() valid", () => {
  expect(getType(new FinalizationRegistry(() => {}))).toBe("FinalizationRegistry");
});

test("getType new WeakSet() valid", () => {
  expect(getType(new WeakSet())).toBe("WeakSet");
});

test("getType new WeakMap() valid", () => {
  expect(getType(new WeakMap())).toBe("WeakMap");
});

test("getType new URL() valid", () => {
  expect(getType(new URL("http://localhost"))).toBe("URL");
});

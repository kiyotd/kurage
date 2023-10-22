/**
 * JSON文字列をオブジェクトに変換
 *
 * Convert a JSON string to an object
 *
 * @param {string} json - JSON文字列。 JSON string.
 * @returns {object} オブジェクト。 Object.
 *
 * @example
 * const obj = jsonToObject('{"message":"hello"}'); // { message: 'hello' }
 */
function jsonToObject(json: string): object {
  return JSON.parse(json);
}

export { jsonToObject };

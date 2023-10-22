/**
 * オブジェクトをJSON文字列に変換する
 *
 * Object to JSON string
 *
 * @param {object} obj - 変換するオブジェクト。 The object to convert.
 * @returns {string} JSON文字列。 JSON string.
 *
 * @example
 *
 * # { message: 'hello' } をJSON文字列に変換する
 * objectToJson({ message: 'hello' }) // '{"message":"hello"}'
 *
 * # {} をJSON文字列に変換する
 * objectToJson({}) // '{}'
 */
function objectToJson(obj: object): string {
  return JSON.stringify(obj);
}

export { objectToJson };

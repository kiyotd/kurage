/**
 * オブジェクトユーティリティメソッドを提供するクラス
 *
 * Class to provide object utility methods
 *
 * @class ObjectUtil
 */

export default class ObjectUtil {
  /**
   * オブジェクトをJSON文字列に変換
   *
   * Convert object to JSON string
   *
   * @param {object} obj - 変換するオブジェクト。 The object to convert.
   * @returns {string} JSON文字列。 JSON string.
   *
   * @example
   *
   * # { message: 'hello' } をJSON文字列に変換する
   * ObjectUtil.objToJson({ message: 'hello' }) // '{"message":"hello"}'
   *
   * # {} をJSON文字列に変換する
   * ObjectUtil.objToJson({}) // '{}'
   */
  static objToJson(obj: object): string {
    return JSON.stringify(obj);
  }
}

/**
 * JSONユーティリティメソッドを提供するクラス
 *
 * Class to provide JSON utility methods
 *
 * @class JsonUtil
 */

export default class JsonUtil {
  /**
   * JSON文字列をオブジェクトに変換
   *
   * Convert a JSON string to an object
   *
   * @param {string} json - JSON文字列。 JSON string.
   * @returns {object} オブジェクト。 Object.
   *
   * @example
   * const obj = jsonToObj('{"message":"hello"}'); // { message: 'hello' }
   */
  static jsonToObj(json: string): object {
    return JSON.parse(json);
  }
}

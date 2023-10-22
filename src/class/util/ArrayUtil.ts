/**
 * 配列ユーティリティメソッドを提供するクラス
 *
 * Class to provide array utility methods
 *
 * @class ArrayUtil
 */

export default class ArrayUtil {
  /**
   * 数値の配列をソートする
   *
   * Method to sort an array of numbers
   *
   * @param {number[]} numArr - 数値の配列。 Array of numbers.
   * @return {number[]} ソートされた数値の配列。 Sorted array of numbers.
   *
   * @example
   *
   * ArrayUtil.sortNumber([1, 3, 2, 100]) // [1, 2, 3, 100]
   */
  static sortNumber(numArr: number[]): number[] {
    return numArr.sort((a, b) => a - b);
  }
}

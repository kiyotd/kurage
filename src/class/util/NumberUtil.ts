/**
 * 数値ユーティリティメソッドを提供するクラス
 *
 * Class that provides number utility methods
 *
 * @class NumberUtil
 */
export default class NumberUtil {
  /**
   * 与えられた数値を一つの範囲から別の範囲にマッピングします。
   *
   * Maps a given number from one range to another.
   *
   * @param {number} inputNumber - マッピングする数値。 The number to map.
   * @param {number} start1 - 元の範囲の開始値。 The start value of the original range.
   * @param {number} end1 - 元の範囲の終了値。 The end value of the original range.
   * @param {number} start2 - 新しい範囲の開始値。 The start value of the new range.
   * @param {number} end2 - 新しい範囲の終了値。 The end value of the new range.
   * @returns {number} マッピングされた数値。 The mapped number.
   *
   * @example
   *
   * # 元の範囲が0から100で、新しい範囲が0から1の場合
   * map(50, 0, 100, 0, 1) // 0.5
   *
   * # 元の範囲が0から100で、新しい範囲が0から10の場合
   * map(50, 0, 100, 0, 10) // 5
   */
  static map(inputNumber: number, start1: number, end1: number, start2: number, end2: number): number {
    return ((inputNumber - start1) / (end1 - start1)) * (end2 - start2) + start2;
  }
}

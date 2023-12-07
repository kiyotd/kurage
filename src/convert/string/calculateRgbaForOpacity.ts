/**
 * 透明度のない色を限りなく近い色で、透明度を指定した色に変換します
 *
 * Converts a color with no transparency to a color with a specified transparency, as close as possible.
 *
 * @param {string} color ex: "80,209,173" or "#50d1ad"
 * @param {number} opacity 0 ~ 1.0
 *
 * @example
 *
 * # "rgb(80,209,173)" に限りなく近い色で、透明度を 0.75 にした場合の RGBA 値を取得
 * calculateRgbaForOpacity("80,209,173", 0.75); // rgba(22,194,146,0.75)
 *
 * # "#7d0000" に限りなく近い色で、透明度を 0.75 にした場合の RGBA 値を取得
 * calculateRgbaForOpacity("#50d1ad", 0.75); // rgba(22,194,146,0.75)
 */
export function calculateRgbaForOpacity(color: string, opacity: number): string {
  // 先頭と末尾の半角スペースを除去
  color = color.trim();

  let rgbValues: number[];

  // 色が #ff0000 形式の場合
  if (color.startsWith("#")) {
    const hex = color.substring(1); // 先頭の '#' を取り除く
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgbValues = [r, g, b];
  }
  // 色が 255, 0, 0 形式の場合
  else {
    rgbValues = color.split(",").map((s) => Number(s.trim())); // カンマで分割し、各要素の先頭と末尾の空白を削除
  }

  // 透明度を考慮した新しいRGB値を計算します
  const newRgbValues = rgbValues.map((value) => Math.round(255 - (255 - value) / opacity));

  // 新しいRGB値と透明度を組み合わせて、rgba形式の文字列を作成します
  const rgba = `rgba(${newRgbValues.join(",")},${opacity})`;

  return rgba;
}

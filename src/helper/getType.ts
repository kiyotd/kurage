/**
 * 型を文字列で取得する
 *
 * Get the type of a value as a string.
 *
 * @param {any} value - 型を取得したい値。 The value you want to get the type of.
 * @returns {string} 型の文字列。 The type string.
 *
 * @example
 *
 * # 数値の型を取得する
 *
 * # Get the type of a number.
 * getType(123); // "Number"
 *
 * # 論理値の型を取得する
 * # Get the type of a boolean.
 *
 * @example getType(true); // "Boolean"
 *
 * # 配列の型を取得する
 * # Get the type of an array.
 *
 * getType([]); // "Array"
 *
 * # オブジェクトの型を取得する
 * # Get the type of an object.
 *
 * getType({}); // "Object"
 *
 * # NaN の型を取得する
 * # Get the type of NaN.
 *
 * getType(NaN); // "NaN"
 *
 * # Infinite の型を取得する
 * # Get the type of Infinite.
 *
 * getType(Infinity); // "Infinity"
 * getType(-Infinity); // "Infinity"
 *
 * # 関数の型を取得する
 * # Get the type of a function.
 *
 * getType(function(){}); // "Function"
 */
function getType(value: any): string {
  //NaN
  if (value != value) return "NaN";
  //Infinite
  if (value === Infinity || value === -Infinity) return "Infinity";
  //Proxy
  // if (value instanceof Proxy) return 'Proxy';

  let str: string = Object.prototype.toString.call(value);
  // str = str.replace("[", "");
  str = str.replace("]", "");
  return str.split(" ")[1];
}

export { getType };

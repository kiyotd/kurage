/**
 * キャメルケースをケバブケースに変換する
 *
 * Camel case to kebab case
 *
 * @param {string} str - キャメルケースの文字列。 The camel case string.
 * @returns {string} ケバブケースの文字列。 The kebab case string.
 *
 * @example
 *
 * # "setUserName" をケバブケースに変換する
 * camelCaseToKebabCase("setUserName"); // "set-user-name"
 */
function camelCaseToKebabCase(str: string): string {
  const regex = /([a-z0-9]|(?=[A-Z]))([A-Z])/g;

  let result: string = str.replace(regex, "$1-$2");

  // 先頭の連続したハイフンを削除する
  result = result.replace(/^-+/, "");

  // 末尾の連続したハイフンを削除する
  result = result.replace(/-+$/, "");

  // 小文字に変換する
  result = result.toLowerCase();

  return result;
}

export { camelCaseToKebabCase };

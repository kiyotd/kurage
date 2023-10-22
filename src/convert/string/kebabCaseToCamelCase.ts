/**
 * ケバブケースをキャメルケースに変換する。
 *
 * Convert from kebab case to camel case.
 *
 * @param {string} str - ケバブケースの文字列。 The kebab case string.
 * @returns {string} キャメルケースの文字列。 The camel case string.
 *
 * @example
 *
 * kebabCaseToCamelCase("set-user-name"); // "setUserName"
 */
function kebabCaseToCamelCase(str: string): string {
  // trim
  let _str = str.trim();

  // 小文字に変換
  _str = _str.toLowerCase();

  const regex = /-([a-zA-Z])/g;

  return _str.replace(regex, (match, offset) => offset.toUpperCase());
}

export { kebabCaseToCamelCase };

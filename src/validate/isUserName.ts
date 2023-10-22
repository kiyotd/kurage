/**
 * ユーザー名の形式が正しいかどうかを判定
 *
 * User name format is correct or not
 *
 * @param {string} userName - ユーザー名。 User name.
 * @param {number} [minLength=3] - 最小文字数。 Minimum number of characters.
 * @param {number} [maxLength=15] - 最大文字数。 Maximum number of characters.
 * @returns {boolean} 正しい形式の場合は true, そうでない場合は false。 True if the format is correct, false otherwise.
 *
 * @example
 * isUserName("name", 3, 5); // true
 * isUserName("name", 5, 8); // false
 * isUserName("_name"); // true
 * isUserName("na"); // false
 */
function isUserName(userName: string, minLength = 3, maxLength = 15): boolean {
  if (userName.length < minLength) return false;
  if (maxLength < userName.length) return false;

  const regex = new RegExp("^[a-z_][a-z0-9_]{" + minLength + "," + maxLength + "}$");
  return regex.test(userName);
  // const match: RegExpMatchArray | null = userName.match(regex);
  // return !!match;
}

export { isUserName };

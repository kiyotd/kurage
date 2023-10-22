/**
 * Email が正しい形式かどうかを判定
 *
 * Email is correct format?
 *
 * @param {string} email - メールアドレス。 Email address.
 * @returns {boolean} 正しい形式の場合は true, そうでない場合は false。 True if the format is correct, false otherwise.
 *
 * @example
 *
 * # example@example.com valid
 * isEmail('example@example.com'); // true
 *
 * # Empty string not valid
 * isEmail('); // false
 *
 * # No double @ in an email
 * isEmail('exa@mple@example.com'); // false
 *
 * # not trimed email to be false
 * isEmail(' example@example.com '); // false
 *
 * # Including +
 * isEmail('example+@exmaple.com'); // true
 * isEmail('example+123@exmaple.com'); // true
 */

function isEmail(email: string): boolean {
  if (email === "") return false;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
}

export { isEmail };

/**
 * IPv4アドレスの形式が正しいかどうかを判定
 *
 * IPv4 address format is correct or not
 *
 * @param {string} ip - IPv4アドレス。 IPv4 address.
 * @returns {boolean} 正しい形式の場合は true, そうでない場合は false。 True if the format is correct, false otherwise.
 *
 * @example
 * isIPv4("255.255.255.255"); // true
 * isIPv4("255.255.255.256"); // false
 */
function isIPv4(ip: string): boolean {
  const ipv4Regex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipv4Regex.test(ip);
}

export { isIPv4 };

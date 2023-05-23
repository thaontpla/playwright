/**
 * Extract codename from test's description. a code name will begin with @TS_ or @TC_
 * @param testDescriptions
 * @returns
 */
export function extractCodeName(testDescriptions: string) {
  const result = testDescriptions
    .split(/(\s+)/)
    .filter((str) => /^@T[S|C]_|^@SB_/.test(str))
    .map((str) => str.replace(/@/, ""));
  return result;
}

/**
 * Remove currency symbol and correct format
 * For example: $57,35 become 57.35
 * @param val
 * @returns
 */
export function removeCurrencySymbol(val: string): string {
  const regex = /[^0-9\\.-]+/g;
  return val.replace(regex, "").replace(/\s/g, "").replace(",", ".");
}

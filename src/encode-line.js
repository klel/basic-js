const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let buff = '';
  let count = 0;
  for (let s of str) {
    if (!buff) {
      buff = s;
      count += 1;
      continue;
    }
    if (buff === s) {
      count += 1;
    } else {
      result += count > 1 ? count + buff : buff;
      buff = s;
      count = 1;
    }
  }

  return result + (count > 1 ? count + buff : buff);
}

module.exports = {
  encodeLine
};

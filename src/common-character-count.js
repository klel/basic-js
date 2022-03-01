const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const map1 = s1.split('')
    .reduce((acc, curr) => {
      acc[curr] ? acc[curr] += 1 : acc[curr] = 1;
      return acc;
    }, {});

  const map2 = s2.split('')
    .reduce((acc, curr) => {
      acc[curr] ? acc[curr] += 1 : acc[curr] = 1;
      return acc;
    }, {});

  const result = Object.entries(map1).reduce((acc, [prop, count]) => {
    if (prop in map2) {
      return acc += Math.max(count, map2[prop]) - Math.abs(count - map2[prop]);
    }
    return acc;
  }, 0);

  return result;


}

module.exports = {
  getCommonCharacterCount
};

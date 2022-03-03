const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // return arr.sort((a, b) => {
  //   if (a === -1 || b === -1) return 0;
  //   if (b === -1 && a > -1) return 1;
  //   if (a === -1 && b > -1) return 1;

  //   return a - b;
  // })
  const ones = arr.reduce((a, c, i) => c === -1 ? a.concat(i) : a, []);
  const sorted = arr.filter(e => e !== -1).sort((a, b) => a - b);
  ones.forEach(e => {
    sorted.splice(e, 0, -1);
  });

  return sorted;

}

module.exports = {
  sortByHeight
};

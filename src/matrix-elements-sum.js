const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const mw = matrix[0].length;
  let flatted = matrix.reduce((a, c) => a.concat(...c), [])
    .reduceRight((a, c, i, arr) => {
      return arr[i - mw] !== 0 ? a + c : a;
    }, 0);
  return flatted;
}

module.exports = {
  getMatrixElementsSum
};

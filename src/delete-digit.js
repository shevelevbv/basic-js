const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = `${n}`;
  let max = 0;
  for (let i = 0; i < n.length; i++) {
    let temp = n.substring(0, i) + n.substring(i + 1);
    if (parseInt(temp, 10) > max) {
      max = parseInt(temp, 10);
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};

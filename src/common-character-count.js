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
  let letterKeeper = {};
  let counter = 0;
  for (let letter of s1) {
    if (!letterKeeper.hasOwnProperty(letter)) {
      letterKeeper[letter] = 1;
    } else {
      letterKeeper[letter]++;
    }
  }
  for (let letter of s2) {
    if (letterKeeper.hasOwnProperty(letter) && letterKeeper[letter] > 0) {
      letterKeeper[letter]--;
      counter++;
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};

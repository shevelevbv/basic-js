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
  if (str.length === 0) {
    return '';
  }
  let resultingString = '';
  let counter = 1;
  let letter = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === letter) {
      counter++;
    } else {
      resultingString += counter > 1 ?`${counter}${letter}` : letter;
      letter = str[i];
      counter = 1;
    }
  }
  resultingString += counter > 1 ?`${counter}${letter}` : letter;
  return resultingString;
}

console.log(encodeLine('aabbbc'));



module.exports = {
  encodeLine
};

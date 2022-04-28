const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options === undefined) {
    options = {
    }
  }
  if (typeof str != 'string') {
    str = `${str}`;
  }
  if (!options.hasOwnProperty('addition')) {
    options.addition = '';
  }
  if (typeof options.addition != 'string') {
    options.addition = `${options.addition}`;
  }
  if (!options.hasOwnProperty('repeatTimes')) {
    options.repeatTimes = 1;
  }
  if (!options.hasOwnProperty('additionRepeatTimes')) {
    options.additionRepeatTimes = 1;
  }
  if (!options.hasOwnProperty('separator')) {
    options.separator = '+';
  }
  if (!options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|';
  }

  let resultingStrings = [];
  let tempStrings = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    tempStrings.push(options.addition);
  }

  let resultingString = str + tempStrings.join(options.additionSeparator);

  for (let i = 0; i < options.repeatTimes; i++) {
    resultingStrings.push(resultingString);
  }

  return resultingStrings.join(options.separator);
}

module.exports = {
  repeater
};

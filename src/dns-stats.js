const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

 function getDNSStats(domains) {
  let resultingObject = {};
  domains.forEach(domain => {
    let temp = '';
    domain.split('.').reverse().forEach(item => {
      temp += `.${item}`;
      resultingObject[temp] = resultingObject.hasOwnProperty(temp) ? resultingObject[temp] + 1 : 1;
    })
  });
  return resultingObject;
}
/*
function getDNSStats(domains) {
  let resultingObject = {};
  domains.forEach(domain => {
    domain = domain.split('.');
    let temp = '';
    for (let i = domain.length - 1; i >= 0; i--) {
      temp += '.' + domain[i];
      if (resultingObject.hasOwnProperty(temp)) {
        resultingObject[temp]++;
      } else {
        resultingObject[temp] = 1;
      }
    }
  });
  return resultingObject;
}
*/

module.exports = {
  getDNSStats
};

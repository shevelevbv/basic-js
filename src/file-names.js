const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let namesObject = {};
  let resultingArray = [];
  names.forEach(name => {
    if (namesObject.hasOwnProperty(name)) {
      namesObject[name]++;
      namesObject[`${name}(${namesObject[name]})`] = 0;
    } else {
      namesObject[name] = 0;
    }
    resultingArray.push(namesObject[name] === 0 ? name: `${name}(${namesObject[name]})`);
  });
  return resultingArray;
}

module.exports = {
  renameFiles
};

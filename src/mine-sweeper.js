const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let resultingMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    let resultingRow = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let counter = 0;
      for (let k = i - 1; k < i + 2; k++) {
        if (k > -1 && k < matrix.length) {
          for (let l = j - 1; l < j + 2; l++) {    
            if (l > -1 && l < matrix[k].length) {
              if (i !== k || j !== l) {
                if (matrix[k][l]) {
                  counter++;
                }
              }
            }
          }
        }
      }
      resultingRow.push(counter);
    }
    resultingMatrix.push(resultingRow);
  }
  return resultingMatrix;
}

module.exports = {
  minesweeper
};

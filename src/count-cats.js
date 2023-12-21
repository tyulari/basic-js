const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
 let result = 0;
 matrix.forEach((str) => {
  str.forEach((el) => {
    if(el === "^^"){
      result += 1;
    }
  })
 });

 return result;
}

module.exports = {
  countCats
};

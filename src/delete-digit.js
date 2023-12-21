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
 let arrN = n.toString().split('');
 let arrNum = arrN.map((el, i) => {
    let elem = arrN.slice();
    elem.splice(i, 1);
    return Number(elem.join(''));
 });

 return Math.max.apply(null, arrNum);
}

module.exports = {
  deleteDigit
};

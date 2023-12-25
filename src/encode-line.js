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
  let sum = 1;
  let result ='';
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i+1]){
      sum = sum + 1;
    }
    else{
      result += `${sum}${arr[i]}`;
      sum = 1;
    }
  }
  return result.split('').filter(el => el !== '1').join('');
}

module.exports = {
  encodeLine
};

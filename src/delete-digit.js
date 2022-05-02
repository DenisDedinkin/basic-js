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
  
  let str = n.toString();

  let x = 0;

  for (let i = 0; i < str.length; i++) {

    let y = str.slice(0, i) + str.slice(i + 1, str.length);
    y = +y;
    
    if (y > x) {
      x = y;
    }
  }

  return (x);
}

module.exports = {
  deleteDigit
};

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
 
  let ar1 = [...s1];
  let ar2 = [...s2];

  let n = 0; //счетчик

  for (let i = 0; i < ar1.length; i++) {
    
    let x = ar2.indexOf(s1[i]);
    
    if (x !== -1) {
      n++;
      ar2[x] = "";
    }
  }
  return n;

}

module.exports = {
  getCommonCharacterCount
};

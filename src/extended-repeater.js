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
  
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';

  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
    
  let addition = options.addition === undefined ? '' : '' + options.addition;
    addition += '' 
  
    let n = [];
    
  for (let i = 0; i < additionRepeatTimes; i++) {
    n.push(addition);
  }  
  
  let x = [];

  for (let i = 0; i < repeatTimes; i++) {
    x.push(str + n.join(additionSeparator))
  }

  return (x.join(separator));
  
}

module.exports = {
  repeater
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, result = 1) {

    
    if (arr.length === 0) {
      return (result);
    }

    if (arr.find(value => Array.isArray(value))) {
      result++;
      arr = arr.flat();
      return this.calculateDepth(arr, result)
    }

    return (result);
  }
}


module.exports = {
  DepthCalculator
};

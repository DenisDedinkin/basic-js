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
  let result = [];

  names.forEach(element => {

    if (result.find(item => item === element)) {

      let x = result.reduce((currentValue, index) => {
             
      if (index === element) {                    
        currentValue++;
      } 
        return currentValue;
      }, 0);

      let y = [...element].map(index=>index).reverse();
          
      if (result.find(item => item === `${element}(${x})`)) {
        x++;
      }  
        element = `${element}(${x})`;
      }
      result.push(element);
  });

  return (result);
}


module.exports = {
  renameFiles
};

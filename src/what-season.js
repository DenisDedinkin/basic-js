const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!arguments.length)  {
    return 'Unable to determine the time of year!';
    }
  if ((!(date instanceof Date === false)) || (Object.getOwnPropertyNames(date).length > 0)) {
    throw (new Error("Invalid date!"));
  }

  if((date.getMonth() >= 2) && (date.getMonth() <= 4)) {
    return('spring');
  } 
  if((date.getMonth() >= 5) && (date.getMonth() <= 7)) {
     return('summer');
    } 
    if((date.getMonth() >= 8) && (date.getMonth() <= 10)) {
       return('autum');
    } 
    else {
      return('winter');
    }

}
    
    module.exports = {
      getSeason
    };

module.exports = {
  getSeason
};

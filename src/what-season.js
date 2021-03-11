const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!date) throw new CustomError('Unable to determine the time of year!');
  if (!(date instanceof Date && !Number.isNaN(date.valueOf())))
    throw new CustomError('Unable to determine the time of year!');
  let month = date.getMonth() + 1;
  if (month === 12 || month === 1 || month === 2) return 'winter';
  else if (month === 3 || month === 4 || month === 5) return 'spring';
  else if (month === 6 || month === 7 || month === 8) return 'summer';
  else if (month === 9 || month === 10 || month === 11) return 'autumn (fall)';
  else throw new CustomError('Please enter correct date!');
};

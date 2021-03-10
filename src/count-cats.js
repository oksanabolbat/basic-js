const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  let cats = 0;
  matrix.flat().forEach((element) => {
    if (element === '^^') cats++;
  });
  return cats;
};

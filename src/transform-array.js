const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  //remove line with error and write your code here
  if (!Array.isArray(arr)) throw new CustomError("It isn't an array");
  if (arr.length === 0) return [];
  let trArr = [];
  let commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  //console.log('array ', arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === commands[0]) {
      i++;
    } else if (arr[i] === commands[1] && i > 0) {
      trArr.pop();
    } else if (arr[i] === commands[2] && i < arr.length - 1) {
      trArr.push(arr[i + 1]);
    } else if (arr[i] === commands[3] && i > 0) {
      trArr.push(arr[i - 1]);
    } else {
      if (!commands.includes(arr[i])) trArr.push(arr[i]);
    }
  }
  if (arr[3] ===1337) {console.log('array ', arr, 'tr array ', trArr);}
  //
  return trArr;
};

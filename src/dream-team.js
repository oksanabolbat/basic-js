const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');

  if (!Array.isArray(members)) return false;
  members = members.map((item) => (typeof item === 'string' ? item.trim()[0].toUpperCase() : ''));

  return members.sort().join('');
};

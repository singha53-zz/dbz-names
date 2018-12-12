const dbzNames = require('./dbz-names.json');
const uniqueRandomArray = require('unique-random-array')

module.exports = {
  all: dbzNames,
  random: uniqueRandomArray(dbzNames)
}
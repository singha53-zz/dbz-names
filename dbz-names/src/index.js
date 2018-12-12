const starWarsNames = require('./starwars-names.json');
const uniqueRandomArray = require('unique-random-array')

modules.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
}
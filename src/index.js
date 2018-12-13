const uniqueRandomArray = require('unique-random-array');
const dbzNames = require('./dbz-names.json');
let getRandomItem = uniqueRandomArray(dbzNames);

module.exports = {
  all: dbzNames,
  random: random
}

function random(number) {
  if (number === undefined){
    return getRandomItem();
  } else {
    return Array(number).map(d => {
      return getRandomItem()
    });
  }
}
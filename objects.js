"use strict";


// 1. countWords
function countWords(phrase) {
  const wordCounts = {};
  const words = phrase.split(' ');

  for(const word of words) {
    if(word in wordCounts) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}
// console.log(countWords('coding is fun when coding'))


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
  const melonPrices = {
    '2.50': ['Cantaloupe', 'Honeydew'],
    '2.95': ['Watermelon'],
    '3.25': ['Musk', 'Crenshaw'],
    '14.25': ['Christmas']
  };

  if (!(price in melonPrices)) {
    return 
  } else {
    return melonPrices[price].sort()
  }
}

// console.log(getMelonsAtPrice('2.50'))
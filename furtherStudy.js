"use strict";


function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);
  const result = [];

  for(const word of words1Set) {
    if(words2Set.has(word)) {
      result.push(word);
    }
  }

  return result;
}
// console.log(wordsInCommon(['cat', 'dog', 'mouse'], ['cat', 'mouse', 'deer']))


function kidsGame(names) {

  const firstLetterToWords = {};
  const output = [names.shift()];

  for (const name of names) {
    if (!(name[0] in firstLetterToWords)) {
      firstLetterToWords[name[0]] = [name];
    } else {
      firstLetterToWords[name[0]].push(name);
    }
  }

  while (true) {
    const len = output.length - 1;
    const len2 = output[len].length - 1;
    const startLetter = output[len][len2];

    if (firstLetterToWords[startLetter].length === 0) {
      break;
    }
    const word = firstLetterToWords[startLetter].shift();
    output.push(word);
  }

  return output;
}

// console.log(kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]))

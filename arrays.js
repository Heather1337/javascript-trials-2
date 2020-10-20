"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for(const i in items) {
    console.log(i);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  for (let i = 0; i < items.length; i+=2) {
    console.log(items[i]);
  }
}



// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort(function(a, b){
    return a - b;
  });
  let i = 0;
  const answer = [];
  while(i < n) {
    answer.push(items[i]);
    i++;
  }

  return answer;
}


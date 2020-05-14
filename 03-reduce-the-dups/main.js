/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

const redundantArray = [1, 1, 2, 3, 3, 4]
// YOUR CODE HERE
let output = document.querySelector('#output');
let count = 0
let current = redundantArray[count]
let fixedArray = [redundantArray[current]]
while (count < redundantArray.length){
  if (current !== redundantArray[count]){
    current = redundantArray[count]
    fixedArray.push(current)
  }
  count ++
}
output.innerText = "The string Array " + redundantArray.join() +
 " has had the dupes removed and is now " + fixedArray.join() + ".";
/*
  LETTER COUNT

  1. Create a variable, named "word," which contains any lengthy word.
  2. Create a second variable, named "letter," which contains any
      letter. 
  3. Write a WHILE statement which loops over the "word" string and
     counts the number of times the "letter" appears.
  4. If the letter is found in the string, display on the page: "The letter X
     exists N times in this word!" (replacing "X" with
     the letter guessed and "N" with the letter count).
  5. If the letter isn't found in the string, display on the page: "Nope, that
     letter doesn't exist in my word!"
  6. OPTIONAL: Use an input textbox and click event listener to get user input
     for the "letter" variable in Step 2.

  TIP: What do we mean by "display on the page"? `.innerHTML` could achieve
       this!

*/

// YOUR CODE HERE

let word = "supercalifragilisticexpialidocious"
let searchButton = document.querySelector('#search-button');
let results = document.querySelector('#search-results');
let wordSplit = word.split("")

searchButton.addEventListener('click', function () {
   let pos = 0
   let count = 0
   let letter = document.querySelector('#textbox').value;
   while (pos < word.length){
      if (wordSplit[pos] === letter){
         count++
      }
      pos++
      
   }
   if (count > 0){
      results.innerText = count + " instances of the letter " + letter + " found in my word."
   } else {
      results.innerText = "Sorry, my word does not include the letter " + letter + "."
   }
})
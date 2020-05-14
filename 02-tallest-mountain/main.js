/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/

// YOUR CODE HERE
let fin = document.querySelector('#tallest-mountain');
let mountains = [29029, 28251, 28169, 27940, 27838, 26906]
let i = 0
let tallest = 0
while (i < mountains.length){
   if (mountains[tallest] < mountains[i]){
      tallest = i
   }
   i++
}
fin.innerText = "The tallest mountain in the array is " + mountains[tallest] + " feet tall!" 
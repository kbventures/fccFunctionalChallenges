/*

One of the core principles of functional programming is to not change things. 
Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change 
anything, including the function arguments or any global variable.

The previous example didn't have any complicated operations but the splice method changed
the original array, and resulted in a bug.

Recall that in functional programming, changing or altering things is called mutation,
and the outcome is called a side effect. A function, ideally, should be a pure function,
meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our code.


*/

// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line

let tempValue = fixedValue;
tempValue++
return tempValue;

  // Only change code above this line
}



/* Using the increment operator (++) on fixedValue will mutate 
fixedValue, meaning it will no longer reference the same value 
it was assigned with.

return fixedValue + 1; would also work 

*/
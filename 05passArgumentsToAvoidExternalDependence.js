// The global variable
var fixedValue = 4;

function incrementer (fixedValue) {
  // Only change code below this line

let tempValue = fixedValue;
tempValue++
return tempValue;

  // Only change code above this line
}

/*

Another principle of functional programming is to always declare 
your dependencies explicitly. This means if a function depends on
 a variable or object being present, then pass that variable or 
 object directly into the function as an argument.

There are several good consequences from this principle. 
The function is easier to test, you know exactly what input it 
takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, 
or add new code. You would know what you can or cannot change 
and you can see where the potential traps are.

*/
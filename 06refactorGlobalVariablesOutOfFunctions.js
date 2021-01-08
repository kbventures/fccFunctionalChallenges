/*

So far, we have seen two distinct principles for functional programming:

Don't alter a variable or object - create new variables and objects and return them if need be 
from a function. Hint: using something like var newArr = arrVar, where arrVar is an array will
simply create a reference to the existing variable and not a copy. So changing a value in newArr
would change the value in arrVar.

Declare function parameters - any computation inside a function depends only on the arguments 
passed to the function, and not on any global object or variable.



*/ 

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;

  /*
    Alternative solution
    function add(arr, bookName) {
    return [...arr, bookName];
}
  */
  
  // Change code above this line
}

// Change code below this line
function remove (arr, bookName) {
  let newArr = [...arr];
  var book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return newArr;


    /*
        function remove(list, bookName) {
        return list.filter(book => book !== bookName);
}
    */

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);


/* 
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);


*/ 
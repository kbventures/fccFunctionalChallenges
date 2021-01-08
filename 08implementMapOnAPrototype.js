// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line


    // Solution 1
//   for(let i = 0; i < this.length; i++){
//       newArray.push(callback(this[i]));
//       console.log(newArray);
//   }


    // Solution 2
    this.forEach(a => newArray.push(callback(a)));
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});



// Solution 3

// The global Array
// var s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback, arr = [], i = 0) {
//   return i < this.length
//     ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
//     : arr;
// };

// var new_s = s.myMap(function(item) {
//   return item * 2;
// });






// // The global variable
// var s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback) {
//   var newArray = [];
//   // Only change code below this line

//   // Only change code above this line
//   return newArray;
// };

// var new_s = s.myMap(function(item) {
//   return item * 2;
// });
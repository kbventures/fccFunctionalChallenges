const squareList = arr => {
    // Only change code below this line

    let integerAndPositiveNumbers = arr.filter(n=> (n % parseInt(n))===0 && n>0 );
    let squaredOfPositiveIntegers = integerAndPositiveNumbers.map(n=>n*n);
    console.log(squaredOfPositiveIntegers);
    return squaredOfPositiveIntegers;
    // Only change code above this line
  };
  
//   const squaredIntegers1 = squareList([-3, 4.8, 5, 3, -3.2]);
  const squaredIntegers2 = squareList([ 4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);

//   console.log(squaredIntegers1);
  console.log(squaredIntegers2);

// const squareList = arr => {
//     // Only change code below this line
//     return arr;
//     // Only change code above this line
//   };
  
//   const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//   console.log(squaredIntegers);


/*
We have defined a function named squareList.
You need to complete the code for the squareList function using any 
combination of map(), filter(), and reduce() so that it returns a new
array containing only the square of only the positive integers (decimal
numbers are not integers) when an array of real numbers is passed to it.
An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].

Returns NEW Array container only the square of the positive intergrs
1) Filter out negative numbers and decimals
2) Map out new new array of this result array to there square
3)Return result

Filter out the nevgative numbers
Then Map out a new array with there square
Return final results


*/

/*

Alternative Solutions 


1
const squareList = (arr) => {
  // Only change code below this line
  return arr
          .filter(num => num > 0 && num % parseInt(num) === 0)
          .map(num => Math.pow(num, 2));
  // Only change code above this line
};

const squareList = arr => {
  return arr.reduce((sqrIntegers, num) => {
    return Number.isInteger(num) && num > 0
      ? sqrIntegers.concat(num * num)
      : sqrIntegers;
  }, []);
};

*/
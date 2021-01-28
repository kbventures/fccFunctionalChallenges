function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort((a,b)=>{
        let aToUniCodeNumber = a.charCodeAt(0);
        let bToUniCodeNumber = b.charCodeAt(0);
        return aToUniCodeNumber-bToUniCodeNumber;
      })
    // Only change code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

  /*
Alternative Solution
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });

  */
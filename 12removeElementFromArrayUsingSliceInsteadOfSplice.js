function nonMutatingSplice(cities) {
    // Only change code below this line
   
    return cities.slice(0,3);
  
    // Only change code above this line
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  var test = nonMutatingSplice(inputCities);
  console.log(test);



  /*
  function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
  */
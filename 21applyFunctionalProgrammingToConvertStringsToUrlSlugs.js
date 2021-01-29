// Only change code below this line
function urlSlug(title) {
   return title.toLowerCase().trim().split(/\s+/).join('-');; 
    }
    // Only change code above this line

    urlSlug(' Winter Is coming');


    /* 
    Alternative Solution:

    function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(obj => {
      return obj !== "";
    })
    .join("-")
    .toLowerCase();
}
    */
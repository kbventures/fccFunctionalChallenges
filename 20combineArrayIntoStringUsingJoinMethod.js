function sentensify(str) {
    // Only change code below this line
    let removedSeperators = str.split(/\W/);
    return removedSeperators.join(' ');
    // Only change code above this line
  }
  sentensify("May-the-force-be-with-you");
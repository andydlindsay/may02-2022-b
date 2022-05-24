"use strict";

/* Question 01

Convert an array of arrays into an object.

This is the inverse of the previous question.

Arrays will only have two elements: [key, value]

To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.

Examples:

- arrayToObject([['a', 1], ['b', 2], ['c', 3]])
  => { a: 1, b: 2, c: 3 }
- arrayToObject([['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]])
  => {name: 'Dave', role: 'Instructor', yearsOfExperience: 10}
*/

const arrayToObject = function(arr) {
  // create an output object
  // const output = {};

  // // iterate over the provided array
  // for (const pairArray of arr) {
  //   // "pull" the key and value out of the subarray
  //   const key = pairArray[0];
  //   const value = pairArray[1];

  //   // console.log('key/value', key, value);
  //   // add the key/value pair to the output object
  //   output[key] = value;
  // }

  // // return the output object
  // return output;

  const output = arr.reduce((output, pairArray) => {
    const key = pairArray[0];
    const value = pairArray[1];

    output[key] = value;
    
    return output;
  }, {});

  return output;
};

// Don't change below:
module.exports = { arrayToObject };

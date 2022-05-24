"use strict";

/* Question 00

Convert a given object into an array of arrays.

Given an object, create an array which contains arrays with the key/value pairs.

To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.

Examples

- objectToArray({ a: 1, b: 2, c: 3 })
  => [['a', 1], ['b', 2], ['c', 3]]
- objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10})
  => [['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]]

*/

const objectToArray = function(obj) {
  // return Object.entries(obj);

  // create an output array
  const output = [];

  // iterate through the keys in the obj
  for (const key in obj) {
    // store the value in variable
    const value = obj[key];

    // create a new array with [key, value]
    const pair = [key, value];

    // push "subarray" into the output array
    output.push(pair);
  }

  // return the output
  return output;
};

// Don't change below:
module.exports = { objectToArray };

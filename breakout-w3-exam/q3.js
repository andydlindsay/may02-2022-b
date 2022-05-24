"use strict";

/* Question 03 (stretch)

This is a STRETCH QUESTION.

Let's revisit Question 01 which had us convert an array of arrays into an object.

This time, make it support nested arrays.

The nested arrays also only contain 2 element arrays to represent key & value:
[key, value]. However, this time we are allowing the value to be another array.

Non-array objects need NOT be supported/handled at all.

Examples:

- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])
  => { a: 1, b: 2, c: { d: 4 } }
- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
  => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

*/

const deepArrayToObject = function(arr) {
  // create an output object
  const output = {};

  // iterate through the array
  for (const pairArray of arr) {
    // "pull" off the key and value from the subarray (pair)
    const key = pairArray[0];
    const value = pairArray[1];

    // is the value an array?
    if (Array.isArray(value)) {
      // if yes, pass the array to deepArrayToObject and store the return value
      output[key] = deepArrayToObject(value);
    } else {
      // if no, add the key value pair as usual
      output[key] = value;
    }

    console.log(output);
  }

  // return the output object
  return output;
}; 

// Don't change below:
module.exports = { deepArrayToObject };

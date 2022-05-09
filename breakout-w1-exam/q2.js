/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// 6,2,3,4,9,8
// 0 1 2 3 4 5

// length 6, target index 2 and 3
// 6 / 2 = 3
// 3 - 1 = 2

const median = function(arr) {
  // sort the array
  arr.sort();

  // calculate the middle index
  const middleIndex = Math.floor(arr.length / 2);

  // is the array length even or odd
  if (arr.length % 2 === 0) {
    // if even, return the average (rounded) of the middle two elements
    const otherIndex = middleIndex - 1;

    const valOne = arr[otherIndex];
    const valTwo = arr[middleIndex];

    const total = valOne + valTwo;

    const avg = total / 2;

    return round(avg);

    // return round((arr[middleIndex] + arr[middleIndex - 1]) / 2);
  }

  // if odd, return the middle element of the array
  return arr[middleIndex];
};

// Don't change below:
module.exports = { median };

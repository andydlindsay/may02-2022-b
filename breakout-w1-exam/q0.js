/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  const result = arr.length;
  return result;

  // return arr.length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // create variable to hold running total
  let runningTotal = 0;

  // iterate through the array
  // for (let i = 0; i < arr.length; i++) {
  //   const value = arr[i];

  //   // take each value from the array and add to the running total
  //   runningTotal += value;
  // }
  
  for (const value of arr) {
    runningTotal += value;
  }

  // return the running total
  return runningTotal;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

// 3.1415
// 314.15
// 314
// 3.14

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  if (arr.length === 0) {
    return null;
  }

  // total the values in the arr
  const total = sum(arr);

  // get the number of elements in the array
  const numElements = count(arr);

  // average is the total divided by the number of elements
  let average = total / numElements;

  // round the average
  average = round(average);

  // return averge
  return average;

  // return round(total / numElements);
};

// Don't change below:
module.exports = { count, sum, mean };

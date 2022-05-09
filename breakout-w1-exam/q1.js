/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // create a variable to hold our current lowest value
  let lowestValue = arr[0];

  // iterate through the array
  for (const element of arr) {
    // is the current value lower than our lowest value (is the lowest we've seen so far?)
    if (element < lowestValue) {
      // if yes, we want to update our lowest with the current value
      lowestValue = element;
    }
  }

  // return the lowest value found
  return lowestValue;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // return Math.max(...arr);
  // set up a variable to hold the current highest
  let highestValue = arr[0];

  // iterate through the array
  for (const element of arr) {
    // is the current element higher than our current highest
    if (element > highestValue) {
      // if yes, update the current highest to be the current element
      highestValue = element;
    }
  }

  // return the highest value found
  return highestValue;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  // get lowest value in the arr
  const lowest = min(arr);

  // get the highest value in the arr
  const highest = max(arr);

  // subtract the lowest from the highest
  const result = highest - lowest;

  // return result
  return result;
};

// Don't change below:

module.exports = { min, max, range };

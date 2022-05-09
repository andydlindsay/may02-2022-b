/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 * "lighthouse in the house"
 *
 *    6
 */
const mode = function(arr) {
  // step one: create the piles

  // create an object to hold our piles
  const piles = {};

  // iterate through the array
  for (const element of arr) {
    // have we seen this number/element before? does that "key" exist in the object
    if (piles[element]) {
      // if yes, increment the number of times seen
      piles[element] += 1;
    } else {
      // if no, create a new key/value pair in our piles object
      piles[element] = 1;
    }
  }

  // log the piles object
  // console.log(piles);

  // step two: figure out which pile is "tallest"

  // create two variables: one to hold the highest value, one to hold the key assoc with the highest value
  let highestValue = 0;
  let highestKey = null;

  // iterate through our piles object
  for (const key in piles) {
    const value = piles[key];

    // is the current value higher than our highest seen so far?
    if (value > highestValue) {
      // if yes, update the highest value and the key assoc with that value
      highestValue = value;
      highestKey = key;
    }
  }

  // return the key assoc with the highest value
  return Number(highestKey);
};

// Don't change below:
module.exports = { mode };

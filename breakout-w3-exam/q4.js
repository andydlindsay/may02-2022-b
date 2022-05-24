"use strict";

/* Question 04 (stretch)

This is a STRETCH QUESTION.

Given a size in bits convert it to relevant size in B/KB/MB/GB/TB.
Round your answers to two decimal places at most. Use base 10 for sizes.

- 1 B
- 1 kB == 1000 B
- 1 MB == 1000 kB
- 1 GB == 1000 MB
- 1 TB == 1000 GB

More info on these in case you are curious:
https://en.wikipedia.org/wiki/Byte#Unit_symbol

Examples:

- filesize(1)        => "1B"
- filesize(1000)     => "1kB"
- filesize(1000000)  => "1MB"
- filesize(1500000)  => "1.5MB"
- filesize(1250000000) => "1.25GB"
- filesize(90000000000000000000) => "900000TB"

*/

const filesize = function(bytes) {
  // put together an array of all possible "sizes" in order
  const sizes = ['B', 'kB', 'MB', 'GB'];

  // iterate through the sizes array
  for (const size of sizes) {
    // is the bytes value less than a thousand
    if (bytes < 1000) {
      // if yes, return the current value for bytes + the current size
      return `${bytes}${size}`;
    }

    // if no, divide bytes by a thousand
    // bytes = bytes / 1000;
    bytes /= 1000;
  }

  // did we run out of "sizes", then return TB
  return `${bytes}TB`;
};

// Don't change below:
module.exports = { filesize };

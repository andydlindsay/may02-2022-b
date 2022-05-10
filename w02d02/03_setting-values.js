let x = 5;
console.log('x at the top of the file', x);

const timeout = setTimeout(() => {
  x = 42;
  console.log('inside the timeout', x);
}, 1000);

// console.log(timeout);
console.log('x at the bottom of the file', x);

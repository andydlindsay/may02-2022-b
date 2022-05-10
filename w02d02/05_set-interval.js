let numLoops = 10;

const a = setInterval(() => {
  numLoops -= 1;
  console.log('hello world', numLoops);

  if (numLoops === 0) {
    clearInterval(a);
  }
}, 1000);

// clearInterval(a);
// console.log(interval);

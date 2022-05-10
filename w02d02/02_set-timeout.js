console.log('3. first line of the file');

setTimeout(() => {
  console.log('2. second timeout');
}, 50);

setTimeout(() => {
  console.log('1. the timeout has fired');
}, 50);

// for (let i = 0; i < 10000; i++) {
//   const date = new Date();
//   console.log(date);
// }

console.log('4. last line of the file');

// once the sync is done, then the async can run

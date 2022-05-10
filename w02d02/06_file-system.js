const fs = require('fs');

// console.log(fs);

fs.readFile('./sample.html', { encoding: 'utf-8' }, (err, data) => {
  // if (!err) {
  //   return console.log('data', data.length);
  // }

  if (err) return console.log('err', err);

  console.log('data from async', data.length);
});

const returnVal = fs.readFileSync('./sample.html', { encoding: 'utf-8' });

console.log('data from sync', returnVal.length);


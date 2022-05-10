const runAfterDelay = (callback) => {
  const user = {
    username: 'Alice'
  };

  setTimeout(() => {
    user.username = 'Bob';
    callback(user);
  }, 2000);

  setTimeout(() => {
    user.username = 'Carol';
    callback(user);
  }, 3000);
};

runAfterDelay((argFromFunc) => {
  console.log('argFromFunc', argFromFunc);
});

const user = {
  username: 'Alice',
  age: 42,
  friends: ['Carol']
};

// const copy = user;

const copy = {
  ...user,
  username: 'Bob',
  // friends: [
  //   ...user.friends,
  //   'Dean',
  // ],
};

console.log(user.friends === copy.friends);

// copy.username = 'Bob';

// copy.friends.push('Dean');

console.log('original', user);
console.log('copy', copy);

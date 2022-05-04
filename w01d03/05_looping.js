// const dogs = ['Henri', 'Lola', 'Dioji'];

// for..of for..in

// for (const dog of dogs) {
//   console.log(`${dog} is a good dog!`);
// }

// for (let i = 0; i < dogs.length; i = i + 1) {}

// for (const index in dogs) {
//   console.log('index', index);
//   if (index % 2 === 0) {
//     console.log(`${dogs[index]} needs a grooming`);
//   } else {
//     console.log(`${dogs[index]} is a good dog!`);
//   }
// }

// console.log(index);

const user = {
  username: 'Alice',
  faveNumbers: [7, 8, 9],
  bestFriend: 'Bob',
  loggedIn: true,
  faveDays: ['Tuesday', 'Thursday'],
  cohortName: 'May 02 2022',
};

for (const key of Object.keys(user)) {
  console.log(key, user[key]);
}


// for (const key in user) {
//   // console.log(key);
//   const value = user[key];

//   console.log(key, value);

//   // if (Array.isArray(value)) {
//     for (const element of value) {
//       console.log('element', element);
//     }
//   // }
// }

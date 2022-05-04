// let myNum = 2;

// const changeMyNum = function(number) {
//   number = 5;
//   console.log('inside the function', number);
// };

// changeMyNum(myNum);

// console.log('original number outside the function', myNum);

const puppy = {
  name: 'Henri',
  cuteness: true
};

const changePuppy = function(dog) {
  dog.name = 'Lola';
  console.log('inside the function', dog);
};

changePuppy(puppy);

console.log('puppy outside the function', puppy);

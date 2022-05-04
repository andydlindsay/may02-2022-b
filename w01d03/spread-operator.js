const puppy = {
  name: 'Henri',
  cuteness: true
};

const copy = { ...puppy };

copy.name = 'Lola';

console.log(copy);
console.log(puppy);

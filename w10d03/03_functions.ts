// return val, arguments, function name

const sayHello = (name: string, age: number = 25): void => {
  // return `hello ${name}`;
  // return true;
};

const returnVal = sayHello('Alice');

const returningPromise = (num: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(num);
  });
};

returningPromise(42)
  .then((data) => {});

const higherOrderFunc = (cb: (num: number) => boolean): void => {
  cb(7);
};


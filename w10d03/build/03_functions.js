"use strict";
// return val, arguments, function name
const sayHello = (name, age = 25) => {
    // return `hello ${name}`;
    // return true;
};
const returnVal = sayHello('Alice');
const returningPromise = (num) => {
    return new Promise((resolve) => {
        resolve(num);
    });
};
returningPromise(42)
    .then((data) => { });
const higherOrderFunc = (cb) => {
    cb(7);
};

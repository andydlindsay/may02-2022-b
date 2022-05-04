const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

let that = null;

console.log(this);

let user = {
  username: 'Alice',
  sayHello: function() {
    that = this;
    console.log(`hello there ${this.username}`);
  }
};

const copy = user;
user = null;

// user.username

console.log(copy);

copy.sayHello();


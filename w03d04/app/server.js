const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');
const methodOverride = require('method-override');

const app = express();
const port = 8000;

// user database
const users = {
  abcd: {
    id: 'abcd',
    email: 'alice@gmail.com',
    password: '1234'
  },
  efgh: {
    id: 'efgh',
    email: 'bob@gmail.com',
    password: '1234'
  }
};

// helper functions
const getUserByEmail = (email) => {
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      return user;
    }
  }

  return null;
};

const generateRandomId = () => {
  return Math.random().toString(36).substring(2, 6);
};

// set the view engine
app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
// app.use(cookieParser());
app.use(cookieSession({
  name: 'sesh',
  keys: ['my', 'secret', 'strings'],
}));
app.use(methodOverride('_method'));

// routes

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// GET /login
app.patch('/login', (req, res) => {
  res.render('login');
});

// GET /protected
app.get('/protected', (req, res) => {
  // check for a cookie
  if (!req.session.userId) {
  // if (!req.cookies.userId) {
    return res.status(401).send('not authorized');
  }

  // const user = users[req.cookies.userId];
  const user = users[req.session.userId];

  res.render('protected', { user });
});

// POST /register
app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // check if email or password are falsey
  if (!email || !password) {
    return res.status(400).send('Email and password must be provided');
  }

  // check if email is in use already
  const user = getUserByEmail(email);
  if (user) {
    return res.send(400).send('Email already in use');
  }

  // create a new user object
  const id = generateRandomId();

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const newUser = {
    id,
    email,
    password: hash
  };

  // update users database
  users[id] = newUser;
  console.log(users);

  // redirect to login page
  res.redirect('/login');
});

// POST /login
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // check if email or password are falsey
  if (!email || !password) {
    return res.status(400).send('Email and password must be provided');
  }

  // check if user exists
  const user = getUserByEmail(email);
  if (!user) {
    return res.status(400).send('No user with that email found');
  }

  // check if passwords match
  // const result = bcrypt.compareSync(password, user.password);
  // if (!result) {
  if (!bcrypt.compareSync(password, user.password)) {
  // if (user.password !== password) {
    return res.status(401).send('Password is incorrect');
  }

  // set cookie and redirect to protected page
  req.session.userId = user.id;
  req.session.anotherKey = 'some value';
  // res.cookie('userId', user.id);

  res.redirect('/protected');
});

// POST /logout
app.post('/logout', (req, res) => {
  // res.clearCookie('userId');
  req.session = null;

  res.redirect('/login');
});

// start the server
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

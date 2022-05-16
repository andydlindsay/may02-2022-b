const express = require('express');
const morgan = require('morgan');
const port = 3001;

const app = express();

// middleware
// const morganMiddleware = morgan('dev');
// app.use(morganMiddleware);

app.use(morgan('dev'));

app.use((req, res, next) => {
  // console.log('there has been an incoming request');

  req.something = 'something else';

  next();
});



// GET /home
app.get('/home', (request, response) => {
  // console.log('request', request);
  // console.log('key of something:', request.something);
  response.send('<h1>Welcome to the home page!</h1>');
});

// GET /about
app.get('/about', (req, res) => {
  res.send('This is the about page');
});

// Catchall route handler
app.get('*', (request, response) => {
  response.status(404);
  return response.send('this is not the page you are looking for');

  response.status(404).send('some message');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

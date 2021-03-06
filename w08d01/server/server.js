const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());
app.use(express.static('../client/build'));

// import routers
const todoRouter = require('./routes/todo-router');

// use routers
app.use('/api/todos', todoRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

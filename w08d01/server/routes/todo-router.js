const express = require('express');
const router = express.Router();

const todos = {
  abc: {
    id: 'abc',
    task: 'make a todo list'
  },
  def: {
    id: 'def',
    task: 'get laundry out the dryer'
  },
  ghi: {
    id: 'ghi',
    task: 'make it through w8d1'
  },
};

// CREATE POST /api/todos/
router.post('/', (req, res) => {
  const task = req.body.task;

  const id = Math.random().toString(36).substring(2, 5);

  const newTodo = {
    id,
    task
  };

  todos[id] = newTodo;
  console.log(todos);

  res.status(201).json(newTodo);
});

// READ GET /api/todos/
router.get('/', (req, res) => {
  const todoArr = Object.values(todos);
  res.json(todoArr);
});

// UPDATE PATCH /api/todos/:id
router.patch('/:id', (req, res) => {
  const updatedTask = req.body.updatedTask;
  const todoId = req.params.id;

  // todos[todoId] = {this};
  todos[todoId].task = updatedTask;

  res.status(200).json({ success: true });
});

// DELETE DELETE /api/todos/:id
router.delete('/:id', (req, res) => {
  delete todos[req.params.id];

  res.status(200).json({ success: true });
});

module.exports = router;

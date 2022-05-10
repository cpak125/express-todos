const Todo = require('../models/todo');

module.exports = {
  index,
  show
};

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll()
  });
}

function show(req, res) {
  res.render('todos/show', {
    // The name of the property on the req.params object 
    // matches the  :name used when defining the route
    todo: Todo.getOne(req.params.id)
  });
}


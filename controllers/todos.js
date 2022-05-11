const Todo = require('../models/todo');

module.exports = {
  index,
  show,
  new: newTodo,
  create
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

function newTodo(req, res) {
  res.render('todos/new');
}

function create(req, res) {
  // req.body is provided by urlencoded middleware 
  // properties on req.body match the values of input's name attributes
  console.log(req.body);
  req.body.done = false;
  Todo.create(req.body);
  res.redirect('/todos');
}


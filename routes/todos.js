var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

/*  All routes start with the path of '/todos'*/

//  GET /todos (index functionality - list all todos)
router.get('/', todosCtrl.index);

//  GET /todos/new (new functionality - render "new" form)
router.get('/new', todosCtrl.new);

// POST /todos (create functionality - create new todo)
router.post('/', todosCtrl.create);

// GET /todos/:id (show functionality - show single todo)
router.get('/:id', todosCtrl.show);

// GET /todos/:id/edit (edit functionality - render edit form)
router.get('/:id/edit', todosCtrl.edit);

// DELETE /todos/:id (delete functionality - delete single todo)
router.delete('/:id', todosCtrl.delete);

module.exports = router;

var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

/*  All routes start with the path of '/todos'*/

//  GET /todos (index functionality - list all todos)
router.get('/', todosCtrl.index);

// GET /todos/:id (show functionality - show single todo)
router.get('/:id', todosCtrl.show);

module.exports = router;

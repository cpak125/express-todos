var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

/*  All routes start with the path of '/todos'*/

//  GET /todos (index functionality - list all todos)
router.get('/', todosCtrl.index);

module.exports = router;

var express = require('express');
var router = express.Router();

import { users } from "./users.js";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/user', users);


module.exports = router;

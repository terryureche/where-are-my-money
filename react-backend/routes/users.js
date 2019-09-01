var express = require('express');

/* GET users listing. */
const users = function(req, res) {
  res.send('Display Users Hereeee');
};

exports.users = users;

#!/usr/bin/env node

/**
 * Module dependencies.
 */
// This us where our main application index path is

var app = require('../app');
var debug = require('debug')('react-backend:server');
var http = require('http');

import models,{ connectDb } from '../db/models/index.js';

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

const erasellAllDb = false;

connectDb().then(async () => {
  if(erasellAllDb) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({})
    ]);

  }

  //createUsersWithMessages();
  server.listen(port, function() {
    console.log("app run " + server.address().port);
  });
  server.on('error', onError);
  server.on('listening', onListening);
});

//let q = createUser({name: "gig2elino32"});
//let q = getUser({"name" : "gig2elino32"});
//q.then((val) => console.log(val))
/*
const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'rwieruch',
  });

  const user2 = new models.User({
    username: 'ddavids',
  });

  const message1 = new models.Message({
    text: 'Published the Road to learn React',
    user: user1.id,
  });

  const message2 = new models.Message({
    text: 'Happy to release ...',
    user: user2.id,
  });

  const message3 = new models.Message({
    text: 'Published a complete ...',
    user: user2.id,
  });

  await message1.save();
  await message2.save();
  await message3.save();

  console.log("I was here");

  await user1.save();
  await user2.save();
};
**/


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

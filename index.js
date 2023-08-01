const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Serve the 'images' folder to make images accessible
app.use('/images', express.static(path.join(__dirname, 'images')));

// Use JSON Server middlewares
server.use(middlewares);

// Use the JSON Server router
server.use(router);

const PORT = process.env.PORT||3002;

// Start the combined server on the specified port
app.listen(PORT, () => {
  console.log(`JSON Server with image support is running on http://localhost:${PORT}`);
});

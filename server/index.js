
const express = require("express");
const bodyParser = require('body-parser');
const connection = require('./mongodb');

const students = require('../routes/students.js');
const server = express();

//middlewares
server.use(bodyParser.json());
server.use(connection(server))

//user routes: anything that uses /api/items should use items
server.use('/api', students)

const port = process.env.PORT || 4000;
server.listen(port, () => console.log('Listening to port 4000!'));


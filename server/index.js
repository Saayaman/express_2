
const express = require("express");
const bodyParser = require('body-parser');
const connection = require('./mongodb');

const students = require('../routes/students.js');
const server = express();

server.use(bodyParser.json());
server.use(connection(server))
//user routes: anything that uses /api/items should use items
server.use('/api', students)

//Bodyparser Middleware
const port = process.env.PORT || 4000;
server.listen(port, () => console.log('Listening to port 4000!'));


// //Respond with Hello World! on the homepage:
// server.get('/', (req, res) => {
//   console.log("HelloWorld");
// });

// //Respond to POST request on the root route (/), the application’s home page:
// server.post('/', function (req, res) {
//   res.send('Got a POST request')
// })

// //Respond to a PUT request to the /user route:
// server.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user')
// })

// //Respond to a DELETE request to the /user route:
// server.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user')
// })


let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
let express = require('express');
var app = express();

const ThingsModel = require('./things-schema');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// Add the code below to index.js
// Import routes
let apiRoutes = require("./api-router")
// Use Api routes in the App
app.use('/api', apiRoutes)

// Import Body parser
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true });
var db = mongoose.connection;

if (!db)
  console.log('Error')
else
  console.log('Success')



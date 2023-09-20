//running an express Node server
const express = require('express');
const app = express();
const PORT = 3000;

const path = require ('path');


//import controllers
const lunchesController = require('../controllers/lunchesController');

//when we hit the root endpoint, run the GET req middleware and return a status code
app.get('/', lunchesController.getLunches, (req, res) => {
    res.status(200).json('Api.get looks good');
})

//global error handler

//make sure you're listening to the port
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
//exporting to use in server
module.exports = api;
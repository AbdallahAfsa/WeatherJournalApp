// Setup an empty JS array to act as endpoint for all routes
let projectData = {};
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// port number
const port = 8000;
// Callback to debug
function listening(){console.log(`Weather journal app listening at http://localhost:${port}`)}
// turning on the server
app.listen(port, listening)
// Initialize all route with a callback function
app.get('/all', function sendData(request , response){response.send(projectData);});
// Initialize addData to complete POST '/addData' 
app.post('/addData', function getData(request, response){
    projectData = {
      temperature: request.body.temperature,
      date: request.body.date,
      feelings: request.body.feelings,
    };
    console.log(projectData);
    response.send(projectData).status(200).end();
  });
//Thank you for your review ♥.
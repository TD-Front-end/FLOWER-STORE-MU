const express = require("express");
const bodyParser = require('body-parser');
const port = 4000;
const conn = require('../Backend/api/db');
const router = require('../Backend/api/routes');
const app = express();
 
//Access Control 
app.use(function (req, res, next) {
    /*var err = new Error('Not Found');
     err.status = 404;
     next(err);*/
  
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    // Pass to next layer of middleware
    next();
  });
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

//import router
app.use("/api", router)
//
app.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API'}
    );
});
  
// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    //connect to database
    conn.connect((err) =>{
        if(err) throw err;
        console.log('Mysql Connected...');
    });
    console.log(`Server listening on port ${server.address().port}`);
});
 

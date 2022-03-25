const express = require('express')
const cors = require('cors')
require('express-async-errors')
const middleware = require('./utils/middleware')
const mysql = require("mysql")

const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "library"
  
});


app.post('/registeruser', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
   
    db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err) => {
      console.log(err)

    }
      );
      res.json({username:username,password:password})
});
});

app.post('/registeradmin', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    db.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
     
      db.query(
      "INSERT INTO admin (username, password) VALUES (?,?)",
      [username, password],
      (err, result) => {
        console.log(err);
     
      }
        );
        res.json({username:username,password:password})
  });
  });


  app.post('/loginuser', (req, res) => {
 
    const username = req.body.username;
    const password = req.body.password;
  
    db.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password],
      (err, result) => {
        if(err)
        {
          if(err)
          {
            res
              .status(401)
              .json({
                error: 'Wrong credentials',
              })
          }
        }
        
        if(result.length>0) 
        {
            res.json({message: "success"})
            console.log("correct credentials");
        }
        else
        {
          res.json({error: "Wrong Credentials"})
          console.log("wrong credentials");
        }
        
        
        }
    );
  }); 



  app.post('/loginadmin', (req, res) => {
 
    const username = req.body.username;
    const password = req.body.password;
  
    db.query(
      "SELECT * FROM admin WHERE username = ? AND password = ?",
      [username, password],
      (err, result) => {
        if(err)
        {
          if(err)
          {
            res
              .status(401)
              .json({
                error: 'Wrong credentials',
              })
          }
        }
        
        if(result.length>0) 
        {
            res.json({message: "success"})
            console.log("correct credentials");
        }
        else
        {
          res.json({error: "Wrong Credentials"})
          console.log("wrong credentials");
        }
        
        
        }
    );
  }); 



  
app.use(middleware.unknownEndPoint)
app.use(middleware.errorHandler)

module.exports = app
  
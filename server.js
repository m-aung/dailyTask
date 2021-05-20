const express = require('express');
const fs = require('fs')
const path = require('path')

const Appendfile = fs.appendFile;

// const MongoClient = require('mongodb').MongoClient;
const app = express();
const dotenv = require('dotenv');
let db;
const PORT = 3030
dotenv.config();
// username = test-user
// password = 10101010

// connecting to Database
// MongoClient.connect(process.env.DB_URL, (err, database) => {
//   // ... start the server
//   if (err) return console.log(err);
//   db = database;
//   app.listen(3000, function () {
//     console.log('listening to port 3000');
//   });
// });

app.listen(PORT,()=>{
  console.log(`Listen to port ${PORT}`)
})

app.use(express.urlencoded({ extended: true }));

// app.get(path, callback);
app.get('/', function (req, res) {
  // res.send('This is a GET');
  res.sendFile(__dirname + '/index.html');
});

// app.post('/todo', function (req, res) {
//   db.collection('todo').save(req.body, function (err, result) {
//     if (err) return cole.log(err);
//     console.log('saved to our db');
//     res.redirect('/');
//   });
// });

app.post('/todo', (req,res, next)=>{
  Appendfile('./tasks.txt',`testing.... /t ${new Date(Date.now()).toUTCString()}/n`,(err)=> {
    if(err) res.json({error:'400', message:'Something wrong with adding new Task'});
    res.status(200).json({message: 'New task added!'})
  })
})

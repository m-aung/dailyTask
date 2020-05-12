const express = require ('express');
// body parser is to address the data in object form
const bodyParser = require ('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();

var db;

// username = test-user
// password = 22102008

// connecting to Database
MongoClient.connect('mongodb+srv://test-user:22102008@cluster0-m1plq.mongodb.net/test?retryWrites=true&w=majority', function (err, database) {
    // ... start the server
    if (err) return console.log(err);
    db = database;
    app.listen(3000, function() {
        console.log('listening to port 3000');
    });
})

app.use(bodyParser.urlencoded({extended: true}));

// app.get(path, callback);
app.get('/',function (req, res) {
    // res.send('This is a GET');
    res.sendFile(__dirname + '/index.html');
});

app.post('/todo', function(req, res) {
    db.collection('todo').save(req.body, function (err, result){
        if(err)return cole.log(err);
        console.log('saved to our db');
        res.redirect('/');
    })
});
var express = require('express');
var path = require('path');
var url = require('url');
var app = express();
var bodyParser = require('body-parser');

var User = require('./app/models/user');
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@jello.modulusmongo.net:27017/ogep4Iwy');

// var users = [
//             {id: 1, fName: 'Hege', lName: "Pege", Title: "Teacher", Sex: "Male", Age: "50"},
//             {id: 2, fName: 'Kim', lName: "Pim", Title: 'Teacher', Sex: 'Male', Age: '50' },
//             {id: 3, fName: 'Sal', lName: "Smith", Title: 'Teacher', Sex: 'Male', Age: '50' },
//             {id: 4, fName: 'Jack', lName: "Jones", Title: 'Teacher', Sex: 'Male', Age: '50' },
//             {id: 5, fName: 'John', lName: "Doe", Title: 'Teacher', Sex: 'Male', Age: '50' },
//             {id: 6, fName: 'Peter', lName: "Pan", Title: 'Teacher', Sex: 'Male', Age: '50' }
//         ];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/www'));

app.get('/users', function(req, res) {
        User.find(function(err, users) {
            if (err) {
                res.send(err);
            } else {
                res.json(users);
                res.end();
            }
        });
    })
    .post('/users', function(req, res) {
        var user = new User();
        user.fName = req.body.first;
        user.lName = req.body.last;
        user.Age = req.body.age;
        user.Sex = req.body.sex;
        user.Title = req.body.title;
        console.log(user);

        user.save(function(err) {
            console.log(user);
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'user created!' });
            }
        });
    });

app.get('/users/:id', function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) {
                res.send(err);
            } else {
                res.json(user);
                console.log(user);
            }
        });
    })
    .put('/users/:id', function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) {
                res.send(err)
            } else {
                user.fName = req.body.first;
                user.lName = req.body.last;
                user.Age = req.body.age;
                user.Sex = req.body.sex;
                user.Title = req.body.title;
            }
            user.save(function(err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json({ message: 'User updated!' });
                }
            });
        });
    })
    .delete('/users/:id', function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err)
                res.send(err);

            user.remove(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'user deleted' });
            });
        });
    });

app.use(function(req, res) {
    res.send("404");
});

//var routes = require('./index_6route')(app);

app.listen(8888, function() {
    console.log('Express App started');
});

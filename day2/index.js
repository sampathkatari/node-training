var express = require ('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

const User = require('./src/models/user');

const app = express();

app.use(bodyparser.json());

const port = 3000

app.get("/",(req, res) => {
    res.send('Hello World!')
})

app.post('/user', (req, res) => {
    const body = req.body;
    console.log(body)
    const userObj = new User({
        firstName: body.firstName,
        lastName: body.lastName,
        age: body.age
    })
    userObj.save((error, user) => {
        if(error) {
            res.json({
                status: false,
                message: 'Unable to create user. Please try again later'
            })
        } else {
            res.json({
                status: true,
                user
            })
        }
    })
})

app.get('/user', (req, res) => {
    User.find({}, (error, result) => {
        if(error) {
            res.json({
                status: false,
                message: 'Unable to create user. Please try again later'
            })
        } else {
            res.json({
                status: true,
                users: result
            })
        }
    })
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id
    User.find({ _id: id }, (error, user) => {
        if(error) {
            res.json({
                status: false,
                message: 'Unable to create user. Please try again later'
            })
        } else {
            res.json({
                status: true,
                user
            })
        }
    })
})

mongoose.connect('mongodb://localhost:27017/day2')

mongoose.connection.on('connected', (res) => {
    console.log('Connected successfully with mongo @27017')
})

mongoose.connection.on('error', (err) => {
    if(err) {
        console.log('Error connecting to mongodb @27017')
    }
})

app.listen(port, () => {
   console.log('server started')
})


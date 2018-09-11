const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    }
});

const User = mongoose.model('User', UserSchema)

module.exports = User;
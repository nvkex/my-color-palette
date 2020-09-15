const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    createdOn:{
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('User', UserSchema);
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
    },
    palettes:{
        type: Array,
        default: []
    },
    favoritePalettes:{
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('User', UserSchema);
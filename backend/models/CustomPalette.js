const mongoose = require('mongoose');

const CustomPaletteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true,
        }
    },
    colors: {
        type: Array,
        required: true
    },
    private:{
        type: Boolean,
        default: false
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    slug:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('CustomPalette', CustomPaletteSchema);
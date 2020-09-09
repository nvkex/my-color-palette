const mongoose = require('mongoose');

const DefaultPaletteSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    colors:{
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('DefaultPalette', DefaultPaletteSchema);
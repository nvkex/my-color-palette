const DefaultPalette = require('../models/DefaultPalette');

exports.getDefaultPalettes = async (req,res) => {
    await DefaultPalette.find({})
    .then(data => {
        res.send(data);
    })
    .catch(e => {
        console.log(e);
    });
}
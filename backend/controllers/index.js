const CustomPalette = require('../models/CustomPalette');

exports.explorePalette = (req, res) => {
    CustomPalette.find({})
    .then(data => {
        res.send({data});
    })
    .catch(err => {
        res.status(400);
    });
}
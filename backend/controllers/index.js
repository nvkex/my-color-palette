const CustomPalette = require('../models/CustomPalette');

exports.explorePalette = (req, res) => {
    CustomPalette.find({private: false})
    .then(data => {
        res.send({data});
    })
    .catch(err => {
        res.status(400);
    });
}
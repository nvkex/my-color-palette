const { verifyToken, tokenExpired } = require('../helpers/token');
const CustomPalette = require('../models/CustomPalette');
const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

exports.createNewPalette = async (req, res) => {
    const { title, author, colors, token } = req.body;

    const slug = await nanoid(10);    

    if (!verifyToken(token) && tokenExpired(token))
        res.status(400);

    CustomPalette.create({ title, author, colors, slug })
        .then(data => {
            res.status(200).send({ data, success: true });
        })
        .catch(err => {
            console.log(err)
            res.status(400).send({ success: false });
        })

}

exports.deletePalette = (req, res) => {
    const { id, token } = req.body;

    if (!verifyToken(token) && tokenExpired(token))
        res.status(400);

    CustomPalette.deleteOne({ _id: mongoose.Types.ObjectId(id) })
        .then(data => {
            res.status(200).send({ data, success: true })
        })
        .catch(err => {
            res.status(400).send({ success: false })
        })

}
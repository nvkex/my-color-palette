const { verifyToken, tokenExpired } = require('../helpers/token');
const User = require('../models/User');
const CustomPalette = require('../models/CustomPalette');
const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

exports.getUserPalettes = (req, res) => {
    const { id, token } = req.body;

    if (token && !verifyToken(token) && tokenExpired(token))
        return res.status(400);

    CustomPalette.find({ 'author.id': id })
        .then(data => {
            res.send({ data, success: true });
        })
        .catch(err => {
            res.send({ success: false, err })
        })
}

exports.createNewPalette = async (req, res) => {
    const { title, author, colors, token } = req.body;

    const slug = await nanoid(10);

    if (!verifyToken(token) || tokenExpired(token))
        res.status(400);

    const _id = mongoose.Types.ObjectId();

    User.updateOne(
        { _id: mongoose.Types.ObjectId(author.id) },
        { $addToSet: { palettes: [_id] } }
    )

    CustomPalette.create({ _id, title, author, colors, slug })
        .then(data => {
            res.status(200).send({ data, success: true });
        })
        .catch(err => {
            console.log(err)
            res.status(400).send({ success: false });
        })
}

exports.deletePalette = (req, res) => {
    const { id, token, authorId } = req.body;

    if (!verifyToken(token) || tokenExpired(token))
        res.status(400);

    User.updateOne(
        { _id:  mongoose.Types.ObjectId(authorId) },
        { $pull: { palettes: [id] } }
    )

    CustomPalette.deleteOne({ _id: mongoose.Types.ObjectId(id) })
        .then(data => {
            res.status(200).send({ data, success: true })
        })
        .catch(err => {
            res.status(400).send({ success: false })
        })

}

exports.upvotePalette = (req, res) => {
    const { paletteID, id } = req.body;

    CustomPalette.updateOne(
        { _id: new mongoose.Types.ObjectId(paletteID) },
        { $addToSet: { upvotes: [id] } }
    )
        .then(data => {
            if (data.n === 1)
                return res.status(200).send({ success: true })
            return res.status(400).send({ success: false })
        })
        .catch(err => {
            return res.send({ message: err })
        })
}
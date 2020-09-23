const router = require('express').Router();

const {
    createNewPalette,
    deletePalette
} = require('../controllers/user');

router.post('/new-palette', createNewPalette);

router.post('/delete', deletePalette);

module.exports = router;
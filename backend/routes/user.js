const router = require('express').Router();

const {
    getUserPalettes,
    createNewPalette,
    deletePalette
} = require('../controllers/user');

router.post('/new-palette', createNewPalette);

router.post('/delete', deletePalette);

router.post('/user-palettes', getUserPalettes);

module.exports = router;
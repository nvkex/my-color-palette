const router = require('express').Router();

const { verifyToken, checkExpiry } = require('../middlewares/auth.middleware');

const {
    getUserPalettes,
    createNewPalette,
    deletePalette,
    upvotePalette
} = require('../controllers/user');

router.post('/new-palette', createNewPalette);

router.post('/delete', deletePalette);

router.post('/user-palettes', getUserPalettes);

router.post('/upvote', [verifyToken, checkExpiry], upvotePalette);

module.exports = router;
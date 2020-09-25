const router = require('express').Router();

const {
    explorePalette
} = require('../controllers/index');

router.get('/explore', explorePalette);

module.exports = router;
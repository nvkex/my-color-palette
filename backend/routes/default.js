const express = require('express');

const router = express.Router();

const { 
    getDefaultPalettes 
} = require('../controllers/default');

router.get('/default', getDefaultPalettes);

module.exports = router;
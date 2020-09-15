const express = require('express');
const router = express.Router();

const { 
    signupController,
    loginController,
    verifyToken
} = require('../controllers/auth');

router.post('/signup', signupController);
router.post('/login', loginController);
router.post('/verify',verifyToken);

module.exports = router;
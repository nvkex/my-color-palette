const express = require('express');
const router = express.Router();

const { 
    signupController,
    loginController,
    tokenVerification,
    checkEmail,
    checkTokenExpiry
} = require('../controllers/auth');

router.get('/check-token-expiry', checkTokenExpiry);
router.get('/check-email', checkEmail);
router.post('/signup', signupController);
router.post('/login', loginController);
router.post('/verify',tokenVerification);

module.exports = router;
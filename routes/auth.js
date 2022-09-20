const express = require('express');
const { registerUser, login, getMe } = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleWare/auth');

router.post('/login', login);
router.post('/register', registerUser);
router.get('/me', protect, getMe);

module.exports = router;

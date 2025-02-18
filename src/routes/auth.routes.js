const express = require('express');
const validateUserExists = require('../middlewares/validate-user-exists');
const {loginUser, reNewToken} = require('../controllers/auth.controller');
const { validateAuthUser } = require('../middlewares/validate-auth-user.middleware');
const {createUser} = require('../controllers/user.controller');
const router = express.Router();

router.post ( '/register', createUser );
router.post ( '/login', validateUserExists, loginUser);
router.post ( '/re-new-token', validateAuthUser, reNewToken);

module.exports = router;
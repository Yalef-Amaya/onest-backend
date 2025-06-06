const express = require('express');
const { getUser, createUser, getUserById, deleteUserById, updateUserByIdPut, updateUserByIdPatch } = require( '../controllers/user.controller');
const validateId = require('../middlewares/validate-id.middleware');
const { validateUserExistsByUserName } = require('../middlewares/validate-user-exists.middleware');
const router = express.Router();

router.get('/', getUser);

router.post('/', validateUserExistsByUserName, createUser);

router.get('/:id', validateId, getUserById);

router.delete('/:id', validateId, deleteUserById);

router.put('/:id', validateId, updateUserByIdPut);

router.patch('/:id', validateId, updateUserByIdPatch);


module.exports = router;
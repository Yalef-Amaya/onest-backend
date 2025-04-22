const express = require('express');

const validateId = require('../middlewares/validate-id.middleware');

const router = express.Router();

router.get('/', getOffice);

router.post('/', createOffice);

router.get('/:id', validateId, getOfficeById);

router.delete('/:id', validateId, deleteOfficeById);

router.put('/:id', validateId, updateOfficeByIdPut);

module.exports = router;
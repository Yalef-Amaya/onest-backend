const express = require('express');
const { getComisiones, createComisiones, getComisionesById, deleteComisionesById, updateComisionesByIdPut } = require( '../controllers/comisiones.controller');

const validateId = require('../middlewares/validate-id.middleware');

const router = express.Router();

router.get('/', getComisiones);

router.post('/', createComisiones);

router.get('/:id', validateId, getComisionesById);

router.delete('/:id', validateId, deleteComisionesById);//

router.put('/:id', validateId, updateComisionesByIdPut);

module.exports = router;
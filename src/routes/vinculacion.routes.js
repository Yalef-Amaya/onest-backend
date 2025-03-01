const express = require('express');
const { getVinculacion, createVinculacion, getVinculacionById, deleteVinculacionById, updateVinculacionByIdPut} = require( '../controllers/vinculacion.controller');

const validateId = require('../middlewares/validate-id.middleware');

const router = express.Router();

router.get('/', getVinculacion );

router.post('/', createVinculacion );

router.get('/:id', validateId, getVinculacionById);

router.delete('/:id', validateId, deleteVinculacionById);

router.put('/:id', validateId, updateVinculacionByIdPut);

module.exports = router;
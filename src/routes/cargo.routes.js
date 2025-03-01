const express = require('express');
const { getCargo, createCargo, getCargoById, deleteCargo, updateCargoByIdPut, dbDeleteCargoById, deleteCargoById } = require( '../controllers/cargo.controller');

const validateId = require('../middlewares/validate-id.middleware');

const router = express.Router();

router.get('/', getCargo);

router.post('/', createCargo);

router.get('/:id', validateId, getCargoById);

router.delete('/:id', validateId, deleteCargoById);

router.put('/:id', validateId, updateCargoByIdPut);

module.exports = router;
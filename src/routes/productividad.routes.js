const express = require('express');
const {  } = require( '../controllers/productividad.controller');

const validateId = require('../middlewares/validate-id.middleware');

const router = express.Router();

router.get('/', getProductividadById);

router.post('/', createProductividad);

router.get('/:id', validateId, getProductividadById);

router.delete('/:id', validateId, deleteProductividadById);//

router.put('/:id', validateId, updateProductividadByIdPut);

module.exports = router;
const mongoose = require('mongoose');

const ProductividadSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'El id del usuario es obligatorio']
    },
    oficina: {
        type: String,
        required: [true, 'La oficina es obligatoria']
    },
    fecha: {
        type: Date,
        required: [true, 'La fecha es obligatoria']
    },
    productosRadicados: [{
        banco: {
            type: String,
            required: [true, 'El nombre del banco es obligatorio']
        },
        monto: {
            type: Number,
            required: [true, 'El monto es obligatorio']
        },
        tipoProducto: {
            type: String,
            required: [ true, 'El tipo de producto es obligatorio'],
            enum: ['multiproducto', 'producto propio']
        },
    }],
    totalRadicado: {
        type: Number,
        required: [true, 'El total radicado es obligatorio']
    },
    metaAsesor: {
        type: Number,
        required: [true, 'La meta del asesor es obligatoria']
    },
    metaOficina: {
        type: Number,
        required: [true, 'La meta de la oficina es obligatoria']
    },
    metaCumplida: {
        type: Boolean,
        default: false
    },
});

const ProductividadModel = mongoose.model(
    'productividad',            
    ProductividadSchema          
);

module.exports = ProductividadModel;
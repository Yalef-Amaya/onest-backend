const mongoose = require('mongoose');

const ComisionesSchema = new mongoose.Schema({ 
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'El id del usuario es obligatorio']
    },
    office: {
        type: String,
        required: [true, 'La oficina es obligatoria']
    },
    periodo: {
        type: String,
        required: [true, 'La fecha es obligatoria']
    },
    productosComisionados: [{
        banco: {
            type: String,
            required: [true, 'El nombre del banco es obligatorio']
        },
        monto: {
            type: Number,
            required: [true, 'El monto es obligatorio']
        },
        factorPorMillon: { 
            type: Number, 
            required: [true, 'El factor por millón es obligatorio'] },
        comisionGenerada: {
            type: Number,
            required: [true, 'La comisión generada es obligatoria']
        }
    }],
    totalComision: {
        type: Number,
        // required: [true, 'El total radicado es obligatorio']
    }
    // productividadId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'productividad',
    //     required: [true, 'La meta del asesor es obligatoria']
    // },
    // pagada: {
    //     type: Boolean,
    //     default: false
    // },
    // frecuenciaPago: {
    //     type: String,
    //     required: [true, 'La frecuencia de pago es obligatoria'],
    //     enum: ['semanal', 'mensual']
    // },
});

const ComisionesModel = mongoose.model(
    'comisiones',            
    ComisionesSchema          
);

module.exports = ComisionesModel;
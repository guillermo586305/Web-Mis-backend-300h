const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: String,
    precio: { type: Number, required: true },
    cantidad: { type: Number, required: true },
    fechaIngreso: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Producto', productoSchema);

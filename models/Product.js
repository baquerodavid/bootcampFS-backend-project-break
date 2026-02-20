const mongoose = require('mongoose');

// enum de Categoría (Category) y Talla (Size)
const validCategory = ['camisetas', 'pantalones', 'sudaderas', 'accesorios'];
const validSize = ['XS', 'S', 'M', 'L', 'XL']

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, enum: validCategory, required: true },
  size: { type: String, enum: validSize, required: true },
  price: { type: Number, required: true, min: 0 },
},
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);

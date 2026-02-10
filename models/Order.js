const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Flower', required: true }]
}, { timestamps: true });

module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);

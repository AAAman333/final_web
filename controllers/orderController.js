const Order = require('../models/Order');
const Flower = require('../models/Flower');

exports.getAll = async (req, res) => res.json(await Order.find().populate('items'));
exports.getOne = async (req, res) => res.json(await Order.findById(req.params.id).populate('items'));
exports.create = async (req, res) => {
  const flowers = await Flower.find({ _id: { $in: req.body.items } });
  const total = flowers.reduce((s, f) => s + f.price, 0);
  const order = await Order.create({ ...req.body, totalPrice: total });
  res.status(201).json(order);
};
exports.update = async (req, res) => res.json(await Order.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.delete = async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
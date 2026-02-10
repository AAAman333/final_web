const Flower = require('../models/Flower');

exports.getAll = async (req, res) => res.json(await Flower.find());
exports.getOne = async (req, res) => res.json(await Flower.findById(req.params.id));
exports.create = async (req, res) => res.status(201).json(await Flower.create(req.body));
exports.update = async (req, res) => res.json(await Flower.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.delete = async (req, res) => {
  await Flower.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
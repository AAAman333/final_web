const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET || 'SECRET_123', { expiresIn: '1d' });

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = signToken(user._id);
    res.status(201).json({ token, user: { email: user.email, role: user.role } });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = signToken(user._id);
    res.json({ token, user: { email: user.email, role: user.role } });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
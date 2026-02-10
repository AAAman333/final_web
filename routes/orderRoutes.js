const express = require('express');
const ctrl = require('../controllers/orderController');
const { protect, restrictTo } = require('../middleware/auth');
const router = express.Router();

router.get('/', protect, restrictTo('admin'), ctrl.getAll);
router.get('/:id', protect, restrictTo('admin'), ctrl.getOne);
router.post('/', protect, ctrl.create);
router.put('/:id', protect, restrictTo('admin'), ctrl.update);
router.delete('/:id', protect, restrictTo('admin'), ctrl.delete);

module.exports = router;
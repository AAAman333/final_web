const express = require('express');
const ctrl = require('../controllers/flowerController');
const { protect, restrictTo } = require('../middleware/auth');
const router = express.Router();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/', protect, restrictTo('admin'), ctrl.create);
router.put('/:id', protect, restrictTo('admin'), ctrl.update);
router.delete('/:id', protect, restrictTo('admin'), ctrl.delete);

module.exports = router;
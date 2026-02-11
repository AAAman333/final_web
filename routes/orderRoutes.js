const express = require('express');
const ctrl = require('../controllers/orderController');
const { protect, restrictToAdmin } = require('../middleware/auth');
const router = express.Router();

router.get('/', protect, restrictToAdmin, ctrl.getAll);
router.get('/:id', protect, restrictToAdmin, ctrl.getOne);
router.post('/', protect, ctrl.create);
router.put('/:id', protect, restrictToAdmin, ctrl.update);
router.delete('/:id', protect, restrictToAdmin, ctrl.delete);

module.exports = router;

const express = require('express');
const ctrl = require('../controllers/flowerController');
const { protect, restrictToAdmin } = require('../middleware/auth');
const router = express.Router();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/', protect, restrictToAdmin, ctrl.create);
router.put('/:id', protect, restrictToAdmin, ctrl.update);
router.delete('/:id', protect, restrictToAdmin, ctrl.delete);

module.exports = router;

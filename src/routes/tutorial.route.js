const express = require('express');

const router = express.Router();
const tutorialCtrl = require('../controllers/tutorial.controller');

router.get('/', tutorialCtrl.findAll);
router.post('/', tutorialCtrl.create);
router.delete('/', tutorialCtrl.deleteAll);

router.get('/published', tutorialCtrl.findAllPublished);

router.get('/:id', tutorialCtrl.findOne);
router.put('/:id', tutorialCtrl.update);
router.delete('/:id', tutorialCtrl.delete);

module.exports = router;

const router = require('express').Router();

const tutorialRoutes = require('./tutorial.route');

router.get('/', (req, res) => res.send({ message: 'welcome api home' }));

router.use('/tutorials', tutorialRoutes);

module.exports = router;

const router = require('express').Router();
const userRoutes = require('./user');

// now its /api/user
router.use('/user', userRoutes);

module.exports = router;

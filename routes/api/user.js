const router = require('express').Router();
const userController = require('../../controllers/userControllers');

module.exports = router;

router.route('/').post(userController.create);

router.route('/:name').get(userController.findNumber);

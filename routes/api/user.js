//requiring in my controllers file that tells the route what to do
const router = require('express').Router();
const userController = require('../../controllers/userControllers');

module.exports = router;

//using router.route so when there is a /api/user/  it knows it is a post and the create function inside the userController file
router.route('/').post(userController.create);

//using router.route so when there is a /api/user/:name  it knows it is a get and the findNumber function inside the userController file
router.route('/:name').get(userController.findNumber);

const router = require('express').Router();
const db = require('../models');

module.exports = router;

// Sample  routes ========================================================
//Route for creating user and number
router.post('/api/user', function(req, res) {
	db.User.create(req.body).then(function(user) {
		res.json(user);
	});
});

//Route to get the users number
router.get('/api/user/:name', function(req, res) {
	console.log('*************User*************');
	console.log(req.params);
	console.log(req.body);
	console.log('**************************');
	db.User
		.findOne({
			where: {
				name: req.params.name
			}
		})
		.then(function(userInfo) {
			res.json(userInfo);
		});
});

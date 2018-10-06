const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes
router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;



//========================================================
// const router = require('express').Router();
// const db = require('../models');

// module.exports = router;

 // Sample  routes ========================================================
// //Route for creating user and number
// router.post('/api/user', function(req, res) {
// 	db.User.create(req.body).then(function(user) {
// 		res.json(user);
// 	});
// });

//Route to get the users number
// router.get('/api/user/:name', function(req, res) {
// 	db.User
// 		.findOne({
// 			where: {
// 				name: req.params.name
// 			}
// 		})
// 		.then(function(userInfo) {
// 			res.json(userInfo);
// 		});
// });
//I could just put all my routes in this file for just one table in my db such as users,
//but what if I had a table for users, animals, etc... that will end up messy
//so using route.use to separate my routes

//=======================IF YOU WANT TO BREAK UP ALL ROUTES(CONTROLLERS IN SEP FILES... SEE BELOW)=================================

const router = require('express').Router();
const path = require('path');

//apiRoutes == everything in the Api Folder
//setting all routes to start with /api and then whats in api will follow hence the const apiRoutes
//basically all routes in the api folder will start with /api
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;

//=======================IF YOU WANT TO PUT ALL ROUTES(CONTROLLERS IN ONE FILE... SEE BELOW)=================================
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

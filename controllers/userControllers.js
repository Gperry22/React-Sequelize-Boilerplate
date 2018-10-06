const db = require('../models');

module.exports = {
	create: (req, res) => {
		db.User.create(req.body).then(function(user) {
			res.json(user);
		});
	},

	findNumber: (req, res) => {
		db.User
			.findOne({
				where: {
					name: req.params.name
				}
			})
			.then(function(userInfo) {
				res.json(userInfo);
			});
	}
};

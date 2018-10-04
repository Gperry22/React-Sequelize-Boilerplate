const express = require('express');
const bodyParser = require('body-parser');
// const routes = require('./routes');
const db = require('./models');
const app = express();

const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets

app.use(express.static('client/build'));

// app.use(routes);

//{ force: false } to not overwrite DB each app load
//{ force: true } to overwrite DB each app load
db.sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`Listening on PORT ${PORT}`);
	});
});

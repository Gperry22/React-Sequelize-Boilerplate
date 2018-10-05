import axios from 'axios';
var qs = require('qs');

export default {
	createUser: (data) => {
		return axios.post('/api/user/', data);
	},
	getUserNumber: (name) => {
		return axios.get('/api/user/' + name);
	}
};

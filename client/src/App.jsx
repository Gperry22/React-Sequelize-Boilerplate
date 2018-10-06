import React, { Component } from 'react';
import './App.css';
import API from './utils';
import AddNumber from './components/AddNumber';
import FindNumber from './components/FindNumber';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			number: '',
			nameToFindNumber: ''
		};
	}

	//input boxes information
	onHandleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	enterSubmitNameNumber = (event) => {
		event.preventDefault();
		if (this.state.name.length && this.state.number.length) {
			const userToCreate = {
				name: this.state.name,
				number: this.state.number
			};
			API.createUser(userToCreate)
				.then(alert('Name and Number added to the database.'))
				.catch((err) => console.log(err));
		} else {
			alert('Please enter your name and favorite number');
		}
	};

	enterOnlyName = (event) => {
		event.preventDefault();
		if (!this.state.nameToFindNumber) {
			alert('Please Enter your Name to find out your favorite Number');
		} else {
			const userName = this.state.nameToFindNumber;
			API.getUserNumber(userName)
				.then((res) => {
					console.log(res.data);
					if (res.data === null) {
						alert('There is no user by that name');
					} else {
						let responseName = res.data.name.toLowerCase();
						let userName = responseName.charAt(0).toUpperCase() + responseName.substr(1);
						let number = res.data.number;
						alert(`Your ${userName} favorite number is ${number}`);
					}
				})
				.catch((err) => console.log(err));
		}
	};

	render() {
		return (
			<div>
				<AddNumber handleChange={this.onHandleChange} value={this.state} submit={this.enterSubmitNameNumber} />
				<FindNumber handleChange={this.onHandleChange} value={this.state} submit={this.enterOnlyName} />
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import './App.css';
import API from './utils/API';
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
		if (!this.state.name.length && !this.state.number.length) {
			alert('Please enter your name and favorite number');
		}
	};

	enterOnlyName = (event) => {
		event.preventDefault();
		if (!this.state.nameToFindNumber) {
			alert('Please Enter your Name to find out your favorite Number');
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

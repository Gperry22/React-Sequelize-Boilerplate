import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const AddNumber = (props) => {
	return (
		<Jumbotron className="container">
			<h2>What's your Favorite Number</h2>
			<input
				className="inputLength"
				type="text"
				name="name"
				placeholder="Enter Name"
				onChange={props.handleChange}
				value={props.value.name}
			/>

			<input
				className="inputLength"
				type="number"
				name="number"
				placeholder="Enter Favorite Number"
				onChange={props.handleChange}
				value={props.value.number}
			/>

			<p>Enter your Name and your Favorite number and press submit to save them to the database.</p>
			<p>
				<Button onClick={props.submit} bsStyle="primary">
					Submit
				</Button>
			</p>
		</Jumbotron>
	);
};

export default AddNumber;

import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const FindNumber = (props) => {
	return (
		<Jumbotron className="container">
			<h2>Enter your name to find your Favorite Number</h2>
			<input
				className="inputLength"
				type="text"
				name="nameToFindNumber"
				placeholder="Enter Name"
				onChange={props.handleChange}
				value={props.value.nameToFindNumber}
			/>

			<p>Enter your Name and press submit to see your favorite Number.</p>
			<p>
				<Button onClick={props.submit} bsStyle="primary">
					Submit
				</Button>
			</p>
		</Jumbotron>
	);
};

export default FindNumber;

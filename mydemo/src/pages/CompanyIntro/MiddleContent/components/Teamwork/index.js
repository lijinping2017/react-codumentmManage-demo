import React, { Component } from 'react';

import "./teamwork.css";

class Teamwork extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="teamwork-content">
				<div className="teamwork-img">
					<img src={require("./images/teamwork.jpg")} />
				</div>
			</div>
		);
	}
}

export default Teamwork;
import React, { Component } from 'react';

import "./organize.css";

class Orgazine extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="organize-content">
				<div className="organize-img">
					<img src={require("./images/organize.jpg")} />
				</div>
			</div>
		);
	}
}

export default Orgazine;
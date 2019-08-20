import React, { Component } from 'react';

import Header from '../../components/Header';
import MiddleContent from './MiddleContent';
import RightMenu from '../../components/RightMenu';

class CompanyIntro extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return (
			<div>
				<Header /> 
				<MiddleContent routes={this.props.routes} path={this.props}/>
				<RightMenu path={this.props} />
			</div>
		);
	}
}

export default CompanyIntro;









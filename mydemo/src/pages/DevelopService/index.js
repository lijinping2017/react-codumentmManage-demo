import React, { Component } from "react";

import Header from "../../components/Header";
import RightMenu from "../../components/RightMenu";
import DocMenuManage from "./comment/DocMenuManage";

class DevelopService extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<DocMenuManage />
				<RightMenu path={this.props} />
			</div>
		)
	}
}

export default DevelopService;
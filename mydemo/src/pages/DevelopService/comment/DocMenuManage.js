import React, { Component } from "react";
import { Tabs } from 'antd';
import "./docmenumanage.css";
import Document from "../components/DocumentManage";

const { TabPane } = Tabs;

class DocMenuManage extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="warp">
				<Tabs type="card">
				    <TabPane tab="文档管理" key="1">
				      	<Document />
				    </TabPane>
				    <TabPane tab="空间树管理" key="2">
				      	Content of Tab Pane 2
				    </TabPane>
				    <TabPane tab="进度管理" key="3">
				     	Content of Tab Pane 3
				    </TabPane>
				</Tabs>
			</div>
		)
	}
}

export default DocMenuManage;
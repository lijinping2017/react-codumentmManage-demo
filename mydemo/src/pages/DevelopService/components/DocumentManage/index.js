import React, { Component } from "react";
import { Tabs, Button, Tree, Icon, Modal } from 'antd';
import "./documentmanage.css";
import NewFolderModal from "./NewFolderModal";
import ImportDocumentModal from "./ImportDocumentModal";

const { TabPane } = Tabs;
const { TreeNode } = Tree;

class Document extends Component{
	constructor(props) {
		super(props);
		this.state = {
			disabled: true,
			treeData: [
		      	{ 
		      		title: '测试', 
		      		key: '0',
			      	children: [
				      	{
				      		title: '测试1', 
		      				key: '0-1',
  					      	children: [
  						      	{
  						      		title: '测试2', 
		      						key: '0-2',
  						      	}
  					      	]
				      	}
			      	]
		      	},
		      	{ 
		      		title: '文档', 
		      		key: '1',
			      	children: [
				      	{
				      		title: '文档1', 
		      				key: '1-1',
  					      	children: [
  						      	{
  						      		title: '文档2', 
		      						key: '1-2',
  						      	}
  					      	]
				      	}
			      	]
		      	},
		      	{ title: 'Tree Node', key: '2', isLeaf: true },
		    ]
		}
	}

	showNewFolderModal = () => {
	    this.refs.newfoldermodal.showModal();
	};

	showImportDocModal = () => {
	    this.refs.importDocModal.showModal();
	};

	onSelect = (selectedKeys, info) => {
		this.setState({
			disabled: false
		})
	   console.log('selected', selectedKeys, info);
	};

	renderTreeNodes = data => 
		data.map(item => {
		    if (item.children) {
		       	return (
		         	<TreeNode title={item.title} key={item.key} dataRef={item}>
		           		{this.renderTreeNodes(item.children)}
		         	</TreeNode>
		       	);
		    }
		    return <TreeNode {...item} dataRef={item} />;
	   	});



	render() {
		return (
			<div className="document-content">
				<div className="document-left">
					<div className="document-left-top">
						<h4>文档管理</h4>
						<Tree onSelect={this.onSelect}>
							{this.renderTreeNodes(this.state.treeData)}
						</Tree>
					</div>
				</div>
				<div className="document-right">
					<Button disabled={this.state.disabled} onClick={this.showImportDocModal}>导入文档</Button>
					<Button onClick={this.showNewFolderModal}>新增文件夹</Button>
					<Button>删除</Button>
					<Button>下载</Button>
					<div className="document-folder">
						<div className="document-icon">
							<Icon className="icon folder" type="folder" />
							<p>测试1</p>
						</div>
						<div className="document-icon">
							<Icon className="icon file" type="file" />
							<p>react学习网址g.txt</p>
						</div>
					</div>
				</div>
				<ImportDocumentModal ref="importDocModal"/>
				<NewFolderModal ref="newfoldermodal"/>
			</div>
		)
	}
}

export default Document;
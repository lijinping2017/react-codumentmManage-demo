import React, { Component } from 'react';

import "./rightmenu.css";
import { Link } from "react-router-dom";
import { Button, Icon } from 'antd';

class RightMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menudata: [
				{
					title: "开发服务",
					icon: "mail",
					linkto: "/developService"
				},
				{
					title: "产品销售",
					icon: "calendar",
					linkto: "/developService"
				},
				{
					title: "工程培训",
					icon: "mail",
					linkto: "/developService"
				},
				{
					title: "工程咨询",
					icon: "calendar",
					linkto: "/developService"
				},
				{
					title: "公司简介",
					icon: "mail",
					linkto: "/companyIntro/"
				},
				{
					title: "典型案例",
					icon: "calendar",
					linkto: "/typicalCase"
				},
				{
					title: "综合解决",
					icon: "mail",
					linkto: "/solution"
				},
				{
					title: "白皮书",
					icon: "calendar",
					linkto: "/whitePaper"
				}
			]
		}
	}

	tabIndex = (text) => {
		const url = this.props.path.location.pathname;
		if( new RegExp(text).test(url) ) {  //正则表达式：如果地址栏地址中存在参数text字符串即linkto的值,则存在active类
			return "active";
		}else {
			return "button";
		}
	}

	render() {
		return (
			<div className="right-menu">
				<div className="menu-warp">
					<Button type="primary" className="button home">
						<Link to="/" >
		         			<Icon type="home" /> 
		         		</Link>
		       		</Button>
					<ul>
						{
							this.state.menudata.map((value,key) => {
								return (
									<li key={key}>
										<Button type="primary" className={this.tabIndex(value.linkto)} >
											<Link to={value.linkto} >
							         			{value.title}
							         		</Link>
							       		</Button>
							       	</li>
								)
							})
						}
					</ul>
				</div>	
			</div>
		);
	}
}

export default RightMenu;
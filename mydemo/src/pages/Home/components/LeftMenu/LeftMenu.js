import React, { Component } from 'react';

/*import CompanyIntro from "../../../CompanyIntro";*/
import "./leftmenu.css";
import { Link } from "react-router-dom";
import { Button,Icon } from 'antd';

class LeftMenu extends Component {
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

	render() {
		return (
			<div>
				<div className="left-menu">
					{
						this.state.menudata.map((value,key) => {
							return (
								<li key={key}>

									<Button type="primary" className="button">
										<Link to={value.linkto}>
											<Icon type={value.icon} className="icon"/>
						         			{value.title}
						         		</Link>
						       		</Button>
						       	</li>
							)
						})
					}
				</div>	
			</div>
		);
	}
}

export default LeftMenu;
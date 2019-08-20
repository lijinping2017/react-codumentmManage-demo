import React, { Component } from 'react';

import Header from '../../components/Header';
import RightMenu from '../../components/RightMenu';
import "./solution.css";
import { Button } from "antd";
import solution from "./images/solution.jpg";
import { Link } from "react-router-dom";
 
class Solution extends Component {
	constructor(props) {
		super(props);
		this.state = {
			solutionData: [
				{
					imgUrl: solution,
					date: "2019-6-22",
					title: "各种图片不同颜色测试各种图片不同颜色测试",
					text: "京东方科技集团股份有限公司（BOE）创立于1993年4月，是一家为信息交互和人类健康提供智慧端口产品和专业服务的物联网公司。京东方的核心事业包括端口器件、智慧物联、智慧医工。端口器件产品广泛应用于手机、平板电脑、笔记本电脑、显示器、电视、车载、可穿戴设备等领域。",
					id: 1
				},
				{
					imgUrl: solution,
					date: "2019-6-22",
					title: "各种图片不同颜色测试各种图片不同颜色测试",
					text: "广州君和信息技术有限公司，一致以服务于举出社会行业为主要方向。",
					id: 2
				}
			]
		}
	}

	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return (
			<div>
				<Header /> 
				<div className="warp">
					<div className="middlemenu-wrap">
						<div className="content">
							<div className="left-icon">
							</div>
							<div className="left-title">
								<p>综合解决方案</p>	
							</div>
							<div className="right-title">	
								<Button className="right-button">编辑案例</Button>
							</div>
						</div>
					</div>
					<div className="solution-content">
						<ul>
							{
								this.state.solutionData.map((value,key) => {
									return (
										<li key={key}>
											<Link to={`/solution/${value.id}`}>
												<div className="div-photo">
													<img src={value.imgUrl}/>
												</div>
												<div className="div-introduce">
													<p className="p-title" >{value.title}</p>
													<p className="p-date">{value.date}</p>
													<p>{value.text}</p>
												</div>
											</Link>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
				<RightMenu path={this.props} />
			</div>
		);
	}
}

export default Solution;









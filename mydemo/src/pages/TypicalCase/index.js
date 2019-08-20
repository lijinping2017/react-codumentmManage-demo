import React, { Component } from 'react';

import Header from '../../components/Header';
import RightMenu from '../../components/RightMenu';
import "./typicalcase.css";
import { Button } from "antd";
import typicalcase from "./images/typicalcase.jpg";
import { Link } from "react-router-dom";
 
class TypicalCase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			developData: [
				{
					imgUrl: typicalcase,
					date: "2019-6-22",
					details: "各种图片不同颜色测试",
					id: 1
				},
				{
					imgUrl: typicalcase,
					date: "2019-6-22",
					details: "各种图片不同颜色测试",
					id: 2
				},
				{
					imgUrl: typicalcase,
					date: "2019-6-22",
					details: "各种图片不同颜色测试",
					id: 3
				},
				{
					imgUrl: typicalcase,
					date: "2019-6-22",
					details: "各种图片不同颜色测试",
					id: 4
				},
				{
					imgUrl: typicalcase,
					date: "2019-6-22",
					details: "各种图片不同颜色测试",
					id: 5
				},
				{
					imgUrl: typicalcase,
					date: "2019-6-22",
					details: "各种图片不同颜色测试",
					id: 6
				},
				{
					imgUrl: typicalcase,
					date: "2019-6-22",
					details: "各种图片不同颜色测试",
					id: 7
				},
				{
					imgUrl: typicalcase,
					date: "2019-6-22",
					details: "各种图片不同颜色测试",
					id: 8
				},
				{
					imgUrl: typicalcase,
					date: "2019-6-22",
					details: "各种图片不同颜色测试",
					id: 9
				},
				{
					imgUrl: typicalcase,
					date: "2019-6-22",
					details: "各种图片不同颜色测试",
					id: 10
				},
				{
					imgUrl: typicalcase,
					date: "2019-6-22",
					details: "各种图片不同颜色测试",
					id: 11
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
								<p>典型案例</p>	
							</div>
							<div className="right-title">	
								<Button className="right-button">编辑案例</Button>
							</div>
						</div>
					</div>
					<div className="typicalcase-content">
						<ul>
							{
								this.state.developData.map((value,key) => {
									return (
										<li key={key}>
											<Link to={`/typicalCase/${value.id}`}>
												<div className="div-photo">
													<img src={value.imgUrl}/>
												</div>
												<p>{value.details}</p>
												<p>{value.date}</p>
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

export default TypicalCase;









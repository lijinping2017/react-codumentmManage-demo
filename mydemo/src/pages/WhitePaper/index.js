import React, { Component } from 'react';

import Header from '../../components/Header';
import RightMenu from '../../components/RightMenu';
import "./whitepaper.css";
import { Button } from "antd";
import whitepaper from "./images/whitepaper.jpg";
import { Link } from "react-router-dom";
 
class WhitePaper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			whiperpaperData: [
				{
					imgUrl: whitepaper,
					title: "向建筑产业现代化迈进 广联达《数字建筑白皮书》",
					id: 1
				},
				{
					imgUrl: whitepaper,
					title: "感恩世界，论爱的深沉之《爱的较量》",
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
								<p>白皮书</p>	
							</div>
							<div className="right-title">	
								<Button className="right-button">编辑案例</Button>
							</div>
						</div>
					</div>
					<div className="whitepaper-content">
						<ul>
							{
								this.state.whiperpaperData.map((value,key) => {
									return (
										<li key={key}>
											<Link to={`/whitePaper/${value.id}`}>
												<div className="div-photo">
													<img src={value.imgUrl}/>
												</div>
												<div className="div-introduce">
													<p className="p-title" >{value.title}</p>
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

export default WhitePaper;









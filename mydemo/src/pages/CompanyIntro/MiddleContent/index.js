import React, { Component } from 'react';

import "./middlecontent.css";
import { Route, Link } from "react-router-dom";

class MiddleContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			presentlink: "/companyIntro/"
		}
	}

	activeLink = (tab) => {
		return this.props.path.location.pathname === tab ? "active" : "";
	}

	comoponentDidMount()　{
		console.log(this.props);
	}

	render() {
		return (
			<div className="warp">
				<div className="middlemenu-wrap">
					<div className="content">
						<div className="left-icon">
						</div>
						<div className="left-title">
							<p>公司介绍</p>	
						</div>
						<div className="right-title">	
							<ul>
								<li>
									<Link to="/companyIntro/teamintro" 
										onClick={()=>{this.setState({presentlink: "/companyIntro/teamintro"})}} 
										className={this.activeLink("/companyIntro/teamintro")}
									>
										团队介绍
									</Link>
								</li>
								<li>
									<Link to="/companyIntro/teamwork"
										onClick={()=>{this.setState({presentlink: "/companyIntro/teamwork"})}} 
										className={this.activeLink("/companyIntro/teamwork")}
									>
										合作伙伴
									</Link>
								</li>
								<li>
									<Link to="/companyIntro/organize"
										onClick={()=>{this.setState({presentlink: "/companyIntro/organize"})}} 
										className={this.activeLink("/companyIntro/organize")}
									>
										组织架构
									</Link>
								</li>
								<li>
									<Link to="/companyIntro/"
										onClick={()=>{this.setState({presentlink: "/companyIntro/"})}} 
										className={this.activeLink("/companyIntro/")}
									>
										发展历程
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="company-content">
					{
						this.props.routes.map((value,key)=>{
							return <Route key={key} exact path={value.path} component={value.component} />
						})
					}
				</div>
			</div>
		);
	}
}

export default MiddleContent;

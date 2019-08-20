import React, { Component } from 'react';

import Header from '../../components/Header';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Banner from './components/Banner/Banner';
import { Redirect } from "react-router-dom";
import cookies from "react-cookies";
import "./home.css";


class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if(cookies.load('accessToken') ) {
			return (
				<div>
					<Header />
					<div className="home-content">
						<LeftMenu />
						<Banner />
						<div className="details">
							<p>
								广州君和信息技术有限公司，一直以服务于基础设施行业为主要方向，以软件销售、工程
	                            项目服务、软件和培训为主营业务，覆盖民用建筑、土木交通、工业建筑、水处理、勘察测绘、
	                            环保、石化冶金、电力等行业，提供从设计、施工到运维的软件和技术服务。
							</p>
							<p>
								团队专业技术人员占比85%。技术能力与服务得到大公司的认可，近年事业绩蓬勃与中建、中交、中水、中铁、中冶等中字头企业均有长期合伙。
							</p>
						</div>
					</div>
				</div>
			);	
		}
		return <Redirect to="/user/login" />
		
	}
}

export default Home;

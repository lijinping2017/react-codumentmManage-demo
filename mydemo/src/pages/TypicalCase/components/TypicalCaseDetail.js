import React, { Component } from 'react';

import Header from '../../../components/Header';
import RightMenu from '../../../components/RightMenu';
import "./typicalcasedetail.css";
import { Button } from "antd";
import typicalcase from "../images/typicalcase.jpg";
import { Link } from "react-router-dom";


const detailData = {
	description: "京东方科技集团股份有限公司（BOE）创立于1993年4月，是一家为信息交互和人类健康提供智慧端口产品和专业服务的物联网公司。京东方的核心事业包括端口器件、智慧物联、智慧医工。端口器件产品广泛应用于手机、平板电脑、笔记本电脑、显示器、电视、车载、可穿戴设备等领域；智慧物联为新零售、交通、金融、教育、艺术、医疗等领域，搭建物联网平台，提供“硬件产品+软件平台+场景应用”整体解决方案；在智慧医工领域，京东方通过移动健康管理平台和数字化医院为用户提供了全面的健康服务。2018年，京东方新增专利申请量9585件，其中发明专利超90%，累计可使用专利超7万件。 全球创新活动的领先指标——汤森路透《2016全球创新报告》显示，BOE（京东方）已跻身半导体领域全球第二大创新公司。美国商业专利数据显示，2018年BOE（京东方）美国专利授权量全球排名第17位，成为美国IFI Claims TOP20中增速最快的企业。 世界知识产权组织（WIPO）发布2018年全球国际专利申请（PCT）情况，BOE（京东方）以1813件PCT申请位列全球第七。根据市场咨询机构IHS数据，2018年BOE（京东方）液晶显示屏出货数量约占全球25%，总出货量全球第一 2019年第一季度，BOE（京东方）智能手机液晶显示屏、平板电脑显示屏、笔记本电脑显示屏、显示器显示屏、电视显示屏出货量均位列全球第一。"
}

class TypicalCaseDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: detailData.description,
			tag: "anli"
		}
	}

	componentDidMount() {
		console.log(this.props);
	}

	changeAnli = () => {
		this.setState({
			text: detailData.description,
			tag: "anli"
		}) 
	}

	changeFangan = () => {
		this.setState({
			text: "",
			tag: "fangan"
		}) 
	}

	active = (tag) => {
		return this.state.tag === tag ? "active" : "";
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
								<p>海绵城市水利模型设计{this.props.match.params.id}</p>	
							</div>
							<div className="right-title">	
								<Link to="/typicalCase">
									<Button className="right-button">返回案例总览</Button>
								</Link>
							</div>
						</div>
					</div>
					<div className="typicalcasedetail-content">
						<div className="detail-img">
							<img src={require("../images/typicalcase.jpg")}/>
						</div>
						<div className="detail">
							<div className="detail-top">
								<ul>
									<li onClick={this.changeAnli} className={this.active("anli")}>案例成果</li>
									<li onClick={this.changeFangan} className={this.active("fangan")}>解决方案</li>
								</ul>
							</div>
							<div>
								<p>{this.state.text}</p>
							</div>
						</div>
					</div>
				</div>
				<RightMenu path={this.props} />
			</div>
		);
	}
}

export default TypicalCaseDetail;









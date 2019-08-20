import React, { Component } from 'react';

import "./teamintro.css";

class Teamintro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teamintroData: [
				{
					year: 2019,
					details: "因发展需要，业务扩展广州公司总部搬迁至东风中路515号"
				},
				{
					year: 2019,
					details: "因发展需要，业务扩展广州公司总部搬迁至东风中路515号"
				},
				{
					year: 2019,
					details: "因发展需要，业务扩展广州公司总部搬迁至东风中路515号"
				},
				{
					year: 2019,
					details: "因发展需要，业务扩展广州公司总部搬迁至东风中路515号"
				},
				{
					year: 2019,
					details: "因发展需要，业务扩展广州公司总部搬迁至东风中路515号"
				}
			]
		}
	}

	render() {
		return (
			<div className="teamintro-content">
				<div className="teamintro-title">
					<p>
						京东方科技集团股份有限公司（BOE）创立于1993年4月，是一家为信息交互和人类健康提供智慧端口产品和专业服务的物联网公司。京东方的核心事业包括端口器件、智慧物联、智慧医工。端口器件产品广泛应用于手机、平板电脑、笔记本电脑、显示器、电视、车载、可穿戴设备等领域；智慧物联为新零售、交通、金融、教育、艺术、医疗等领域，搭建物联网平台，提供“硬件产品+软件平台+场景应用”整体解决方案；在智慧医工领域，京东方通过移动健康管理平台和数字化医院为用户提供了全面的健康服务。2018年，京东方新增专利申请量9585件，其中发明专利超90%，累计可使用专利超7万件。 全球创新活动的领先指标——汤森路透《2016全球创新报告》显示，BOE（京东方）已跻身半导体领域全球第二大创新公司。美国商业专利数据显示，2018年BOE（京东方）美国专利授权量全球排名第17位，成为美国IFI Claims TOP20中增速最快的企业。 世界知识产权组织（WIPO）发布2018年全球国际专利申请（PCT）情况，BOE（京东方）以1813件PCT申请位列全球第七。根据市场咨询机构IHS数据，2018年BOE（京东方）液晶显示屏出货数量约占全球25%，总出货量全球第一 2019年第一季度，BOE（京东方）智能手机液晶显示屏、平板电脑显示屏、笔记本电脑显示屏、显示器显示屏、电视显示屏出货量均位列全球第一。
					</p>
				</div>
				<div className="teamintro-list">
					<ul>
						{
							this.state.teamintroData.map((value,key) => {
								return (
									<li key={key}>
										<div className="li-title">
											<div className="li-title-img">
											</div>
											<div className="li-title-tag">
												<span>经理</span>
											</div>
										</div>
										<div className="li-detail">
											<h3>李文志</h3>
										</div>
										<div className="li-detail p">
											<p>开发部经理、二次开发工程师</p>
										</div>
										<div className="li-detail p">
											<p>3年工龄</p>
										</div>
										<div className="li-detail p">
											<p>主要负责新积水工厂项目、高速项目</p>
										</div>
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

export default Teamintro;
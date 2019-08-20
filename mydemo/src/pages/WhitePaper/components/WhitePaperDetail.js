import React, { Component } from 'react';

import Header from '../../../components/Header';
import RightMenu from '../../../components/RightMenu';
import "./whitepaperdetail.css";
import { Button } from "antd";
import { Link } from "react-router-dom";


const detailData = {
	description: "阿里发布了《智慧建筑白皮书》。白皮书提出了智慧建筑的三大基础特征：一是全面感知永远在线的生命体；二是拥有“大脑”的自进化智慧平台，其核心是将智慧建筑的建筑数据与建筑使用者的反馈数据通过机器学习的方式去培育平台的智慧；三是人、机、物高度融合的开放生态系统。“智能建筑or智慧建筑？”会上，达沃斯世界经济论坛人工智能委员会主席Justine Cassell从智慧分析、智慧定制化和行为改变三个方面阐述两个概念的区别与联系，认为智能建筑会存储许多信息，而智慧建筑是从数据中学习成长。中科院智慧城市研究中心主任宁德军也在现场分享了他理想中智慧建筑必然的建设模式，即基于群体智能的社会化开放创新生态环境使其能共享、共创。阿里巴巴集团合伙人、技术委员会主席王坚表达了对智慧建筑在中国市场的发展基础及愿景的看好。他认为智慧建筑将通过互联网基础设施的接入实现在线和连接，通过在线产生的数据完成建筑设计及体验的闭环，最终通过云计算使其产生的价值远远超过建筑本身。"
}

class WhitePaperDetail extends Component {
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
								<p>《智慧建筑白皮书》：建筑将成为拥有大脑的智慧平台</p>	
							</div>
							<div className="right-title">	
								<Link to="/whitePaper">
									<Button className="right-button">返回案例总览</Button>
								</Link>
							</div>
						</div>
					</div>
					<div className="whitepaperdetail-content">
						<div className="detail">
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

export default WhitePaperDetail;









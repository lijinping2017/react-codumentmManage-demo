import React, { Component } from 'react';

import "./develop.css";

class Develop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			developData: [
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
			<div className="develop-content">
				<div className="develop-img">
					<img src={require("./images/develop.jpg")} />
				</div>
				<div className="develop-title">
					<h4>详细事件</h4>
				</div>
				<div className="develop-list">
					<ul>
						{
							this.state.developData.map((value,key) => {
								return (
									<li key={key}>
										<p>{value.year}</p>
										<p>{value.details}</p>
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

export default Develop;
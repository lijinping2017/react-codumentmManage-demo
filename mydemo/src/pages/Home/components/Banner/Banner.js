import React, { Component } from 'react';

import banner1 from "./images/1.jpg";
import banner2 from "./images/2.jpg";
import banner3 from "./images/3.jpg";
import banner4 from "./images/4.jpg";

import "./banner.css";


class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bannerData:　[banner1,banner2,banner3,banner4],
			indexNum: 0
		}
	}

	componentDidMount() {
		this.start();		
	}

	componentWillUnmount() {
		clearInterval(this.start);
	}

	start = () => {
		this.timer = setInterval(() => {
			this.next();
		},3000);
	}

	next = () => {
		if(this.state.indexNum >= this.state.bannerData.length - 1 ) {
			this.state.indexNum = 0;
		}else{
			this.state.indexNum++;
		};
		this.setState({
			indexNum: this.state.indexNum
		});
	}

	startTimer() {
		this.start();
	}

	stopTimer() {
		clearInterval(this.timer);
	}

	changeDots(index) {
		this.setState({
			indexNum: index
		})
	}


	render() {
		return (
			<div className="banner" onMouseEnter={this.stopTimer.bind(this)} onMouseLeave={this.startTimer.bind(this)}>
				<ul className="img-ul">
					{
						this.state.bannerData.map((value,index) => {
							return (
								<li className={index === this.state.indexNum ? "show" : ""} key={index}>
									<img src={value} alt="轮播图"/>
								</li>
							)
						})
					}
				</ul>
				<ul className="dots-ul">
					{
						this.state.bannerData.map((value,index) => {
							return (
								<li 
									className={index === this.state.indexNum ? "active" : ""}
									onClick={this.changeDots.bind(this,index)}
									key={index}
								>
								</li>
							)
						})
					}
				</ul>
			</div>
		);
	}
}

export default Banner;
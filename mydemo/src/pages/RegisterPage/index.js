import React, { Component } from 'react';
import RegisterComponet from './components/RegisterComponet.js';
import { Redirect } from 'react-router-dom';

import Header from '../../components/Header';
import './register.css';

class Register extends Component {
	//注册界面配置
	state = {
		//服务条款
		deal:{
	    	show:true,//是否显示服务条款
	    	url : "http://www.baidu.com",
	    	name:"《用户服务条款》"
	    },
	    redirect:false,
	}
	//注册成功回调
	regSuccCall=(data)=>{
	    this.setState({ 
	    	redirect:true
	    });
	}
	render() {
		if (this.state.redirect) {  
		    return <Redirect to="/user/login" />; 
		} 
		return (
			<div id="register-container">
				<Header />
				<div id="register-main">					
					<div className="template">
						<RegisterComponet {...this.state} registerSuccess={this.regSuccCall} />
					</div>
				</div>
			</div>
		);
	}
}

export default Register
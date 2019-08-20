import React, { Component } from 'react';

import LoginComponet from './components/logincomponet.js';
import cookie from 'react-cookies';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import './login.css';

class Login extends Component {
	//登录界面配置
	state = {
	    option:{
	    	show:true,//是否显示注册和忘记密码入口
	    	regPage:'/user/register',//配置注册路由
	    	reset:'/user/reset'//配置找回密码路由
	    },
	    redirect:false
	}
	//登录成功回调
	loginScuessCall=(data)=>{
		console.log(data);
		data = data.data;
		var expires=new Date();
		expires.setTime(data.expires);
		var options={path:"/",expires};
		cookie.save('accessToken', data.access_token, options);
		cookie.save('userInfo', data.user, options);
		cookie.save('modelDb', data.modelDb[0], options);
	    this.setState({ 
	    	redirect:true
	    });
	}
	render() {
		if (this.state.redirect) {  
		    return <Redirect to="/" />; 
		} 
		return (
			<div id="login-container">
				<Header />
				<div id="login-main">
					<div className="template">
						<LoginComponet 
							{...this.state} 
							loginScuessCall={this.loginScuessCall}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default Login
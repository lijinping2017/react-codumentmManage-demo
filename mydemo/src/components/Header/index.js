import React, { Component } from 'react';// React虽然未使用到，但是不可删除，否则会报错，Component作为所有组件的基类,提供了很多组件共有的功能,下面会创建一个组件类,这个组件类的的父类就是Component
import { Redirect, Link } from 'react-router-dom';// 路由库
import cookies from 'react-cookies';// cookie包
import { Button, Avatar, Menu, Dropdown, Row, Col } from 'antd';// ant组件库+

import './title.css';

let bosapp = window.bosapp || {};// 引入全局配置

class Title extends  Component {
	 constructor(props){
        super(props);
        this.state={
            redirect:false
        }
    }
    loginout(){
        cookies.remove('accessToken', { path: '/' });
        cookies.remove('userKey', { path: '/' });
        this.setState({
            redirect:true
        });
    }
    render(){
        if (this.state.redirect) {
            return <Redirect to="/user/login" />;
        }
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/user/profile">用户管理</Link>
                </Menu.Item>
                <Menu.Item onClick={this.loginout.bind(this)}>注销</Menu.Item>
            </Menu>
        )
        // 获取token  在下面组件中判断，如果没有token则显示登录按钮，如果有token则不显示
        var token = cookies.load('accessToken');
    	return (
    		<div id="app-title" className="clearfix">
	            <Row>
	                <Col span={6}>
	                    <h3 className="appName" title={bosapp.appName}>{bosapp.appName}</h3>
	                </Col>
	    			<Col span={18}>
	                {token ?
	                    <Row>
	                        <Col span={12}>
	                        </Col>
	                        <Col span={12}>
	                            <div className="top-right">
	                                <Dropdown overlay={menu}>
	                                    <Avatar icon="user" style={{ backgroundColor: '#87d068',cursor:'pointer' }}/>
	                                </Dropdown>
	                                {/* <Button ghost onClick={this.loginout.bind(this)}>注销</Button> */}
	                            </div>
	                        </Col>
	                    </Row>
	                    :
	                    <div className="top-right">
	                        <Button  ghost><Link to="/user/login">登录</Link></Button>
	                        <Button  ghost><Link to="/user/register">注册</Link></Button>
	                    </div>
	                }
	                </Col>
	            </Row>
			</div>
    	)
    }
}
export default Title;


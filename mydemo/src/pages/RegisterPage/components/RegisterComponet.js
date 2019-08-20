import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './RegisterComponet.css';

var bosapp = window.bosapp || {};
const FormItem = Form.Item;

class Register extends Component {
    constructor() {
        super();
    }
    state = {
        userNameDirty: false,
        confirmDirty: false,
        smgCodeDirty: false,
        smgDisabled: true,
        smgText: "获取验证码",
        autoCompleteResult: [],
        systemMessage: "",
        dealType: true
    }

    submit() {
        var name = this.refs.name;
        var telephone = this.refs.telephone;
        var password = this.refs.password;
        var conpassword = this.refs.conpassword;
        var data = {
            name: name,
            telephone: telephone,
            password: password,
            conpassword: conpassword
        }
        console.log(data);
    }

    render() {
        return (
            <div>
                <div className='register-cc-title'>LOGO &nbsp; &nbsp;技术及产品展示图</div>

                <Form className="register-panel" onSubmit={this.submit.bind(this)}>
                    <div className="register-title">
                        <h3>用户注册</h3>
                    </div>

                    <FormItem className="register-username" hasFeedback>
                        <span className="icon"></span> <label>用户名:</label>
                        <Input ref="name" type="tel" maxLength={11} placeholder="请输入您的用户名" />
                    </FormItem>

                    <FormItem className="register-telephone" hasFeedback>
                        <span className="icon"></span> <label>手机号:</label>
                        <Input ref="telephone" type="tel" maxLength={11} placeholder="请输入您的手机号" />
                    </FormItem>

                    <FormItem className="register-shortValidateCode">
                        <span className="icon"></span> <label>短信验证码:</label>
                        <Input placeholder="请输入您收到的短信验证码" />
                        
                    </FormItem>

                    <FormItem className="register-password" hasFeedback help={ "6-32位，不与用户名相同(区分大小写)，且字母、数字、符号至少包含两种"}>
                        <span className="icon"></span> <label>密码:</label>
                        <Input ref="password" type="password" maxLength={32} placeholder="请输入密码" />
                    </FormItem>

                    <FormItem className="register-conpassword" hasFeedback>
                        <span className="icon"></span> <label>确认密码:</label>
                        <Input ref="conpassword" type="password" placeholder="请再次确认密码" />                 
                    </FormItem>

                    { true &&
                        <div className="register-deal">
                            <input type="checkbox" name="deal" id="deal" /> <label htmlFor="deal"></label>
                            我已阅读并同意<a className="deal-box" target="_blank">同意</a>
                            <span className="message"></span>
                        </div>
                    }

                    <FormItem className="register-btn" hasFeedback>
                        <Button type="primary" htmlType="submit">注册</Button>
                        <span className="systemMessages"></span>
                    </FormItem>

                </Form>
            </div>
        );
    }
    componentDidMount() {
    }
}

const RegisterForm = Form.create()(Register);

export default RegisterForm
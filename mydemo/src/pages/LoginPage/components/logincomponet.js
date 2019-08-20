import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './logincomponet.css';

import axios from 'axios';

import Api from './loginApi';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      systemMessages: "",
      requiredusername: "",
      requiredpassword: "",
      reqdisabled: false,
    };
    this._isMounted = true;
  }

  usernamekeyPress = (e) => {
    var e = e || window.event;
    if (e.which == null) {
      e.which = e.charCode != null ? e.charCode : e.keyCode;
    }
    if (e.which == 13) {
      e.preventDefault();
      this.refs.password.focus();
    }
  };
  passwordkeyPress = (e) => {
    var e = e || window.event;
    if (e.which == null) {
      e.which = e.charCode != null ? e.charCode : e.keyCode;
    }
    if (e.which == 13) {
      e.preventDefault();
      this.refs.loginButton.focus();
      this.submitBtn();
    }
  };

  render() {
    return (
      <div>
        <div className='login-cc-title'>LOGO &nbsp; &nbsp;技术及产品展示图</div>
        <form className="login-panel">
        
          <div className="login-systemMessages">
            <p className="systemMessages">{this.state.systemMessages}</p>
          </div>
          
          <div className="login-username">
            <span className="icon"></span>
            <input type="text" name="username" autoFocus data-required="请输入用户名或者邮箱！"
                   onKeyPress={this.usernamekeyPress.bind(this)} onBlur={this.required.bind(this)}
                   placeholder="请输入用户名/手机号" ref="username"/>
            <span className="message">{this.state.requiredusername}</span>
          </div>
          <div className="login-password">
            <span className="icon"></span>
            <input type="password" data-required="请输入密码！" name="password"
                   onKeyPress={this.passwordkeyPress.bind(this)} onBlur={this.required.bind(this)}
                   ref="password" placeholder="请输入密码"/>
            <span className="message">{this.state.requiredpassword}</span>
          </div>

          <div className="login-btn">
            <button
              onClick={this.submitBtn.bind(this)}
              disabled={this.state.reqdisabled}
              ref="loginButton"
              type="button"
            >
              <i
                className="button-loading"
                aria-label="loading"
                aria-disabled={this.state.reqdisabled}
              />
              <span>登录</span>
            </button>
          </div>
          {this.props.option.show &&
          <div className="login-path">
            <span className="login-path-reg">
              没有帐号？<a target="_blank" href={this.props.option.regPage}>注册</a>
            </span>
            <Link className="login-path-log" target="_blank"
                  to={this.props.option.reset}>忘记密码？</Link>
          </div>
          }
        </form>
      </div>
    );
  }

  required(event) {
    var tag = event.target,
      name = tag.name,
      text = "";
    if (this.refs[name].value.replace(/(^\s*)|(\s*$)/g, "") == "") {
      text = tag.getAttribute("data-required");
    }
    this.setState({
      ['required' + name]: text
    });
  }

  submitBtn() {
    var username = this.refs.username.value,
      password = this.refs.password.value,
      _this = this;
    if (username != "" && password != "") {
      _this.setState({
        systemMessages: '',
        reqdisabled: true
      });
    Api.login({
        name: username,
        password: password,
      })
        .then(function (res) {
          var code = res.data.code,
            text = "";
          switch (code) {
            case "SUCCESS":
              text = "";
              _this.props.loginScuessCall(res.data);
              break;
            default:
              text = res.data.message;
          }
          if (_this._isMounted) {
            _this.setState({
              systemMessages: text,
              reqdisabled: false
            });
          }
        })
        .catch(rsp => {
          if (this._isMounted) {
            this.setState({
              systemMessages: rsp.message || "服务端异常",
              reqdisabled: false
            });
          }
        });
    } else {
      this.setState({
        'requiredusername': !username ? "请输入用户名/手机号！" : "",
        'requiredpassword': !password ? "请输入密码！" : ""
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default Login;

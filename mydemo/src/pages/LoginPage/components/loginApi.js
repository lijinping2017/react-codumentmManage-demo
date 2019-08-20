import axios from 'axios';
var bosapp=window.bosapp||{};
var Api =window.Api||{};
var apiHash=bosapp.baseUrl;
const baseUrl=bosapp.baseUrl;
const appKey = bosapp.appKey;

/**
 * 登录  业务API#1.0.39（4.8.15）
 * @method login
 * @param {Object} data like {"code":"", #code可为用户名或手机号,"password":""}
 * @return {Promise}
 */
Api.login = (data)=>{
    var formData = new FormData();
    formData.append("name",data.name);
    formData.append("password",data.password);
    return axios({
      method: 'post',
      url: `${baseUrl}/bospersonnelservice/${appKey}/users/login`,
      headers: {'Accept':'*/*','Content-Type':'multipart/form-data'},
      data: formData,
    });
}
/**
 * 通过手机号/邮箱重置密码  业务API#1.0.39（4.8.22）
 * @method resetPassword
 * @param {Object} data
 * @param {'telephone' | 'email'} data.idenType - 识别码类型
 * @param {string} data.identifier - 识别码
 * @param {string} data.validateCode - 验证码
 * @param {string} data.newPassword - 新密码
 * @return {Promise}
 */
 Api.resetPassword = (data)=>{
    var formData = new FormData();
    formData.append("idenType",data.idenType);
    formData.append("identifier",data.identifier);
   formData.append("validateCode",data.validateCode);
    formData.append("newPassword",data.newPassword);
    //return request('post', `${baseUrl}/bospersonnelservice/${appKey}/users/resetPassword`, formData,{headers: {'Accept':'*/*','Content-Type':'multipart/form-data'},timeout:0})
}

/**
 * 验证用户名/手机/邮箱是否存在  业务API#1.0.39（4.8.26）
 * @method checkUnique
 * @param {Object} data like {"checkType ":"XXX","value":"YYY"}
 * @return {Promise}
 */
 Api.checkUnique = (data)=>{
    //return request('get', `${baseUrl}/bospersonnelservice/${appKey}/users/check?checkType=`+data.checkType+"&value="+data.value);
}

/**
 * 验证用户名和手机是否存在
 * @method checkUnique
 * @param {Object} data like {"checkType ":"XXX","value":"YYY"}
 * @return {Promise}
 */
 Api.checkUserPhone = (name,phone)=>{
  function getUser(data){
    //return request('get', `${baseUrl}/bospersonnelservice/${appKey}/users/check?checkType=`+data.checkType+"&value="+data.value)
  }
  console.log("axios.all:",axios.all)
  return axios.all([getUser(name),getUser(phone)]).then(axios.spread(function(acc,pers){
      return arguments;
  }));
}

/**
 * 校验验证码  业务API#1.0.39（4.8.24）
 * @method sendVerificationCode
 * @param {Object} data like {"validateType":"","receiver":""}
 * @return {Promise}
 */
Api.checkValidateCode = (data)=>{
  var formData = new FormData();
  formData.append("validateCode",data.validateCode);
  formData.append("receiver",data.receiver);
  //return request('post', `${baseUrl}/bospersonnelservice/${appKey}/users/check/validateCode`,formData,{headers: {'Accept':'*/*','Content-Type':'multipart/form-data'},timeout:0});
}
/**
 * 发送手机/邮箱验证码  业务API#1.0.39（4.8.24）
 * @method sendVerificationCode
 * @param {Object} data like {"validateType":"","receiver":""}
 * @return {Promise}
 */
 Api.validateCode = (data)=>{
  var formData = new FormData();
  formData.append("validateType",data.validateType);
  formData.append("receiver",data.receiver);
  //return request('post', `${baseUrl}/bospersonnelservice/${appKey}/users/validateCode`,formData,{headers: {'Accept':'*/*','Content-Type':'multipart/form-data'},timeout:0});
}
/**
 * 注册  创建单个用户并登录  业务API#1.0.39（4.8.13）
 * @method register
 * @param {Object} data like {"bosclass":"users","code":"xxx","password":"","fullName":"","email":"",#可选"telephone":""}
 * @return {Promise}
 */
 Api.single = (data)=>{
  //return request('post', `${baseUrl}/bospersonnelservice/${appKey}/users/regist`,data);
}
/**
 * 获取指定key的用户信息 业务API#1.0.39（4.8.16）
 * @method getUser
 * @return {Promise}
 */
Api.getUser = ()=>{
  //return request('get', `${baseUrl}/bospersonnelservice/${appKey}/users/currentUser`);
}


/**
 * 修改用户信息 业务API#1.0.39（4.8.17）
 * @method updateUser
 * @param {Object} data like {name:"",email:"",telephone:"",userType:0}
 * @return {Promise}
 */
Api.updateUser = (data)=>{
  //return request('put', `${baseUrl}/bospersonnelservice/${appKey}/users/currentUser`,data);
}

/**
 * 修改指定用户的登录密码 业务API#1.0.39（4.8.21）
 * @method changePassword
 * @param {Object} data like {"oldPassword":"","newPassword":""}
 * @return {Promise}
 */
Api.changePassword = (data)=>{
  var formData = new FormData();
  formData.append("newPassword",data.newPassword);
  formData.append("oldPassword",data.oldPassword);
  //return request('post', `${baseUrl}/bospersonnelservice/${appKey}/users/update/password`,formData,{headers: {'Accept':'*/*','Content-Type':'multipart/form-data'},timeout:0});
}

/**
 * 检验指定用户的登录密码 业务API#1.0.39（4.8.23）
 * @method checkOldPassword
 * @param {Object} data like {"password":""}
 * @return {Promise}
 */


export default Api;

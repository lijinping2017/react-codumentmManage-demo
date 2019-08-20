import { combineReducers } from 'redux';

import * as homeReducer from './pages/Home/reducers';



// 通过一系列异步加载来创建总reducers
export default combineReducers({
	...homeReducer
});




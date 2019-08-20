import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import 'antd/dist/antd.css';

import store from "./store";
import routeConfig from './routers';


ReactDOM.render(
	<Provider store={store}>
		<Router>
			{
				routeConfig.map((value,key)=>{
					if(value.exact) {
						return <Route key={key} exact path={value.path} 
						render={(props)=>(
							<value.component {...props} routes={value.childRoutes} />
						)}

						/>
					}else{
						return <Route key={key} path={value.path} 
						render={(props)=>(
							<value.component {...props} routes={value.childRoutes} />
						)}

						/>
					}
				})
			}
		</Router>
	</Provider>, 
	document.getElementById('root')
);


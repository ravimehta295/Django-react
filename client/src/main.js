import React from 'react';
import ReactDOM from 'react-dom';

import './sass/main.scss';

// import components
import Home from './home';
import Search from './search';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const route = (
	<Router>
	<div>
	  <Switch>
	    <Route exact path="/" component={Home}/>
	    <Route exact path="/search" component={Search}/>
			<Route exact path="/login" />
			<Route exact path="/signup"/>
			<Route exact path="/logout" />
	   </Switch>
	 </div>
	</Router>
);

ReactDOM.render(
  route,
	document.getElementById('root')
);

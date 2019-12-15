import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// All Pages
import Home from './page/Home/Home';
import About from './page/About/About';
import Team from './page/Team/Team';


export default (
	<Router>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/about' component={About} />
			<Route exact path='/team' component={Team} />
		</Switch>
	</Router>
);

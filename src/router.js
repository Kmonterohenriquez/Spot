import React from 'react';
import { Switch, Route } from 'react-router-dom';

// All Pages
import Home from './page/Home';
import About from './page/About';
import TeamPage from './page/Team';
import ServicesPage from './page/Services';
import Blog from './page/Blog'

export default (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route exact path='/about' component={About} />
		<Route exact path='/team' component={TeamPage} />
		<Route exact path='/services' component={ServicesPage} />
		<Route exact path='/blog' component={Blog} />
	</Switch>
);

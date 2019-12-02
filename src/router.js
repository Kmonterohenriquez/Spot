import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// All Pages
import Home from './page/Home/Home';

export default (
	<Router>
		<Switch>
			<Route exact path='/' component={Home} />
		</Switch>
	</Router>
);

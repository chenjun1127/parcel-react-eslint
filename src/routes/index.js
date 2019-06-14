import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../views/home/Home';
import RouterViews from '../views/basic-router/Index';
import NotFound from '../views/404/NotFound';
import Menu from '../components/Menu';
const Routes = () => (
	<Router>
		<Menu />
		<Switch>
			<Route path="/home" component={Home} />
			<Route path="/router" component={RouterViews} />
			<Redirect path="/" exact to="/home/context" />
			<Route component={NotFound} />
		</Switch>
	</Router>
);
export default Routes;

import React from 'react';
import NotFoundPage from '../components/NotFoundPage';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from '../components/HomePage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={HomePage}/>
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
)

export default AppRouter;
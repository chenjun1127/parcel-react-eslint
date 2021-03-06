import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Styles from '../../assets/css/main';
const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true;
		setTimeout(cb, 100); // fake async
	},
	signout(cb) {
		this.isAuthenticated = false;
		setTimeout(cb, 100);
	}
};

const Public = () => {
	return <div>Public</div>;
};
const Protected = () => {
	return <div>Protected</div>;
};
const AuthButton = withRouter(({ history }) =>
	fakeAuth.isAuthenticated ? (
		<p>
			Welcome!{' '}
			<button
				onClick={() => {
					fakeAuth.signout(() => history.push('/router/auth'));
				}}
			>
				Sign out
			</button>
		</p>
	) : (
		<p>You are not logged in.</p>
	)
);

class Login extends Component {
	state = { redirectToReferrer: false };

	login = () => {
		fakeAuth.authenticate(() => {
			this.setState({ redirectToReferrer: true });
		});
	};
	render() {
		let { from } = this.props.location.state || { from: { pathname: '/routr/auth/protected' } };
		let { redirectToReferrer } = this.state;
		if (redirectToReferrer) return <Redirect to={from} />;
		return (
			<div>
				<p>You must log in to view the page at /protected</p>
				<button onClick={this.login}>Log in</button>
			</div>
		);
	}
}

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				fakeAuth.isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/router/auth/login',
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
};
export default class Auth extends Component {
	render() {
		return (
			<Router>
				<div className={Styles.authinner}>
					<AuthButton />
					<ul>
						<li>
							<Link to="/router/auth/public">Public Page</Link>
						</li>
						<li>
							<Link to="/router/auth/protected">Protected Page</Link>
						</li>
					</ul>
					<Route path="/router/auth/public" component={Public} />
					<Route path="/router/auth/login" component={Login} />
					<PrivateRoute path="/router/auth/protected" component={Protected} />
				</div>
			</Router>
		);
	}
}

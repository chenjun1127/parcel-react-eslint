import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Basic from '../basic-router/Basic';
import NotFound from '../404/NotFound';
import styles from '../../assets/css/main';

export default class Index extends Component {
	static defaultProps = {
		links: [
			{
				name: 'Basic',
				path: '/router/basic',
				component: Basic
			}
		]
	};
	static propTypes = {
		links: PropTypes.array
	};
	render() {
		return (
			<div className={styles.container}>
				<Header name="React 基本路由相关" />
				<div className={styles.inner}>
					<div className={styles.left}>
						{this.props.links.map((item, index) => (
							<Link key={index} to={item.path} className={this.props.location.pathname === item.path ? styles.activeColor : ''}>
								{item.name}
							</Link>
						))}
					</div>
					<div className={styles.right}>
						<Switch>
							{/* <Route exact path="/router" component={Basic} /> */}
							<Route path="/router/basic" component={Basic} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

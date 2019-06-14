import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Hoc from './Hoc';
import Context from './Context';
import Fragments from './Fragments';
import Hooks from './Hooks';
import NotFound from '../404/NotFound';
import Header from '../../components/Header';
import Styles from '../../assets/css/main';

export default class Home extends React.Component {
	static defaultProps = {
		links: [
			{
				name: 'Context',
				path: '/home/context',
				component: Context
			},
			{
				name: 'Fragments',
				path: '/home/fragments',
				component: Fragments
			},
			{
				name: 'Hoc',
				path: '/home/hoc',
				component: Hoc
			},
			{
				name: 'Hooks',
				path: '/home/hooks',
				component: Hooks
			}
		]
	};
	static propTypes = {
		links: PropTypes.array
	};
	render() {
		return (
			<div className={Styles.container}>
				<Header name="React一些比较高级的东西" />
				<div className={Styles.inner}>
					<div className={Styles.left}>
						{this.props.links.map((item, index) => (
							<Link key={index} to={item.path} className={this.props.location.pathname === item.path ? Styles.activeColor : ''}>
								{item.name}
							</Link>
						))}
					</div>
					<div className={Styles.right}>
						<Switch>
							{/* <Route exact path="/home" component={Context} /> */}
							<Route path="/home/context" component={Context} />
							<Route path="/home/fragments" component={Fragments} />
							<Route path="/home/hoc" component={Hoc} />
							<Route path="/home/hooks" component={Hooks} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

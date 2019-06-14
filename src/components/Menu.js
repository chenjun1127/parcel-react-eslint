import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../assets/css/main';

class Menu extends Component {
	static defaultProps = {
		menu: [
			{
				name: 'Home',
				path: '/home/context',
				icon: 'icon-zhuye'
			},
			{
				name: 'Basic-router',
				path: '/router/basic',
				icon: 'icon-daohang'
			}
		]
	};
	static propTypes = {
		menu: PropTypes.array
	};
	state = {
		isShow: true
	};
	toggleMenu = () => {
		this.setState({ isShow: !this.state.isShow });
	};
	render() {
		return (
			<div className={styles.menu} style={{ width: this.state.isShow ? '200px' : '50px' }}>
				<div className={styles.menubar}>
					<span onClick={this.toggleMenu}>
						<em />
					</span>
				</div>
				<ul className={styles.menulist}>
					{this.props.menu.map((item, index) => (
						<li key={index}>
							<Link to={item.path} className={new RegExp(item.path.split('/')[1]).test(this.props.location.pathname) ? styles.acitve : ''}>
								<span>
									<svg className="icon" aria-hidden="true">
										<use xlinkHref={`#${item.icon}`} />
									</svg>
								</span>
								<em className={this.state.isShow ? styles.visible : ''}>{item.name}</em>
							</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default withRouter(Menu);

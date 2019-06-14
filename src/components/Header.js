import React from 'react';
import styles from '../assets/css/main';
export default class Header extends React.Component {
	render() {
		return <div className={styles.header}>{this.props.name}</div>;
	}
}

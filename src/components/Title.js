import React from 'react';
const styles = {
	width: '100%',
	fontSize: '16px',
	padding: '12px 0',
	fontWeight: 'bold',
	borderBottom: '1px solid #d9d9d9',
	marginBottom: '12px'
};

const Title = ({ style, title }) => {
	return <h1 style={style ? style : styles}>{title}</h1>;
};

export default Title;

import React, { useState, useEffect } from 'react';

const FloatingNotification = ({ message, type }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
		const timer = setTimeout(() => {
			setShow(false);
		}, 5000);
		return () => clearTimeout(timer);
	}, []);

	const styles = {
		position: 'fixed',
		top: '10px',
		right: '10px',
		padding: '10px',
		borderRadius: '5px',
		boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
		display: show ? 'block' : 'none',
		color: type === 'success' ? '#a3a969' : '#ccd6e6',
		backgroundColor: type === 'success' ? '#6667ab' : '#8b0000',
	};

	return (
		<div style={styles}>
			{message}
		</div>
	);
};

export default FloatingNotification;

import React from 'react';

const IPBlockMessage = () => {
	return (
		<div
			style={{
				height: '100vh',
				width: '100vw',
				top: '0',
				left: '0',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<h2 style={{ color: '#ffffff', margin: '0', padding: '0 30px' }}>
				TYMIO is not available to people or companies who are residents of, or
				are located, incorporated or have a registered agent in a blocked
				country or a restricted territory.
			</h2>
		</div>
	);
};

export default IPBlockMessage;

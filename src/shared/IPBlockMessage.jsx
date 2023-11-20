import React from 'react';
import { Card } from '../components/_DEPRECATED';

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
			<Card width={'600px'} style={{ margin: '8px' }}>
				<h2
					style={{
						color: 'rgb(201, 230, 140)',
						margin: '0',
						padding: '0 30px',
					}}>
					TYMIO is not available to people or companies who are residents of, or
					are located, incorporated or have a registered agent in a blocked
					country or a restricted territory.
				</h2>
			</Card>
		</div>
	);
};

export default IPBlockMessage;

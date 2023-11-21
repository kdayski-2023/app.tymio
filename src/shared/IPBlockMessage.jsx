import React from 'react';
import { Card } from '../components/_DEPRECATED';
import Animation from '../components/Animation/Animation';
import * as Styled from './styled';

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
					}}>
					<Styled.Desktop>
						<Animation type={'text'}>
							TYMIO is not available to people or companies who
						</Animation>
						<br />
						<Animation type={'text'} delay={1}>
							are residents of, or are located, incorporated or have
						</Animation>
						<br />
						<Animation type={'text'} delay={2}>
							a registered agent in a blocked country or a
						</Animation>
						<br />
						<Animation type={'text'} delay={3}>
							restricted territory.
						</Animation>
					</Styled.Desktop>

					<Styled.Mobile>
						<Animation type={'text'}>TYMIO is not available to</Animation>
						<br />
						<Animation type={'text'} delay={0.5}>
							people or companies who are
						</Animation>
						<br />
						<Animation type={'text'} delay={1}>
							residents of, or are located,
						</Animation>
						<br />
						<Animation type={'text'} delay={1.5}>
							incorporated or have a
						</Animation>
						<br />
						<Animation type={'text'} delay={2}>
							registered agent in a blocked
						</Animation>
						<br />
						<Animation type={'text'} delay={2.5}>
							country or a restricted territory.
						</Animation>
					</Styled.Mobile>
				</h2>
			</Card>
		</div>
	);
};

export default IPBlockMessage;

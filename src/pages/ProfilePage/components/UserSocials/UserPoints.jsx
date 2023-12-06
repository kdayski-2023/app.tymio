import React from 'react';

import * as Styled from './styled';

import { useUserPoints } from '../../hooks';
import { Card, LoadingSpinner } from '../../../../components/_DEPRECATED';
import * as TymioUI from '../../../../components';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';

const UserPoints = ({ points }) => {
	const conditions = [
		'Wallet connected = 5 points',
		'First tx = 10 points',
		'Amount earned = 1:1 points',
		'Time on platform = every day when funds locked 1 point',
		'Referral amount earned = 1:5',
	];
	const { loading } = useUserPoints();

	return (
		<Card gap={'30px'} xsPadding={'30px 20px'}>
			{loading && <LoadingSpinner />}
			{!loading && (
				<>
					<Card.Header
						display={'flex'}
						justify={'space-between'}
						alignItems={'flex-start'}
						xsDirection={'column'}
						gap={'20px'}>
						<TymioUI.H2 lh={'100%'}> </TymioUI.H2>
						<Styled.AirdropBadge>
							<TymioUI.Typography>POINTS:</TymioUI.Typography>
							<TymioUI.Typography>{points.toFixed(0)}</TymioUI.Typography>
						</Styled.AirdropBadge>
					</Card.Header>
					<TymioUI.Typography>ACTIVITIES:</TymioUI.Typography>
					<Card.Body>
						<Styled.Conditions mt={'0'} gap={'30px'}>
							{conditions.map((condition, index) => (
								<Styled.Condition key={index}>
									<Styled.Number>
										<TymioUI.Typography
											size={TYPOGRAPHY_SIZE.SMALL}
											lh={'100%'}>
											{index + 1}
										</TymioUI.Typography>
									</Styled.Number>
									<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG}>
										{condition}
									</TymioUI.Typography>
								</Styled.Condition>
							))}
						</Styled.Conditions>
					</Card.Body>
				</>
			)}
		</Card>
	);
};

export default UserPoints;

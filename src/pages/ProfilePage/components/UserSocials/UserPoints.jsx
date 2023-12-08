import React from 'react';

import * as Styled from './styled';

import { useUserPoints } from '../../hooks';
import { Card, LoadingSpinner } from '../../../../components/_DEPRECATED';
import * as TymioUI from '../../../../components';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import { COLORS } from '../../../../models/colors';

const UserPoints = ({ points }) => {
	const conditions = [
		'Connect wallet',
		'First transaction',
		'Amount earned on platform',
		'Time on platform',
		'Referrals amount earned',
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
						gap={'20px'}>
						<Styled.PointsCountBadge>
							<TymioUI.H2 lh={'100%'} color={COLORS.RICH_PURPLE}>
								{points ? points.toFixed(0) : 0}
							</TymioUI.H2>
						</Styled.PointsCountBadge>
						<Styled.PointsBadge>
							<TymioUI.Typography align={'center'} uppercase>
								Points
							</TymioUI.Typography>
						</Styled.PointsBadge>
					</Card.Header>
					<TymioUI.Typography uppercase style={{ marginTop: '30px' }}>
						Activities to get points:
					</TymioUI.Typography>
					<Card.Body>
						<Styled.Conditions mt={'0'} gap={'10px'}>
							{conditions.map((condition, index) => (
								<Styled.PointsCondition key={index}>
									<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG}>
										{condition}
									</TymioUI.Typography>
								</Styled.PointsCondition>
							))}
						</Styled.Conditions>
					</Card.Body>
				</>
			)}
		</Card>
	);
};

export default UserPoints;

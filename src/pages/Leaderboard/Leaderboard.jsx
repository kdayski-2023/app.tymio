import React, { useState } from 'react';

import * as Styled from './styled';
import * as TymioUI from '../../components';
import { Card } from '../../components/_DEPRECATED';
import { Table } from './components/Table';
import Star from '../../components/Icons/StarTable/StarTable';

const Leaderboard = () => {
	const directionOptions = ['WEEK', 'MONTH', 'ALL TIME'];
	const [selectedDirection, setSelectedDirection] = useState('WEEK');

	const fakeData = [
		{
			rank: 1,
			wallet: '0xBEE...378a',
			earned: '$100',
			orders: '100 (98%)',
			isUser: false,
			public: false,
		},
		{
			rank: 2,
			wallet: '0xABC...1234',
			earned: '$80',
			orders: '90 (95%)',
			isUser: false,
			public: false,
		},
		{
			rank: 3,
			wallet: '0xBEE...378a',
			earned: '$100',
			orders: '100 (98%)',
			isUser: false,
			public: false,
		},
		{
			rank: 4,
			wallet: '0xABC...1234',
			earned: '$80',
			orders: '90 (95%)',
			isUser: false,
			public: false,
		},
		{
			rank: 5,
			wallet: '0xBEE...378a',
			earned: '$100',
			orders: '100 (98%)',
			isUser: false,
			public: false,
		},
		{
			rank: 6,
			wallet: '0xABC...1234',
			earned: '$80',
			orders: '90 (95%)',
			isUser: true,
			public: true,
		},
		{
			rank: 7,
			wallet: '0xBEE...378a',
			earned: '$100',
			orders: '100 (98%)',
			isUser: false,
			public: false,
		},
		{
			rank: 8,
			wallet: '0xABC...1234',
			earned: '$80',
			orders: '90 (95%)',
			isUser: false,
			public: false,
		},
		{
			rank: 9,
			wallet: '0xABC...1234',
			earned: '$80',
			orders: '90 (95%)',
			isUser: false,
			public: false,
		},

		{
			rank: 10,
			wallet: '0xDEF...5678',
			earned: '$40',
			orders: '50 (85%)',
			isUser: false,
			public: false,
		},
	];

	return (
		<Styled.Leaderboard>
			<Styled.Title>
				<TymioUI.H1>LEADERBOARD</TymioUI.H1>
				<TymioUI.H2>Top-10 wallets with the highest earnings.</TymioUI.H2>
			</Styled.Title>
			<Styled.Container>
				<Card
					padding={'30px'}
					height={'100%'}
					// mh={365}
					gap={'60px'}
					flex={true}>
					<Styled.SwitcherWrapper>
						<TymioUI.Switcher>
							{directionOptions.map((option, index) => (
								<TymioUI.Switcher.Option
									key={index}
									// active={option === formik.values.direction}
									// onClick={() => handleSwitch(option)}
									// disabled={orderLoading || periodsLoading || priceLoading}
									active={option === selectedDirection}
									onClick={() => setSelectedDirection(option)}>
									<TymioUI.Typography uppercase>{option}</TymioUI.Typography>
								</TymioUI.Switcher.Option>
							))}
						</TymioUI.Switcher>
					</Styled.SwitcherWrapper>
					<Table padding={'0'} color={'inherit'}>
						<Table.Head>
							<Table.Head.Tr grid_template_columns={'1fr 2.5fr 1.5fr 1fr'}>
								<Table.Th align={'left'}>Rank</Table.Th>
								<Table.Th align={'left'}>Wallet</Table.Th>
								<Table.Th align={'left'}>Earned</Table.Th>
								<Table.Th align={'left'}>
									<TymioUI.Tooltip icon={true} text={'?'}>
										<TymioUI.Typography size={'small'} color="PURPLE_GRAY">
											Orders
										</TymioUI.Typography>
									</TymioUI.Tooltip>
								</Table.Th>
							</Table.Head.Tr>
						</Table.Head>
						<Table.Body hr>
							{fakeData.map((data, index) => (
								<Table.Tr
									key={index}
									user={data.isUser}
									grid_template_columns={'1fr 2.5fr 1.5fr 1fr'}>
									<Table.Td align={'left'}>
										<Styled.Wrapper>
											<span>{data.rank}</span> <Star />
											{data.isUser && <Styled.UserBadge>You</Styled.UserBadge>}
										</Styled.Wrapper>
									</Table.Td>
									<Table.Td align={'left'} mono>
										{data.wallet}
										{data.public && (
											<Styled.WrapperBadge>
												<TymioUI.Tooltip
													icon={true}
													text={'?'}
													swapPosition
													gap="3px"
													secondary>
													<TymioUI.Typography size={'small'} color="BLACK">
														Club
													</TymioUI.Typography>
												</TymioUI.Tooltip>
											</Styled.WrapperBadge>
										)}
									</Table.Td>
									<Table.Td align={'left'}>{data.earned}</Table.Td>
									<Table.Td align={'left'}>{data.orders}</Table.Td>
								</Table.Tr>
							))}
						</Table.Body>
					</Table>
				</Card>
			</Styled.Container>
		</Styled.Leaderboard>
	);
};

export default Leaderboard;

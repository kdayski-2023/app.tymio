import React, { useEffect, useState } from 'react';

import * as Styled from './styled';
import * as TymioUI from '../../components';
import { Card, LoadingSpinner, Message } from '../../components/_DEPRECATED';
import { Table } from './components/Table';
import Star from '../../components/Icons/StarTable/StarTable';
import { COLORS } from '../../models/colors';
import useLeaderboard from './hooks/useLeaderboard';
import LeaderboardService from '../../services/leaderboard.service';
import { useWallet } from '../../hooks';
import { spliceAddress } from '../../lib/lib';
import { TYPOGRAPHY_SIZE } from '../../models/types';

const Leaderboard = () => {
	const { userAddress } = useWallet();
	const directionOptions = [
		{ title: 'WEEK', grow: false },
		{ title: 'MONTH', grow: false },
		{ title: 'ALL TIME', grow: true },
	];
	const [selectedDirection, setSelectedDirection] = useState('WEEK');

	const { leaderboard, loading, error } = useLeaderboard();

	useEffect(() => {
		LeaderboardService.getData(selectedDirection);
	}, [selectedDirection]);

	const handleSwitch = (option) => {
		setSelectedDirection(option.title);
	};

	return (
		<Styled.Leaderboard>
			<Styled.Container>
				<Card
					padding={'30px'}
					height={'100%'}
					gap={'30px'}
					xsPadding={'30px 15px'}
					flex={true}>
					<Styled.Title>
						<TymioUI.H2>The highest earning wallets</TymioUI.H2>
						{/* <TymioUI.Typography size={'big'}></TymioUI.Typography> */}
					</Styled.Title>
					<Styled.SwitcherWrapper>
						<TymioUI.Switcher>
							{directionOptions.map((option, index) => (
								<TymioUI.Switcher.Option
									key={index}
									onClick={() => handleSwitch(option)}
									disabled={loading}
									grow={option.grow}
									active={option.title === selectedDirection}>
									<TymioUI.Typography uppercase>
										{option.title}
									</TymioUI.Typography>
								</TymioUI.Switcher.Option>
							))}
						</TymioUI.Switcher>
					</Styled.SwitcherWrapper>
					<Table padding={'0'} color={'inherit'}>
						<Table.Head>
							<Table.Head.Tr
								grid_template_columns={'1fr 2.5fr 1.5fr 1fr'}
								mobile_grid_template_columns={'1fr 2.5fr 1.5fr 1.5fr'}>
								<Table.Th align={'left'}>Rank</Table.Th>
								<Table.Th align={'left'}>Wallet</Table.Th>
								<Table.Th align={'left'}>Earned</Table.Th>
								<Table.Th align={'left'}>
									<TymioUI.Tooltip
										icon={true}
										text={'Total orders (percentage of executed)'}
										position={'right'}
										style={{ width: '200px' }}>
										<TymioUI.Typography size={'small'} color="PURPLE_GRAY">
											Orders
										</TymioUI.Typography>
									</TymioUI.Tooltip>
								</Table.Th>
							</Table.Head.Tr>
						</Table.Head>
						<Table.Body hr loading={loading || leaderboard.length === 0}>
							{loading && <LoadingSpinner margin={'auto'} />}
							{error && <Message message={error} />}
							{!loading && !error && (
								<>
									{leaderboard.length ? (
										leaderboard.map((data, index) => (
											<Table.Tr
												key={index}
												user={
													userAddress.toLocaleLowerCase() ===
													data.address.toLocaleLowerCase()
												}
												grid_template_columns={'1fr 2.5fr 1.5fr 1fr'}
												mobile_grid_template_columns={'1fr 2.5fr 1.5fr 1.5fr'}>
												<Table.Td align={'left'} position={'relative'} adaptive>
													<Styled.Wrapper>
														<span>{index + 1}</span> {index < 3 && <Star />}
														{userAddress.toLocaleLowerCase() ===
															data.address.toLocaleLowerCase() && (
															<Styled.UserBadge>You</Styled.UserBadge>
														)}
													</Styled.Wrapper>
												</Table.Td>
												<Table.Td
													align={'left'}
													mono
													position={'relative'}
													adaptive>
													{spliceAddress(data.address)}
													{data.club_member && (
														<Styled.WrapperBadge>
															<TymioUI.Tooltip
																icon={true}
																text={
																	'Enjoy increased ARP rate as a TYMIO club member'
																}
																swapPosition
																gap="3px"
																secondary
																position={'right'}
																style={{ width: '185px' }}>
																<Styled.ShowDesktop>
																	<TymioUI.Typography
																		size={'small'}
																		color="BLACK">
																		Club
																	</TymioUI.Typography>
																</Styled.ShowDesktop>
															</TymioUI.Tooltip>
														</Styled.WrapperBadge>
													)}
												</Table.Td>
												<Table.Td align={'left'} adaptive>
													${data.earned.toFixed(0)}
												</Table.Td>
												<Table.Td align={'left'} adaptive>
													{data.count}{' '}
													<span style={{ color: COLORS.GRAY }}>
														({Math.round((100 / data.count) * data.executed)}%)
													</span>
												</Table.Td>
											</Table.Tr>
										))
									) : (
										<TymioUI.Typography
											size={TYPOGRAPHY_SIZE.BIG}
											color={COLORS.WARNINGS}
											style={{ textAlign: 'center', margin: 'auto' }}>
											No data yet.
										</TymioUI.Typography>
									)}
								</>
							)}
						</Table.Body>
					</Table>
				</Card>
			</Styled.Container>
		</Styled.Leaderboard>
	);
};

export default Leaderboard;

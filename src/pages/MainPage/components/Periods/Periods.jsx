import React, { useEffect, useRef, useState } from 'react';

import { useFocus, useWallet } from '../../../../hooks';
import * as Hook from '../../hooks';
import * as Styled from './styled';
import {
	Card,
	Grid,
	GridElem,
	LoadingSpinner,
	Message,
	Button,
} from '../../../../components/_DEPRECATED';
import { CardBadge, CautionLabel, Label } from '../../styled';
import * as TymioUI from '../../../../components';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import { COLORS } from '../../../../models/colors';

const Periods = ({
	formik,
	loading: orderLoading,
	amountFocused,
	price,
	amount,
}) => {
	const ref = useRef();
	useFocus(orderLoading, ref);
	const { connected } = useWallet();
	const { error, loading, periods } = Hook.usePeriods();
	const [earnPercent, setEarnPercent] = useState(0);

	useEffect(() => {
		setEarnPercent(0);
	}, [formik.values.price]);

	const chosePeriod = (period) => {
		formik.setFieldValue('period', period.timestamp);
		setEarnPercent(period.earnPercent);
	};

	const showPeriod = price && parseFloat(amount) > 0 ? true : false;

	return (
		<>
			<Card height={'100%'} mh={365} gap={'0'} pt={'27px'} flex={true}>
				{loading && <LoadingSpinner />}

				{error && <Message message={error} />}

				{!loading && !error && !showPeriod && (
					<>
						<Card.Header>
							<TymioUI.Typography
								size={TYPOGRAPHY_SIZE.BIG}
								color={COLORS.LEMON}
								style={{ textAlign: 'left' }}>
								Select the price to see the offers here. Connect your wallet to
								make a final transaction.
							</TymioUI.Typography>
						</Card.Header>
						<Card.Body>
							{!connected && <TymioUI.WalletConnectButton />}
						</Card.Body>
					</>
				)}

				{!loading && !error && showPeriod && (
					<>
						<Card.Header>
							<Grid columns={3} rows={1}>
								<GridElem textAlign={'left'} column={1} inline>
									<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL}>
										Time
									</TymioUI.Typography>
								</GridElem>
								<GridElem textAlign={'center'} column={2} inline>
									<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL}>
										APR
									</TymioUI.Typography>
								</GridElem>
								<GridElem textAlign={'right'} column={3} inline>
									<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL}>
										You earn
									</TymioUI.Typography>
								</GridElem>
							</Grid>
						</Card.Header>
						<Card.Body mt={'16px'}>
							{periods.map((period, index) => (
								<React.Fragment key={index}>
									{period.recieve && period.apr ? (
										<Button
											disabled={orderLoading || amountFocused}
											ref={ref}
											key={index}
											type="button"
											active={
												formik.values.period === period.timestamp
													? 'true'
													: undefined
											}
											onClick={() => chosePeriod(period)}>
											<Grid columns={3} rows={1}>
												<GridElem textAlign={'left'} column={1} inline>
													<TymioUI.Typography lh={'100%'}>
														{period.title}
													</TymioUI.Typography>
												</GridElem>
												<GridElem textAlign={'center'} column={2}>
													<TymioUI.Typography lh={'100%'}>
														{period.apr}%
													</TymioUI.Typography>
												</GridElem>
												<GridElem textAlign={'right'} column={3} inline>
													<TymioUI.Typography lh={'100%'}>
														${Math.floor(parseFloat(period.recieve))}
													</TymioUI.Typography>
												</GridElem>
											</Grid>
										</Button>
									) : (
										<></>
									)}
								</React.Fragment>
							))}
							{!periods.filter((period) => period.recieve).length ? (
								<TymioUI.Typography
									size={TYPOGRAPHY_SIZE.BIG}
									color={COLORS.WARNINGS}
									style={{ textAlign: 'center' }}>
									No dates found.
									<br />
									Please select a different price.
								</TymioUI.Typography>
							) : (
								<></>
							)}
						</Card.Body>
						<Card.Footer mt={'20px'}>
							{periods.filter((period) => period.recieve).length ? (
								<CardBadge>
									{earnPercent ? (
										<>
											<TymioUI.Typography
												size={TYPOGRAPHY_SIZE.SMALL}
												color={COLORS.PURPLE_BRIGHT}>
												Earn
											</TymioUI.Typography>
											<TymioUI.Typography
												color={COLORS.PURPLE_BRIGHT}
												lh={'100%'}>
												{String(earnPercent).replace('.', ',')}%
											</TymioUI.Typography>
										</>
									) : (
										<TymioUI.Typography
											size={TYPOGRAPHY_SIZE.SMALL}
											color={COLORS.LEMON}>
											Select the period
										</TymioUI.Typography>
									)}
								</CardBadge>
							) : (
								<></>
							)}
						</Card.Footer>
					</>
				)}
			</Card>
		</>
	);
};

export default Periods;

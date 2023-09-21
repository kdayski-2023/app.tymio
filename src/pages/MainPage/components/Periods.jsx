import React, { useEffect, useRef, useState } from 'react';

import { useFocus, useWallet } from '../../../hooks';
import * as Hook from '../hooks';
import * as Styled from '../styled';
import {
	Card,
	Grid,
	GridElem,
	LoadingSpinner,
	Message,
	Button,
	TransitionArrow,
} from '../../../components/_DEPRECATED';

const Periods = ({
	formik,
	arrowDown,
	loading: orderLoading,
	amountFocused,
	unfilledFields,
	setUnfilledFields,
}) => {
	const ref = useRef();
	useFocus(orderLoading, ref);
	const { userAddress } = useWallet();
	const { error, loading, periods } = Hook.usePeriods();
	const [earnPercent, setEarnPercent] = useState(0);

	useEffect(() => {
		setEarnPercent(0);
	}, [formik.values.price]);

	useEffect(() => {
		formik.setFieldValue('period', 0);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userAddress]);

	const chosePeriod = (period) => {
		formik.setFieldValue('period', period.timestamp);
		setUnfilledFields(
			unfilledFields.filter((unfilled) => unfilled !== 'period'),
		);
		setEarnPercent(period.earnPercent);
	};

	return (
		<>
			<Card unfilled={unfilledFields.includes('period')}>
				<Card.Header>
					<Grid columns={3} rows={1}>
						<GridElem textAlign={'left'} column={1} inline>
							<Styled.Label>Time:</Styled.Label>
						</GridElem>
						<GridElem textAlign={'center'} column={2} inline>
							<Styled.Label>APR</Styled.Label>
						</GridElem>
						<GridElem textAlign={'right'} column={3} inline>
							<Styled.Label>You earn</Styled.Label>
						</GridElem>
					</Grid>
				</Card.Header>
				{loading && <LoadingSpinner />}

				{error && <Message message={error} />}

				{!loading && !error && (
					<Card.Body>
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
												<Styled.PeriodButtonText>
													{period.title}
												</Styled.PeriodButtonText>
											</GridElem>
											<GridElem textAlign={'center'} column={2}>
												{period.apr}%
											</GridElem>
											<GridElem textAlign={'right'} column={3} inline>
												<Styled.PeriodButtonText>
													{Math.floor(parseFloat(period.recieve))}$
												</Styled.PeriodButtonText>
											</GridElem>
										</Grid>
									</Button>
								) : (
									<></>
								)}
							</React.Fragment>
						))}
						{!periods.filter((period) => period.recieve).length ? (
							<Styled.CautionLabel align={'center'}>
								No dates found
							</Styled.CautionLabel>
						) : (
							<></>
						)}
					</Card.Body>
				)}
				{earnPercent ? (
					<Card.Footer>
						<Styled.Label>Earn:</Styled.Label>
						<Styled.CautionLabel align={'right'}>
							{earnPercent} %
						</Styled.CautionLabel>
					</Card.Footer>
				) : null}
			</Card>
			{arrowDown && <TransitionArrow />}
		</>
	);
};

export default Periods;

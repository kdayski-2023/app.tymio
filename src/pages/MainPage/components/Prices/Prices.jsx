import React, { useRef } from 'react';

import { useFocus } from '../../../../hooks';
import * as Hook from '../../hooks';
import {
	Card,
	LoadingSpinner,
	Message,
	Button,
	Grid,
	GridElem,
	DollarIcon,
	TransitionArrow,
} from '../../../../components/_DEPRECATED';
import { Label, CautionLabel } from '../../styled';

const Prices = ({
	formik,
	arrowDown,
	loading: orderLoading,
	amountFocused,
	unfilledFields,
	setUnfilledFields,
}) => {
	const ref = useRef();
	const {
		error: priceError,
		loading: priceLoading,
		prices,
		currentPrice,
	} = Hook.usePrices();
	const { loading: periodsLoading } = Hook.usePeriods();
	useFocus(orderLoading || periodsLoading, ref);

	const chosePrice = async (e) => {
		await formik.setFieldValue('period', 0, true);
		await formik.setFieldValue('price', e, true);
		setUnfilledFields(
			unfilledFields.filter((unfilled) => unfilled !== 'price'),
		);
	};

	return (
		<>
			<Card unfilled={unfilledFields.includes('price')}>
				<Card.Header>Price:</Card.Header>
				<>
					{priceLoading && <LoadingSpinner />}
					{priceError && <Message message={priceError} />}
					{!priceLoading && !priceError && (
						<>
							<Card.Body>
								{prices.map((price, index) => (
									<Button
										disabled={orderLoading || periodsLoading || amountFocused}
										ref={ref}
										key={index}
										type="button"
										active={formik.values.price === price ? 'true' : undefined}
										onClick={() => chosePrice(price)}>
										<Grid columns={6} rows={1}>
											<GridElem offset={1} height={30} column={1} xsColumn={2}>
												<DollarIcon />
											</GridElem>
											<GridElem
												column={'span 4'}
												lgTextAlign={'right'}
												lgColumn={'span 3'}>
												{price} USDC
											</GridElem>
										</Grid>
									</Button>
								))}
							</Card.Body>
							<Card.Footer>
								<Label>Current price:</Label>
								<CautionLabel align={'right'}>$ {currentPrice}</CautionLabel>
							</Card.Footer>
						</>
					)}
				</>
			</Card>
			{arrowDown && <TransitionArrow />}
		</>
	);
};

export default Prices;

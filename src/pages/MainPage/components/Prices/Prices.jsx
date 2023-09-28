import React, { useRef } from 'react';

import { useFocus } from '../../../../hooks';
import * as Hook from '../../hooks';
import {
	Card,
	LoadingSpinner,
	Message,
	Button,
	TokenIcon,
} from '../../../../components/_DEPRECATED';
import { CardBadge } from '../../styled';
import * as TymioUI from '../../../../components';
import * as Styled from './styled';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import { COLORS } from '../../../../models/colors';

const Prices = ({
	formik,
	loading: orderLoading,
	amountFocused,
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
	};

	return (
		<>
			<Card
				height={'100%'}
				mh={365}
				gap={'0'}
				pt={'15px'}
				flex={true}>
				<Card.Header>
					<Styled.Price>
						<Styled.CurrencyBadge>
							<TokenIcon size={'xs'} token={'USDC'} />
							<TymioUI.Typography>USDC</TymioUI.Typography>
						</Styled.CurrencyBadge>
						<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL}>
							Price
						</TymioUI.Typography>
					</Styled.Price>
				</Card.Header>
				<>
					{priceLoading && <LoadingSpinner />}
					{priceError && <Message message={priceError} />}
					{!priceLoading && !priceError && (
						<>
							<Card.Body mt={'5px'}>
								{prices.map((price, index) => (
									<Button
										disabled={orderLoading || periodsLoading || amountFocused}
										ref={ref}
										key={index}
										type="button"
										active={formik.values.price === price ? 'true' : undefined}
										onClick={() => chosePrice(price)}>
										<TymioUI.Typography lh={'100%'}>{price}</TymioUI.Typography>
									</Button>
								))}
							</Card.Body>
							<Card.Footer mt={'20px'}>
								<CardBadge>
									<TymioUI.Typography
										size={TYPOGRAPHY_SIZE.SMALL}
										color={COLORS.PURPLE_BRIGHT}>
										Current price
									</TymioUI.Typography>
									<TymioUI.Typography color={COLORS.PURPLE_BRIGHT} lh={'100%'}>
										{currentPrice}
									</TymioUI.Typography>
								</CardBadge>
							</Card.Footer>
						</>
					)}
				</>
			</Card>
		</>
	);
};

export default Prices;

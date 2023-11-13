import React, { useState, useEffect } from 'react';

import * as Service from '../../../../services';
import * as Styled from './styled';
import * as Hook from '../../hooks';
import * as TymioUI from '../../../../components';
import ReferralList from './ReferralList';
import { Card, LoadingSpinner } from '../../../../components/_DEPRECATED';
import { BUTTON_TYPE, TYPOGRAPHY_SIZE } from '../../../../models/types';

const ReferralCode = ({ referral, referrals, totals, balance }) => {
	const { loading, error } = Hook.useReferral();
	const [copyText, setCopyText] = useState('COPY');
	let timeout;

	useEffect(() => {
		if (error) {
			Service.MessageDialogService.showError(error);
		}
	}, [error]);

	const copyHandler = (e, data) => {
		e.preventDefault();
		navigator.clipboard.writeText(data);
		setCopyText('COPIED');

		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			setCopyText('COPY');
		}, 2000);
	};

	return (
		<Card gap={'30px'} xsPadding={'30px 20px'}>
			<Card.Header>
				<TymioUI.H2>Referral program</TymioUI.H2>
			</Card.Header>
			<Styled.Conditions>
				<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG}>
					Earn 5% from the yield paid to wallets you have invited with personal
					referral link below. No time limits. Perpetual stream of passive
					income.
				</TymioUI.Typography>
			</Styled.Conditions>
			{loading && <LoadingSpinner margin={'auto'} />}
			{!loading && (
				<>
					<Styled.ProfileInputSheet mt={'0'}>
						<Styled.ProfileInput
							value={
								referral ? `${window.location.origin}/code/${referral}` : ''
							}
							type={'text'}
							placeholder={'sell-high.io/code/ed2da5'}
							disabled={true}
						/>
						<Styled.ProfileButton
							type={BUTTON_TYPE.SECONDARY}
							disabled={!referral}
							onClick={(e) =>
								copyHandler(e, `${window.location.origin}/code/${referral}`)
							}>
							{copyText}
						</Styled.ProfileButton>
					</Styled.ProfileInputSheet>

					{referrals && referrals.length ? (
						<Card.Footer>
							<ReferralList
								referrals={referrals}
								totals={totals}
								balance={balance}
							/>
						</Card.Footer>
					) : null}
				</>
			)}
		</Card>
	);
};

export default ReferralCode;

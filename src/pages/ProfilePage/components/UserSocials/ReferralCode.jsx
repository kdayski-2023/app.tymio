import React, { useState, useEffect } from 'react';

import * as Service from '../../../../services';
import * as Styled from '../../styled';
import * as Hook from '../../hooks';
import { Card, LoadingSpinner } from '../../../../components/_DEPRECATED';

const ReferralCode = ({ referral }) => {
	const { loading, error } = Hook.useReferral();
	const [copyText, setCopyText] = useState('Copy');
	let timeout;

	useEffect(() => {
		if (error) {
			Service.MessageDialogService.showError(error);
		}
	}, [error]);

	const copyHandler = (e, data) => {
		e.preventDefault();
		navigator.clipboard.writeText(data);
		setCopyText('Copied');

		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			setCopyText('Copy');
		}, 2000);
	};

	return (
		<>
			{loading && <LoadingSpinner />}
			{!loading && (
				<Card>
					<Card.Header>Referral program</Card.Header>
					<Styled.Conditions>
						<p>
							Earn 5% from the yield paid to wallets you have invited with
							personal referral link below. No time limits. Perpetual stream of
							passive income.
						</p>
					</Styled.Conditions>
					<Styled.ProfileSheet>
						<Styled.ProfileText>{`${window.location.origin}/code/${referral}`}</Styled.ProfileText>
						<Styled.ProfileButton
							main
							onClick={(e) =>
								copyHandler(e, `${window.location.origin}/code/${referral}`)
							}>
							{copyText}
						</Styled.ProfileButton>
					</Styled.ProfileSheet>
				</Card>
			)}
		</>
	);
};

export default ReferralCode;

import React, { useEffect } from 'react';

import * as Service from '../../../../services';
import * as Styled from './styled';
import * as Hook from '../../hooks';
import * as TymioUI from '../../../../components';
import ReferralList from './ReferralList';
import { Card, LoadingSpinner } from '../../../../components/_DEPRECATED';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';
import RefCodeInput from './RefCodeInput';
import { useWallet } from '../../../../hooks';

const ReferralCode = () => {
	const { loading, refCodeList, referrals, totals, balance, error } =
		Hook.useReferral();
	const { userAddress } = useWallet();

	useEffect(() => {
		if (error) {
			Service.MessageDialogService.showError(error);
			Service.ReferralService.getData(userAddress);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error]);

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
					<Styled.RefCodeList>
						{refCodeList.map((refCode, idx) => (
							<RefCodeInput key={idx} idx={idx} refCode={refCode} />
						))}
					</Styled.RefCodeList>

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

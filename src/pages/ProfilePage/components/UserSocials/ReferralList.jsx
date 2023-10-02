import React from 'react';

import * as Hook from '../../hooks';

import { formatDate, spliceAddress } from '../../../../lib/lib';
import {
	Card,
	LoadingSpinner,
	Table,
} from '../../../../components/_DEPRECATED';

const ReferralList = ({ referrals, totals }) => {
	const { loading } = Hook.useReferral();

	return (
		<>
			{loading && <LoadingSpinner />}
			{!loading && (
				<>
					<Card>
						{totals && (
							<Card.Header>
								<div>Linked wallets: {totals.wallets}</div>
								<div>Transactions: {totals.transactions}</div>
							</Card.Header>
						)}

						<Card.Body>
							<Table>
								<Table.Head>
									<Table.Head.Tr columns={3}>
										<Table.Th>Address</Table.Th>
										<Table.Th>Earn</Table.Th>
										<Table.Th>Paid</Table.Th>
									</Table.Head.Tr>
								</Table.Head>
								<Table.Body hr>
									{referrals.map((referral, i) => (
										<Table.Tr key={i} columns={3}>
											<Table.Td>{spliceAddress(referral.address)}</Table.Td>
											<Table.Td>${referral.earn.toFixed(2)}</Table.Td>
											<Table.Td>${referral.paid.toFixed(2)}</Table.Td>
										</Table.Tr>
									))}
								</Table.Body>
							</Table>
						</Card.Body>

						{totals && (
							<Card.Footer>
								<div>
									Available (next update{' '}
									{`${formatDate(totals.nextUpdate, 'utc')}`}
									): ${totals.available.toFixed(2)}
								</div>
							</Card.Footer>
						)}
					</Card>
				</>
			)}
		</>
	);
};

export default ReferralList;

import React, { useState, useEffect } from 'react';

import * as Service from '../../../../services';
import * as Styled from './styled';

import { useWallet } from '../../../../hooks';
import { useAirdrop, useAirdropFormik } from '../../hooks';
import {
	ErrorIcon,
	List,
	SuccessIcon,
} from '../../../../components/_DEPRECATED';

const Participant = ({ airdrop, airdropParticipant }) => {
	const { userAddress } = useWallet();
	const { loading } = useAirdrop();
	const [error, setError] = useState('');

	const formik = useAirdropFormik(airdropParticipant, async (values) => {
		setError(null);
		const { share_link } = values;
		try {
			Service.AirdropService.updateAirdropParticipant(userAddress, {
				airdrop_id: airdrop.id,
				share_link,
			});
		} catch (e) {
			if (e.message) {
				setError(e.message);
			}
		}
		formik.setSubmitting(false);
	});

	useEffect(() => {
		if (error) {
			Service.MessageDialogService.showError(error);
		}
	}, [error]);

	const handleShareLinkChange = (value) => {
		formik.setFieldValue('share_link', value, true);
	};

	return (
		<>
			<Styled.Subtitle>Check your 10K airdrop status below:</Styled.Subtitle>
			<List>
				<List.Item font={'small'}>
					{airdropParticipant.serial_number <= airdrop.participant_limit ? (
						<SuccessIcon />
					) : (
						<ErrorIcon />
					)}
					<div>
						{airdropParticipant.serial_number <= airdrop.participant_limit
							? `${airdropParticipant.serial_number}/${airdrop.participant_limit} - `
							: null}
						{airdropParticipant.serial_number <= airdrop.participant_limit
							? 'early user, eligible for airdrop'
							: 'Has been reached the limit of participants'}
					</div>
				</List.Item>
				<List.Item font={'small'}>
					{airdropParticipant.deal_made ? <SuccessIcon /> : <ErrorIcon />}
					<div>3 consecutive deals, each within a week after previous</div>
				</List.Item>
				<List.Item font={'small'}>
					{airdropParticipant.link_shared ? <SuccessIcon /> : <ErrorIcon />}
					<div>Posted about TYMIO</div>
				</List.Item>
			</List>
			{airdropParticipant.share_link ? (
				<Styled.ProfileInputSheet>
					<Styled.ProfileInput
						value={airdropParticipant.share_link}
						onChange={() => {}}
						type={'text'}
						placeholder={'share link'}
						error={formik.errors.share_link}
						disabled={true}
						noButton
					/>
				</Styled.ProfileInputSheet>
			) : (
				<Styled.ProfileInputSheet>
					<Styled.ProfileInput
						value={formik.values.share_link}
						onChange={(e) => handleShareLinkChange(e.currentTarget.value)}
						type={'text'}
						placeholder={'share link'}
						error={formik.errors.share_link}
						disabled={loading}
					/>
					<Styled.ProfileButton
						main
						onClick={() => formik.handleSubmit(formik.values)}
						disabled={!formik.isValid}>
						Share
					</Styled.ProfileButton>
				</Styled.ProfileInputSheet>
			)}
		</>
	);
};

export default Participant;

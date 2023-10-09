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
import * as TymioUI from '../../../../components';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';

const Participant = ({ airdrop, airdropParticipant }) => {
	const { userAddress } = useWallet();
	const { loading } = useAirdrop();
	const [error, setError] = useState('');
	const [inputError, setInputError] = useState('');

	const formik = useAirdropFormik(airdropParticipant, async (values) => {
		setError(null);
		setInputError(formik.errors.share_link);
		if (!formik.errors.share_link) {
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
		<Styled.Participant>
			<TymioUI.Typography>YOUR AIRDROP STATUS:</TymioUI.Typography>
			<List mt={'10px'}>
				<List.Item gap={'20px'}>
					{airdropParticipant.serial_number <= airdrop.participant_limit ? (
						<SuccessIcon />
					) : (
						<ErrorIcon />
					)}
					<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG}>
						{airdropParticipant.serial_number <= airdrop.participant_limit
							? `${airdropParticipant.serial_number}/${airdrop.participant_limit} - `
							: null}
						{airdropParticipant.serial_number <= airdrop.participant_limit
							? 'early user, eligible for airdrop.'
							: 'Has been reached the limit of participants.'}
					</TymioUI.Typography>
				</List.Item>
				<List.Item gap={'20px'}>
					{airdropParticipant.deal_made ? <SuccessIcon /> : <ErrorIcon />}
					<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG}>
						3 consecutive deals, each within a week after previous.
					</TymioUI.Typography>
				</List.Item>
				<List.Item gap={'20px'}>
					{airdropParticipant.link_shared ? <SuccessIcon /> : <ErrorIcon />}
					<TymioUI.Typography size={TYPOGRAPHY_SIZE.BIG}>
						Posted about Tymio.
					</TymioUI.Typography>
				</List.Item>
			</List>
			{airdropParticipant.share_link ? (
				<Styled.ProfileInputSheet mt={'0'} ml={'40px'}>
					<Styled.ProfileInput
						value={airdropParticipant.share_link}
						onChange={() => {}}
						type={'text'}
						placeholder={'Link to social media post'}
						error={formik.errors.share_link}
						disabled={true}
						noButton
					/>
				</Styled.ProfileInputSheet>
			) : (
				<Styled.ProfileInputSheet mt={'0'} ml={'40px'} xsMargin={'0'}>
					<Styled.ProfileInput
						value={formik.values.share_link}
						onChange={(e) => handleShareLinkChange(e.currentTarget.value)}
						type={'text'}
						placeholder={'Link to social media post'}
						disabled={loading}
						error={inputError}
						onBlur={() => setInputError(formik.errors.share_link)}
						onFocus={() => setInputError('')}
					/>
					<Styled.ProfileButton
						onClick={() => formik.handleSubmit(formik.values)}
						disabled={!formik.isValid || !formik.values.share_link}>
						SHARE
					</Styled.ProfileButton>
				</Styled.ProfileInputSheet>
			)}
		</Styled.Participant>
	);
};

export default Participant;

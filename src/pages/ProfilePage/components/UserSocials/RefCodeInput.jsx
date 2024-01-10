import React, { useEffect, useState } from 'react';

import * as Service from '../../../../services';
import * as Styled from './styled';
import * as TymioUI from '../../../../components';
import useFormik from '../../hooks/useRefFormik';
import { useWallet } from '../../../../hooks';

const RefCodeInput = ({ idx, refCode, refCodeList }) => {
	const formik = useFormik();
	const [editing, setEditing] = useState(false);
	const [actions, setActions] = useState([]);
	const { userAddress } = useWallet();

	useEffect(() => {
		if (refCode) {
			formik.setFieldValue('referral', refCode);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refCode]);

	const handleEdit = async () => {
		setEditing(true);
	};

	const handleSave = async (idx) => {
		await Service.ReferralService.editReferralLink(
			idx,
			userAddress,
			formik.values.referral || refCode,
		);
		setEditing(false);
	};

	const handleAdd = async () => {
		await Service.ReferralService.addReferralLink(userAddress);
	};

	const handleRemove = async () => {
		await Service.ReferralService.removeReferralLink(
			idx,
			userAddress,
			formik.values.referral || refCode,
		);
	};

	useEffect(() => {
		setActions([
			<TymioUI.MoreActionItem action={handleAdd}>ADD</TymioUI.MoreActionItem>,
			<TymioUI.MoreActionItem action={() => handleRemove()}>
				REMOVE
			</TymioUI.MoreActionItem>,
		]);
		if (refCodeList.length === 1) {
			setActions([
				<TymioUI.MoreActionItem action={handleAdd}>ADD</TymioUI.MoreActionItem>,
			]);
		}
		if (refCodeList.length === 3) {
			setActions([
				<TymioUI.MoreActionItem action={() => handleRemove()}>
					REMOVE
				</TymioUI.MoreActionItem>,
			]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refCodeList]);

	return (
		<Styled.ProfileInputSheet mt={'0'}>
			<Styled.ProfileInput
				value={
					editing
						? formik.values.referral
						: `${window.location.origin}/${formik.values.referral}`
				}
				type={'text'}
				placeholder={'https://tymio.com/ed2da5'}
				disabled={!editing}
				error={formik.errors.referral}
				onChange={(e) => formik.setFieldValue('referral', e.target.value)}
				copyClipboard
			/>
			{editing ? (
				<Styled.ProfileButton
					onClick={() => handleSave(idx)}
					disabled={
						formik.errors.referral || refCode === formik.values.referral
					}>
					SAVE
				</Styled.ProfileButton>
			) : (
				<Styled.ProfileButton onClick={handleEdit}>EDIT</Styled.ProfileButton>
			)}
			<TymioUI.MoreActions actions={actions} />
		</Styled.ProfileInputSheet>
	);
};

export default RefCodeInput;

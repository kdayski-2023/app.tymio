import React, { useState } from 'react';

import * as Styled from './styled';
import { TYPOGRAPHY_SIZE } from '../../models/types';
import CopyClipboard from '../Icons/CopyClipboard/CopyClipboard';
import Check from '../Icons/Check/Check';
import Typography from '../Typography/Typography/Typography';
import { COLORS } from '../../models/colors';

export const CopyButton = (props) => {
	const { copyContent } = props;
	const [copyText, setCopyText] = useState('COPY');
	const [copied, setCopied] = useState(false);
	let timeout;

	const copyHandler = (e, data) => {
		e.preventDefault();
		navigator.clipboard.writeText(data);
		setCopyText('COPIED');
		setCopied(true);

		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			setCopyText('COPY');
			setCopied(false);
		}, 2000);
	};

	return (
		<Styled.CopyButton>
			<Styled.CopyText id={'copyText'}>
				<Typography size={TYPOGRAPHY_SIZE.SMALL} color={COLORS.BLACK}>
					{copyText}
				</Typography>
			</Styled.CopyText>
			<Styled.Icon onClick={(e) => copyHandler(e, copyContent)} {...props}>
				{copied ? <Check size={30} /> : <CopyClipboard size={30} />}
			</Styled.Icon>
		</Styled.CopyButton>
	);
};

export default CopyButton;

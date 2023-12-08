import React, { useState } from 'react';

import * as Styled from './styled';
import * as TymioUI from '../../../../components';
import { COLORS } from '../../../../models/colors';
import { useOuterClick } from '../../../../hooks';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';

const Badge = ({ club_member }) => {
	const [showBadge, setShowBadge] = useState(false);
	const [toggleFocused, setToggleFocused] = useState(false);

	const contentRef = useOuterClick(() => {
		if (showBadge && !toggleFocused) {
			setShowBadge(false);
		} else {
			setToggleFocused(false);
		}
	});
	const toggleShowBadge = () => {
		setShowBadge((prevState) => !prevState);
		setToggleFocused(true);
	};

	const handleClose = () => {
		setShowBadge(false);
		setToggleFocused(false);
	};

	return (
		<>
			{club_member && (
				<Styled.AprBadge onClick={toggleShowBadge} focus={showBadge}>
					<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL} color={COLORS.BLACK}>
						Club
					</TymioUI.Typography>
					<TymioUI.TooltipIcon
						circleFill={COLORS.BLACK}
						iconFill={COLORS.LEMON}
					/>
				</Styled.AprBadge>
			)}
			{showBadge && (
				<Styled.AprBonus ref={contentRef}>
					<Styled.Cross onClick={handleClose}>
						<TymioUI.CrossClose color={COLORS.BLACK} />
					</Styled.Cross>
					<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL} color={COLORS.BLACK}>
						Enjoy increased ARP rate as a{' '}
						<Styled.Link href="https://tymio.com/club" target="_blank">
							TYMIO club
						</Styled.Link>{' '}
						member
					</TymioUI.Typography>
				</Styled.AprBonus>
			)}
		</>
	);
};

export default Badge;

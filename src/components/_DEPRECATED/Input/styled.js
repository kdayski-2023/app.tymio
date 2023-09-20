import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const InputWrapper = styled.div`
	color: ${COLORS.WHITE};
	display: flex;
	border: 1px solid ${COLORS.GRAY};
	background: ${COLORS.BLACK};
	border-radius: 45px;
	/* padding: 12px 20px; */
	padding: 0 20px 0 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12px;
`;

export const CheckboxWrapper = styled(InputWrapper)`
	border: unset;
	background: unset;
	border-radius: unset;
	padding: unset;
`;

export const Input = styled.input`
	width: 100%;
	color: ${COLORS.WHITE};
	font-size: 24px;
	text-align: ${({ align }) => align || 'right'};
	background: none;
	border: none;
	outline: none;
`;

export const TextArea = styled.textarea`
	resize: none;
	overflow-y: auto;
	min-height: 33px;
	max-height: 200px;
	width: 100%;
	color: ${COLORS.WHITE};
	font-size: 18px;
	text-align: ${({ align }) => align};
	background: none;
	border: none;
	outline: none;
	@media (max-width: 576px) {
		max-height: 120px;
	}
`;

export const Checkbox = styled(Input)`
	width: unset;
	&:checked {
		accent-color: ${COLORS.LIGHT_BLUE};
	}
`;

export const Label = styled.label`
	display: flex;
	align-items: center;
	gap: 12px;
	font-size: 20px;
	font-weight: bold;
	user-select: none;
	color: ${({ active }) => active && COLORS.LIGHT_BLUE};

	&:hover {
		cursor: pointer;
	}
`;

export const Terms = styled.a`
	padding-left: 5px;
	text-decoration: underline;
	color: ${COLORS.WHITE};
	&:hover {
		color: ${COLORS.WHITE};
	}
`;

export const Content = styled.span``;

import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const InputWrapper = styled.div`
	height: ${({ type }) => (type === 'textarea' ? 'auto' : '40px')};
	min-height: ${({ type }) => type === 'textarea' && '80px'};
	max-height: ${({ type }) => type === 'textarea' && '200px'};
	color: ${COLORS.WHITE};
	display: flex;
	border: 0.5px solid ${COLORS.PURPLE_BRIGHT};
	background: ${COLORS.BLACK};
	border-radius: 5px;
	padding: ${({ type }) => (type === 'textarea' ? '0' : '0 15px 0 0')};
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${({ type }) => (type === 'textarea' ? '0' : '15px')};
`;

export const CheckboxWrapper = styled(InputWrapper)`
	height: fit-content;
	border: unset;
	background: unset;
	border-radius: unset;
	padding: unset;
`;

export const Input = styled.input`
	font-size: 16px;
	font-weight: 500;
	line-height: 15px
	letter-spacing: 0.32px;
	width: 100%;
	color: ${COLORS.LIGHT};
	text-align: ${({ align }) => align || 'right'};
	background: none;
	border: none;
	outline: none;
`;

export const TextArea = styled.textarea`
	padding: 10px;
	resize: none;
	overflow-y: auto;
	min-height: 80px;
	max-height: 200px;
	width: 100%;

	color: ${COLORS.LIGHT};
	font-size: 13px;
	font-weight: 400;
	line-height: 15px;
	letter-spacing: 0.39px;

	text-align: ${({ align }) => align};
	background: none;
	border: none;
	outline: none;

	&::placeholder {
		color: ${COLORS.GRAY};
	}

	@media (max-width: 576px) {
		max-height: 120px;
	}
`;

export const Checkbox = styled(Input)`
	margin: 0;
	width: unset;
	box-shadow: none;
	width: 15px;
	height: 15px;
	border: 1px solid ${COLORS.LIGHT};
	border-radius: 2px;
	outline: none;
	cursor: pointer;

	&:checked {
		accent-color: ${COLORS.LIGHT};
	}

	&:after {
		box-shadow: none;
	}
`;

export const Label = styled.label`
	display: flex;
	height: 100%;
	align-items: center;
	gap: 15px;
	user-select: none;

	&:hover {
		cursor: pointer;
	}
`;

export const Terms = styled.a`
	text-decoration: none;
	color: ${COLORS.PURPLE_BRIGHT};
`;

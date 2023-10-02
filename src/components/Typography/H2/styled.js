import styled from 'styled-components';

export const H2 = styled.h2`
	margin: 0;
	font-size: 40px;
	font-weight: 500;
	line-height: ${({ lh }) => (lh ? lh : '110%')};
	letter-spacing: 0.4px;

	@media (max-width: 768px) {
		font-size: 28px;
		letter-spacing: 0.28px;
	}
`;

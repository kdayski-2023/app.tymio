import styled from 'styled-components';

export const Desktop = styled.div`
	display: block;
	@media (max-width: 576px) {
		display: none;
	}
`;

export const Mobile = styled.div`
	display: none;
	@media (max-width: 576px) {
		display: block;
	}
`;

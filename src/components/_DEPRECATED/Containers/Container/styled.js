import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	margin: 10px auto 0 auto;
	max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '650px')};
	padding: ${({ withPadding }) => (withPadding ? '0 157px' : '0')};
	overflow-y: hidden;
	padding-bottom: 380px;

	@media (max-width: 768px) {
		padding: 0 15px 380px 15px;
	}

	@media (max-width: 576px) {
		margin: 5px auto 0 auto;
		padding: 0 0 300px 0;
	}
`;

import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	margin: 10px auto;
	max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '650px')};
	padding: ${({ withPadding }) => (withPadding ? '0 172px' : '0')};
	overflow-y: hidden;

	@media (max-width: 768px) {
		padding: 0;
	}
`;

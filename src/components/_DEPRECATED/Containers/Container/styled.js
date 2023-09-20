import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 40px auto;
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '420px')};
  padding: ${({ withPadding }) => (withPadding ? '0 80px' : '0')};
  overflow-y: hidden;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

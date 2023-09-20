import styled from 'styled-components';

export const Main = styled.main``;

const dots = styled.img`
  position: fixed;
  z-index: -1;
`;

export const LeftDots = styled(dots)`
  left: 0;
  top: 0;
`;

export const RightDots = styled(dots)`
  right: 0;
  bottom: 0;
`;

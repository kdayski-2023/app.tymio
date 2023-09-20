import styled from 'styled-components';
import { Button } from '../../components/Buttons/Button/styled';
import { COLORS } from '../../models/colors';

export const RefButton = styled(Button)`
  font-size: 18px;
  font-weight: normal;
`;

export const RefSheet = styled.div`
  display: flex;
  background: ${COLORS.BLACK};
  border: 1px solid ${COLORS.VERY_DARK};
  border-radius: 45px;
`;

export const RefText = styled.div`
  padding: 0 24px;
  display: grid;
  justify-items: center;
  align-content: center;
  color: ${COLORS.WHITE};
`;

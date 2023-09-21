import styled from 'styled-components';
import { Button } from '../../components';
import { getColorByName } from '../../helpers/utils';
import { COLORS } from '../../models/colors';

export const Label = styled.span`
  width: auto;
  text-align: ${({ align }) => (align ? align : 'inherit')};
`;

export const CautionLabel = styled.span`
  font-size: 20px;
  color: ${COLORS.PINK};
  text-align: ${({ align }) => (align ? align : 'inherit')};
`;

export const PeriodButtonText = styled.span`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  color: ${COLORS.LIGHT_BLUE};
`;

export const SetValue = styled.span`
  color: ${({ color }) => (color ? getColorByName(color) : COLORS.LIGHT_BLUE)};
  font-weight: bold;
`;

export const Agreement = styled.div`
  color: ${COLORS.LIGHT_GRAY};
  font-size: 18px;
  line-height: 1.4em;
`;

export const OrderInfoWrapper = styled.div`
  background-color: rgba(19, 3, 35, 0.6);
  padding: 8px;
  margin: ${({ margin }) => (margin === 0 ? '0' : '32px 0 0 0')};
  display: block;
  font-size: 18px;
  line-height: 1.4em;
  color: #bbbbbc;
`;

export const Status = styled.span`
  line-height: normal;
  text-transform: capitalize;
  font-size: 24px;
  font-weight: bold;
  color: ${({ active }) => (active ? 'inherit' : COLORS.LIGHT_BLUE)};
`;

export const MaxValueWrapper = styled.div`
  display: flex !important;
  justify-content: flex-end !important;
  flex-direction: row;
  color: #ffffff;
  margin-bottom: 0 !important;
`;

export const MaxValueStyled = styled.span`
  padding: 9px 12px;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
    background: rgba(47, 138, 245, 0.32);
  }
`;

export const OrderInfoLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Key = styled.span`
  padding-top: 10px;
  margin: 0 auto 0 0;
`;

export const Value = styled.span`
  padding-top: 10px;
  margin: 0 0 auto 0;
`;

export const RecieveKey = styled.span`
  margin: 10px auto 0 0;
`;

export const RecieveValue = styled.span`
  margin: 10px 0 0 0;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  padding: 4px 5px;
  margin-left: 8px;
  background: linear-gradient(90deg, #9c27b0 0%, #5e35b1 100%);
`;

export const RecieveWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-size: 15px;
  line-height: 13px;
`;

export const NoData = styled.span`
  color: gray;
`;

export const Amount = styled.span`
  line-height: normal;
  font-size: 24px;
  font-weight: bold;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  gap: 6px;
`;

export const ETHAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const TDUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;

  &:before {
    content: attr(aria-label);
    font-size: 20px;
    font-weight: bold;
    color: ${COLORS.WHITE};
  }
`;

export const TDLi = styled.li`
  padding: 10px 0;
`;

export const Link = styled.a`
  overflow-wrap: anywhere;
`;

export const Capitalize = styled.span`
  text-transform: capitalize;
`;

export const Max = styled.div`
  margin-left: auto;
  background: ${COLORS.LIGHT_BLUE};
  color: ${COLORS.WHITE};
  padding: 3px 6px;
  margin-right: 20px;
  border-radius: 45px;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    background: ${COLORS.TRANSPARENT_BRIGHT_BLUE};
    color: ${COLORS.BRIGHT_BLUE};
  }
`;

export const SubscribeButton = styled(Button)`
  font-size: 16px;
  font-weight: normal;
  flex: 1 1 0;
`;

export const SubscribeSheet = styled.div`
  position: relative;
  display: flex;
  background: ${COLORS.BLACK};
  border: 1px solid ${COLORS.VERY_DARK};
  border-radius: 45px;

  div {
    border: none;
  }

  input {
    font-size: 16px;
    flex: 3 1 0;
  }

  div:nth-child(2) {
    position: absolute;
    bottom: -20px;
    right: 0;
  }
`;

export const Blur = styled.div`
  z-index: 999;
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  color: ${COLORS.PINK};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: bold;
  flex-direction: column;
  gap: 16px;

  svg {
    margin-right: 0 !important;
  }
`;

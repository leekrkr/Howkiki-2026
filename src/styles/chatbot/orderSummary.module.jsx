import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  min-height: 100dvh;

  display: flex;
  justify-content: center;

  background: #fff;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 430px;
  min-height: 100dvh;

  padding-bottom: env(safe-area-inset-bottom);

  background: #fff;
`;

export const Header = styled.div`
  position: relative;

  width: 100%;
  height: 72px;

  padding-top: env(safe-area-inset-top);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  left: 16px;

  border: none;
  padding: 0;

  background: transparent;

  font-size: 32px;
  font-weight: 300;
  line-height: 1;

  color: #0a0a0b;

  cursor: pointer;
`;

export const CloseIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const HeaderTitle = styled.h1`
  margin: 0;

  font-size: 17px;
  font-weight: 600;

  color: #0a0a0b;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background: #d8d8d8;
`;

export const TableText = styled.div`
  padding: 18px 0;

  text-align: center;

  font-size: 15px;
  font-weight: 500;

  color: #0a0a0b;
`;

export const TotalSummary = styled.div`
  margin: 0 16px 16px;
  padding: 20px 22px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #d8d8d8;
  border-radius: 16px;

  background: #fff;
`;

export const TotalLabel = styled.div`
  font-size: 16px;
  font-weight: 600;

  color: #0a0a0b;
`;

export const TotalPrice = styled.div`
  font-size: 16px;
  font-weight: 600;

  color: #0a0a0b;
`;

export const OrderList = styled.div`
  padding: 0 16px 32px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const OrderCard = styled.div`
  padding: 20px;

  border: 1px solid #d8d8d8;
  border-radius: 16px;

  background: #fff;
`;

export const OrderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const StatusBadge = styled.div`
  padding: 8px 10px;

  border-radius: 999px;

  background: #e2efff;

  font-size: 13px;
  font-weight: 500;

  color: #4097ff;
`;

export const CancelButton = styled.button`
  padding: 8px 10px;

  border: 1px solid ${({ $disabled }) => ($disabled ? "#D0D1D2" : "#4097ff")};
  border-radius: 999px;

  background: #fff;

  font-size: 13px;
  font-weight: 500;

  color: ${({ $disabled }) => ($disabled ? "#A2A3A5" : "#4097ff")};

  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
`;

export const OrderNumber = styled.div`
  margin-left: 4px;
  margin-bottom: 12px;

  font-size: 16px;
  font-weight: 600;

  color: #0a0a0b;
`;

export const CardDivider = styled.div`
  width: 100%;
  height: 1px;

  background: #d8d8d8;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuRow = styled.div`
  padding: 16px 8px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & + & {
    border-top: 1px solid #d8d8d8;
  }
`;

export const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const MenuName = styled.div`
  font-size: 14px;
  font-weight: 400;

  color: #0a0a0b;
`;

export const MenuPrice = styled.div`
  font-size: 14px;
  font-weight: 400;

  color: #0a0a0b;
`;

export const MenuQuantity = styled.div`
  font-size: 14px;
  font-weight: 400;

  color: #0a0a0b;
`;

export const OrderTotalRow = styled.div`
  padding: 18px 4px 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderTotalLabel = styled.div`
  font-size: 16px;
  font-weight: 600;

  color: #0a0a0b;
`;

export const OrderTotalPrice = styled.div`
  font-size: 16px;
  font-weight: 600;

  color: #0a0a0b;
`;

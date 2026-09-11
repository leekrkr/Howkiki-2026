import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.35);
`;

export const ModalContainer = styled.div`
  width: 640px;
  min-height: 480px;
  padding: 44px 54px 28px;

  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 48px;
`;

export const ModalHeader = styled.div`
  width: 100%;

  padding: 0px 8px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;
`;

export const OrderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 18px;
  font-weight: 500;
  color: #6c6e71;
`;

export const OrderNumber = styled.span`
  color: #4097ff;
`;

export const TableNumber = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #4097ff;
`;

export const MenuList = styled.div`
  width: 100%;

  height: calc(84px * 3);
  overflow-y: auto;

  background: #f1f4f7;

  border-radius: 20px;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuItem = styled.div`
  width: 100%;

  height: 84px;
  min-height: 84px;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #fff;
`;

export const MenuName = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #0a0a0b;
`;

export const MenuQuantity = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #0a0a0b;
`;

export const TotalContainer = styled.span`
  padding: 16px 8px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalLabel = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #0a0a0b;
`;

export const TotalPrice = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #0a0a0b;
`;

export const CloseButton = styled.button`
  width: 124px;
  height: 54px;

  margin: auto auto 0;

  border: 1px solid #d0d1d2;
  border-radius: 16px;

  background: #fff;
  color: #6c6e71;

  font-size: 17px;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    color: #4097ff;
  }
`;

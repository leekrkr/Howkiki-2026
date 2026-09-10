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
  padding: 48px 54px 36px;

  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 48px;
`;

export const ModalHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const OrderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 18px;
  font-weight: 500;
  color: #777;
`;

export const OrderNumber = styled.span`
  color: #4696ff;
`;

export const TableNumber = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #4696ff;
`;

export const MenuList = styled.div`
  width: 100%;

  max-height: calc(88px * 3);
  overflow-y: auto;

  background: #f1f3f5;

  border-radius: 20px;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuItem = styled.div`
  width: 100%;

  height: 88px;
  min-height: 88px;

  padding: 0 32px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  border-bottom: 1px solid #fff;

  &:last-child {
    border-bottom: none;
  }
`;

export const MenuName = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #111;
`;

export const MenuQuantity = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #111;
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
    border: 0;
    background: #e8e8e9;
  }
`;

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
  width: 820px;
  height: 650px;

  padding: 52px 44px 36px;

  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 48px;
`;

export const TableNumber = styled.div`
  margin: 0 20px 14px;

  font-size: 20px;
  font-weight: 500;
  color: #4696ff;
`;

export const OrderList = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;

  overflow-y: auto;

  border: 1px solid #e1e4e8;
  border-radius: 28px;

  /* 스크롤바 숨기기 */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmptyOrder = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f1f3f5;
  border-radius: 28px;

  font-size: 18px;
  font-weight: 400;
  color: #777;
`;

export const OrderGroup = styled.div`
  width: 100%;
`;

export const OrderNumber = styled.div`
  height: 48px;
  padding: 0 28px;

  display: flex;
  align-items: center;

  background: #fff;

  font-size: 16px;
  font-weight: 500;
  color: #555;
`;

export const MenuItem = styled.div`
  width: 100%;
  min-height: 88px;

  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #f1f3f5;
  border-bottom: 1px solid #fff;

  &:last-child {
    border-bottom: 0;
  }
`;

export const MenuName = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #111;
`;

export const MenuInfo = styled.span`
  font-size: 17px;
  font-weight: 400;
  color: #111;
`;

export const TotalContainer = styled.div`
  padding: 20px 20px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalLabel = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #111;
`;

export const TotalPrice = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #111;
`;

export const ButtonContainer = styled.div`
  margin-top: auto;
  padding-top: 34px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const CloseButton = styled.button`
  width: 124px;
  height: 54px;

  border: 1px solid #d0d1d2;
  border-radius: 16px;

  background: #fff;
  color: #6c6e71;

  font-size: 17px;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    color: #4696ff;
  }
`;

export const CompleteButton = styled.button`
  width: 124px;
  height: 54px;

  border: 0;
  border-radius: 16px;

  background: #4696ff;
  color: #fff;

  font-size: 17px;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    background: #3489f5;
  }
`;

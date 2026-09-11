import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.35);

  z-index: 9999;
`;

export const ModalContainer = styled.div`
  width: 640px;
  height: 483px;

  padding: 44px 54px 28px;

  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 48px;
`;

export const ModalHeader = styled.div`
  padding: 0px 8px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 18px;
`;

export const ModalTitle = styled.h3`
  margin: 0;

  font-size: 18px;
  font-weight: 500;

  color: #6c6e71;
`;

export const TableNumber = styled.span`
  font-size: 18px;
  font-weight: 500;

  color: #4097ff;
`;

export const ReasonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ReasonButton = styled.button`
  width: 100%;
  height: 80px;

  border: ${({ $active }) =>
    $active ? "1.5px solid #4097FF" : "1.5px solid transparent"};

  border-radius: 20px;

  background: ${({ $active }) => ($active ? "#e2efff" : "#F1F4F7")};

  color: ${({ $active }) => ($active ? "#4097FF" : "#0A0A0B")};

  font-size: 18px;
  font-weight: 500;

  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  margin-top: auto;
`;

export const CancelButton = styled.button`
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
    color: #4097ff;
  }
`;

export const NextButton = styled.button`
  width: 124px;
  height: 54px;

  border: 0;
  border-radius: 16px;

  background: ${({ disabled }) => (disabled ? "#B3D5FF" : "#4097ff")};

  color: #fff;

  font-size: 17px;
  font-weight: 500;

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:not(:disabled):hover {
    background: #3489f5;
  }
`;

export const MenuList = styled.div`
  overflow: hidden;

  background: #f1f4f7;
  border-radius: 20px;
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 88px;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #fff;

  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }
`;

export const MenuName = styled.span`
  font-size: 18px;
  font-weight: 500;

  color: #0a0a0b;
`;

export const CheckBox = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: ${({ $active }) =>
    $active ? "1px solid #4097ff" : "1px solid #D0D1D2"};

  border-radius: 7px;

  background: ${({ $active }) => ($active ? "#4097ff" : "#fff")};

  color: #fff;

  font-size: 16px;
  font-weight: 600;
`;

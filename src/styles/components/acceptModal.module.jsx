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

  padding: 48px 54px 36px;

  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 48px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 18px;
`;

export const ModalTitle = styled.h3`
  margin: 0;

  font-size: 18px;
  font-weight: 500;

  color: #777;
`;

export const TableNumber = styled.span`
  font-size: 18px;
  font-weight: 500;

  color: #4696ff;
`;

export const TimeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const TimeButton = styled.button`
  height: 124px;

  border: ${({ $active }) =>
    $active ? "1.5px solid #4696ff" : "1.5px solid transparent"};

  border-radius: 20px;

  background: ${({ $active }) => ($active ? "#e2efff" : "#f1f3f5")};

  color: ${({ $active }) => ($active ? "#4696ff" : "#111")};

  font-size: 20px;
  font-weight: 500;

  cursor: pointer;
`;

export const TimeInputBox = styled.div`
  width: 100%;
  height: 66px;

  display: flex;
  align-items: center;

  padding: 0 20px;

  border: 1px solid #e8e8e9;
  border-radius: 18px;

  background: #fff;

  &:focus-within {
    border-color: #4097ff;
  }
`;

export const TimeInput = styled.input`
  flex: 1;
  min-width: 0;

  font-size: 18px;
  font-weight: 500;

  border: none;
  outline: none;
  background: transparent;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const TimeUnit = styled.span`
  flex-shrink: 0;

  margin-left: 8px;

  font-size: 18px;
  font-weight: 500;
  color: #555;

  pointer-events: none;
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
    color: #4696ff;
  }
`;

export const CompleteButton = styled.button`
  width: 124px;
  height: 54px;

  border: 0;
  border-radius: 16px;

  background: ${({ disabled }) => (disabled ? "#B3D5FF" : "#4696ff")};

  color: #fff;

  font-size: 17px;
  font-weight: 500;

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:not(:disabled):hover {
    background: #3489f5;
  }
`;

import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.3);
`;

export const Modal = styled.div`
  width: 270px;
  min-height: 172px;

  padding: 26px 20px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 20px;

  background: #fff;
`;

export const ModalContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 6px;
`;

export const ModalTitle = styled.div`
  font-size: 16px;
  font-weight: 600;

  color: ${({ $type }) => ($type === "error" ? "#ff4d4f" : "#111")};
`;

export const ModalText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.45;

  text-align: center;

  color: #111;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;

  margin-top: 24px;
`;

export const CancelButton = styled.button`
  min-width: 82px;
  height: 38px;

  padding: 0 18px;

  border: none;
  border-radius: 12px;

  background: #e5e7eb;

  font-size: 14px;
  font-weight: 500;
  color: #999;

  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  min-width: 82px;
  height: 38px;

  padding: 0 18px;

  border: none;
  border-radius: 12px;

  background: #4097ff;

  font-size: 14px;
  font-weight: 500;
  color: #fff;

  cursor: pointer;
`;

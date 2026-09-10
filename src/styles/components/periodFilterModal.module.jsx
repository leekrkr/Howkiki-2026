import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background: rgba(0, 0, 0, 0.25);
`;

export const Modal = styled.div`
  width: 100%;

  background: #fff;

  border-radius: 24px;

  overflow: hidden;
`;

export const ModalHeader = styled.div`
  height: 80px;

  padding: 0 44px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #e5e5e5;
`;

export const ModalTitle = styled.h2`
  margin: 0;

  font-size: 22px;
  font-weight: 500;

  color: #111;
`;

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: transparent;

  font-size: 34px;
  font-weight: 300;
  line-height: 1;

  color: #222;

  cursor: pointer;
`;

export const ModalBody = styled.div`
  width: 880px;
  max-width: calc(100% - 80px);

  margin: 0 auto;

  padding: 34px 0 30px;
`;

export const Section = styled.div`
  & + & {
    margin-top: 28px;
  }
`;

export const SectionTitle = styled.div`
  margin-bottom: 12px;

  font-size: 18px;
  font-weight: 600;

  color: #111;
`;

export const PeriodButtons = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  border: 1px solid #d6d6d6;
  border-radius: 12px;

  overflow: hidden;
`;

export const PeriodButton = styled.button`
  height: 54px;

  border: none;
  border-right: 1px solid #d6d6d6;

  background: ${({ $active }) => ($active ? "#f1f4f8" : "#fff")};

  font-size: 17px;
  font-weight: ${({ $active }) => ($active ? 500 : 400)};

  color: ${({ $active }) => ($active ? "#4097ff" : "#555")};

  cursor: pointer;

  &:last-child {
    border-right: none;
  }
`;

export const DateRangeBox = styled.div`
  width: 100%;
  height: 60px;

  padding: 0 22px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  border: 1px solid #d6d6d6;
  border-radius: 12px;

  background: #fff;
`;

export const DateItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DateIcon = styled.span`
  width: 24px;
  height: 24px;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

export const DateText = styled.span`
  font-size: 17px;
  font-weight: 400;
  line-height: 1;

  color: ${({ $active }) => ($active ? "#4097ff" : "#555")};
`;

export const RangeDivider = styled.div`
  padding: 0 20px;

  font-size: 18px;

  color: #555;
`;

export const ModalFooter = styled.div`
  padding: 20px 0;

  display: flex;
  justify-content: center;
  gap: 16px;

  border-top: 1px solid #e5e5e5;
`;

export const ResetButton = styled.button`
  width: 432px;
  height: 60px;

  border: 1px solid #d6d6d6;
  border-radius: 18px;

  background: #fff;

  font-size: 18px;
  font-weight: 500;

  color: #555;

  cursor: pointer;

  &:hover {
    color: #4696ff;
  }
`;

export const SearchButton = styled.button`
  width: 432px;
  height: 60px;

  border: none;
  border-radius: 18px;

  background: ${({ disabled }) => (disabled ? "#B3D5FF" : "#4097ff")};

  font-size: 18px;
  font-weight: 500;

  color: #fff;

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:not(:disabled):hover {
    background: #3489f5;
  }
`;

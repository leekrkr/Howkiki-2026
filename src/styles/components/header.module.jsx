import styled from "styled-components";

export const TopBar = styled.header`
  width: 100%;
  height: 82px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 46px;

  background: #f1f4f7;
  border-bottom: 1px solid #fff;
`;

export const OrderTypeTabs = styled.div`
  height: 100%;

  display: flex;
  align-items: stretch;
  gap: 28px;
`;

export const OrderTypeTab = styled.button`
  position: relative;

  min-width: 120px;
  height: 100%;

  padding: 0;

  border: 0;
  background: transparent;

  color: ${({ $active }) => ($active ? "#0A0A0B" : "#A2A3A5")};

  font-size: 18px;
  font-weight: ${({ $active }) => ($active ? 500 : 500)};

  cursor: pointer;

  &::after {
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 3px;

    background: ${({ $active }) => ($active ? "#4097ff" : "transparent")};
  }
`;

export const RightInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const DateText = styled.span`
  font-size: 17px;
  font-weight: 500;

  color: #0a0a0b;
`;

export const Bell = styled.div`
  width: 28px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

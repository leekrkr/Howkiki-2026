import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;

  background: #f1f4f7;
`;

export const MainContainer = styled.main`
  width: calc(100% - 316px);
  min-height: 100vh;

  margin-left: 316px;
`;

export const ListContainer = styled.div`
  width: 100%;

  padding: 42px 46px 60px;
`;

export const Title = styled.h2`
  margin: 0 0 40px;

  font-size: 30px;
  font-weight: 600;

  color: #0a0a0b;
`;

export const TableMap = styled.div`
  position: relative;

  width: 100%;
  height: 700px;
`;

export const TableItem = styled.div`
  position: absolute;

  left: ${({ $x }) => `${$x}%`};
  top: ${({ $y }) => `${$y}%`};

  width: ${({ $width }) => `${$width}%`};

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 14px;
`;

export const ChairRow = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  gap: 16px;
`;

export const Chair = styled.div`
  width: 70px;
  height: 26px;

  border-radius: 999px;

  background: ${({ $active }) => ($active ? "#c9e1ff" : "#e0e3e6")};
`;

export const TableBox = styled.div`
  width: 100%;
  height: ${({ $height }) => `${$height}px`};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 8px;

  background: #fff;

  border: ${({ $active }) =>
    $active ? "1.5px solid #4097FF" : "1.5px solid transparent"};

  border-radius: 34px;

  cursor: pointer;
`;

export const TableName = styled.div`
  font-size: 16px;
  font-weight: 500;

  color: ${({ $active }) => ($active ? "#4097FF" : "#a2a3a5")};
`;

export const OrderNumber = styled.div`
  font-size: 16px;
  font-weight: 500;

  color: #4097ff;

  text-decoration: underline;
`;

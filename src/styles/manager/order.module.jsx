import styled from "styled-components";
import { Link } from "react-router-dom";

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
  margin: 0 0 28px;

  font-size: 30px;
  font-weight: 600;
  line-height: 1;

  color: #0a0a0b;
`;

export const FilterRow = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 26px;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const FilterButton = styled(Link)`
  height: 38px;

  padding: 0 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  border: ${({ $active }) =>
    $active ? "1.5px solid #4097ff" : "1px solid transparent"};

  background: ${({ $active }) => ($active ? "#E2EFFF" : "#ffffff")};

  color: ${({ $active }) => ($active ? "#4097ff" : "#6C6E71")};

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 18px;
`;

export const ArrayContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ArrayButton = styled.button`
  height: 36px;
  padding: 0 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border: 1px solid #505254;
  border-radius: 999px;

  background: transparent;

  color: #505254;
  font-size: 14px;
  font-weight: 400;

  cursor: pointer;

  img {
    width: 12px;
    height: 12px;

    object-fit: contain;
  }
`;

export const PageArrowContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`;

export const ArrowButton = styled.button`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #e8e8e9;
  border-radius: 50%;

  background: #fff;
  color: #d0d1d2;

  font-size: 24px;
  font-weight: 300;

  cursor: pointer;
`;

export const SortWrapper = styled.div`
  position: relative;
`;

export const SortPopup = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;

  width: 120px;
  padding: 8px;

  display: flex;
  flex-direction: column;
  gap: 6px;

  background: #fff;

  border: 1px solid #e8e8e9;
  border-radius: 12px;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  z-index: 10;
`;

export const SortOption = styled.button`
  width: 100%;
  height: 40px;

  padding: 0 12px;

  border: 0;
  border-radius: 8px;

  background: ${({ $selected }) => ($selected ? "#f1f4f7" : "#fff")};

  font-size: 14px;
  font-weight: ${({ $selected }) => ($selected ? 600 : 400)};
  text-align: left;

  cursor: pointer;

  &:hover {
    background: #f1f4f7;
  }
`;

export const OrderContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 28px;

  align-items: start;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const LoaderWrap = styled.div`
  width: 100%;
  min-height: 300px;

  grid-column: 1 / -1;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #6c6e71;
`;

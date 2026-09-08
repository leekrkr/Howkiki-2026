import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;

  background: #f1f4f8;
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

  color: #111;
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

  gap: 10px;
`;

export const FilterButton = styled.button`
  height: 36px;
  padding: 0 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border: 1px solid #999;
  border-radius: 999px;

  background: transparent;

  color: #555;
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

  border: 1px solid #e2e5e9;
  border-radius: 50%;

  background: #fff;
  color: #c6c9cd;

  font-size: 24px;
  font-weight: 300;

  cursor: pointer;
`;

export const SuggestionContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 24px 28px;

  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const SuggestionContent = styled.div`
  position: relative;

  width: 100%;
  height: 150px;

  padding: 26px 30px 46px;

  background: #fff;
  border-radius: 22px;

  overflow: hidden;
`;

export const SuggestionText = styled.p`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;

  color: #111;

  white-space: pre-line;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const SuggestionDate = styled.span`
  position: absolute;

  right: 30px;
  bottom: 18px;

  font-size: 14px;
  font-weight: 400;

  color: #777;
`;

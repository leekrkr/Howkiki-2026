import styled from "styled-components";
import { Link } from "react-router-dom";

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

/* =========================
   주문 콘텐츠
========================= */

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

/* =========================
   필터
========================= */

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
    $active ? "1.5px solid #4696ff" : "1px solid transparent"};

  background: ${({ $active }) => ($active ? "#E2EFFF" : "#ffffff")};

  color: ${({ $active }) => ($active ? "#4696ff" : "#777")};

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

/* =========================
   주문 카드 목록
========================= */

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

/* =========================
   주문 카드
========================= */

export const OrderContent = styled.div`
  position: relative;

  width: 100%;
  min-width: 0;

  aspect-ratio: 356 / 377;

  padding: 0 clamp(16px, 1.5vw, 20px) clamp(68px, 5vw, 78px);

  background: #fff;
  border-radius: clamp(18px, 1.5vw, 24px);

  overflow: hidden;

  cursor: pointer;
`;

export const OrderHeader = styled.div`
  width: calc(100% + 40px);
  height: 80px;

  margin-left: -20px;

  padding: 0 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #e5e7eb;
`;

export const TableNum = styled.div`
  font-size: 18px;
  font-weight: 600;

  color: #111;
`;

export const OrderNumber = styled.div`
  font-size: 16px;
  font-weight: 500;

  color: #777;
`;

/* =========================
   메뉴
========================= */

export const MenuContainer = styled.div`
  padding: 24px 8px 0;
`;

export const MenuContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const MenuName = styled.div`
  font-size: 15px;
  font-weight: 400;

  color: #111;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MenuQuantity = styled.div`
  margin-left: 16px;

  font-size: 15px;

  color: #111;
`;

export const MoreOrders = styled.div`
  margin-top: 8px;

  font-size: 13px;

  color: #888;
`;

/* =========================
   버튼
========================= */

export const BtnContainer = styled.div`
  position: absolute;

  left: 20px;
  right: 20px;
  bottom: 20px;

  display: flex;
  gap: 10px;
`;

export const OrderCancelBtn = styled.button`
  flex: 1;

  height: 50px;

  border: 0;
  border-radius: 999px;

  background: #e5e7eb;

  color: #777;

  font-size: 15px;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    background: #d9dce0;
  }
`;

export const OrderOkBtn = styled.button`
  flex: 1;

  height: 50px;

  border: 0;
  border-radius: 999px;

  background: #4696ff;

  color: #fff;

  font-size: 15px;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    background: #3489f5;
  }
`;

/* =========================
   로딩
========================= */

export const LoaderWrap = styled.div`
  width: 100%;
  min-height: 300px;

  grid-column: 1 / -1;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #777;
`;

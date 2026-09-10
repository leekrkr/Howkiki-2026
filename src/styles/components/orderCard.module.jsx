import styled from "styled-components";

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

  border-bottom: 1px solid #e8e8e9;
`;

export const TableNum = styled.div`
  font-size: 18px;
  font-weight: 600;

  color: #0a0a0b;
`;

export const OrderNumber = styled.div`
  font-size: 16px;
  font-weight: 500;

  color: #6c6e71;
`;

export const OrderDate = styled.div`
  position: absolute;
  right: 26px;
  bottom: 22px;

  font-size: 14px;
  font-weight: 400;

  color: #6c6e71;
`;

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
  font-size: 16px;
  font-weight: 400;

  color: #0a0a0b;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MenuQuantity = styled.div`
  margin-left: 16px;

  font-size: 16px;

  color: #0a0a0b;
`;

export const MoreOrders = styled.div`
  margin-top: 8px;

  font-size: 13px;

  color: #888;
`;

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

  background: #e8e8e9;

  color: #6c6e71;

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

  background: #4097ff;

  color: #fff;

  font-size: 15px;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    background: #3489f5;
  }
`;

import {
  Overlay,
  ModalContainer,
  TableNumber,
  OrderList,
  EmptyOrder,
  OrderGroup,
  OrderNumber,
  MenuItem,
  MenuName,
  MenuInfo,
  TotalContainer,
  TotalLabel,
  TotalPrice,
  ButtonContainer,
  CloseButton,
  CompleteButton,
} from "../../styles/components/tableModal.module";

export default function TableOrderModal({
  tableNumber,
  orders = [],
  onClose,
  onComplete,
}) {
  const hasOrders = orders.length > 0;

  const totalPrice = orders.reduce(
    (total, order) => total + order.orderPrice,
    0,
  );

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <TableNumber>테이블 {tableNumber}</TableNumber>
        {hasOrders ? (
          <OrderList>
            {orders.map((order) => (
              <OrderGroup key={order.orderId}>
                <OrderNumber>
                  #{String(order.orderId).padStart(3, "0")}
                </OrderNumber>
                {order.orderDetail?.map((menu, index) => (
                  <MenuItem key={index}>
                    <MenuName>{menu.menuName}</MenuName>
                    <MenuInfo>
                      X {menu.quantity}
                      {menu.price && (
                        <> {(menu.price * menu.quantity).toLocaleString()}원</>
                      )}
                    </MenuInfo>
                  </MenuItem>
                ))}
              </OrderGroup>
            ))}
          </OrderList>
        ) : (
          <EmptyOrder>주문 내역이 없습니다.</EmptyOrder>
        )}
        <TotalContainer>
          <TotalLabel>총 주문 금액</TotalLabel>
          <TotalPrice>{totalPrice.toLocaleString()}원</TotalPrice>
        </TotalContainer>
        <ButtonContainer>
          <CloseButton onClick={onClose}>닫기</CloseButton>
          {hasOrders && (
            <CompleteButton onClick={onComplete}>완료</CompleteButton>
          )}
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
}

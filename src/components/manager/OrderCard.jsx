import {
  OrderContent,
  OrderHeader,
  TableNum,
  OrderNumber,
  MenuContainer,
  MenuContent,
  MenuName,
  MenuQuantity,
  MoreOrders,
  BtnContainer,
  OrderCancelBtn,
  OrderOkBtn,
} from "../../styles/manager/order.module";

export default function OrderCard({
  order,
  rightButtonText,
  onCardClick,
  onCancel,
  onRightClick,
}) {
  const hasButtons = onCancel || onRightClick;

  return (
    <OrderContent onClick={onCardClick}>
      <OrderHeader>
        <TableNum>
          {order.isTakeOut ? "포장" : `테이블 ${order.tableNumber}`}
        </TableNum>

        <OrderNumber>#{String(order.orderId).padStart(3, "0")}</OrderNumber>
      </OrderHeader>

      <MenuContainer>
        {order.orderDetail?.slice(0, 5).map((menu, index) => (
          <MenuContent key={index}>
            <MenuName>{menu.menuName}</MenuName>
            <MenuQuantity>{menu.quantity}</MenuQuantity>
          </MenuContent>
        ))}

        {order.orderDetail?.length > 5 && (
          <MoreOrders>+외 {order.orderDetail.length - 5}개</MoreOrders>
        )}
      </MenuContainer>

      {hasButtons && (
        <BtnContainer>
          {onCancel && (
            <OrderCancelBtn
              onClick={(e) => {
                e.stopPropagation();
                onCancel();
              }}
            >
              취소
            </OrderCancelBtn>
          )}

          {onRightClick && (
            <OrderOkBtn
              onClick={(e) => {
                e.stopPropagation();
                onRightClick();
              }}
            >
              {rightButtonText}
            </OrderOkBtn>
          )}
        </BtnContainer>
      )}
    </OrderContent>
  );
}

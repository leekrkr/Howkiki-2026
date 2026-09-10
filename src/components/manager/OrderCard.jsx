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
  OrderDate,
} from "../../styles/components/orderCard.module";

export default function OrderCard({
  order,
  rightButtonText,
  onCardClick,
  onCancel,
  onRightClick,
  showDate = false,
}) {
  const hasButtons = onCancel || onRightClick;

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");

    return `${year}.${month}.${day} ${hour}:${minute}`;
  };

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
      {showDate && order.createdAt && (
        <OrderDate>{formatDate(order.createdAt)}</OrderDate>
      )}

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

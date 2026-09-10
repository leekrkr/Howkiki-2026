import {
  OrderCard,
  OrderTop,
  StatusBadge,
  CancelButton,
  OrderNumber,
  MenuList,
  MenuRow,
  MenuInfo,
  MenuName,
  MenuPrice,
  MenuQuantity,
  CardDivider,
  OrderTotalRow,
  OrderTotalLabel,
  OrderTotalPrice,
} from "../../styles/chatbot/orderSummary.module";

export default function OrderSummaryCard({ order }) {
  const formatPrice = (price) => {
    return price.toLocaleString("ko-KR");
  };

  const getOrderTotal = (menus) => {
    return menus.reduce((sum, menu) => sum + menu.price * menu.quantity, 0);
  };

  const orderTotal = getOrderTotal(order.menus);

  return (
    <OrderCard>
      <OrderTop>
        <StatusBadge>{order.status}</StatusBadge>
        <CancelButton
          $disabled={!order.cancelable}
          disabled={!order.cancelable}
        >
          주문 취소
        </CancelButton>
      </OrderTop>
      <OrderNumber>
        주문 번호 {String(order.orderId).padStart(2, "0")}
      </OrderNumber>
      <CardDivider />
      <MenuList>
        {order.menus.map((menu, index) => (
          <MenuRow key={index}>
            <MenuInfo>
              <MenuName>{menu.name}</MenuName>
              <MenuPrice>{formatPrice(menu.price)}원</MenuPrice>
            </MenuInfo>

            <MenuQuantity>{menu.quantity}개</MenuQuantity>
          </MenuRow>
        ))}
      </MenuList>
      <CardDivider />
      <OrderTotalRow>
        <OrderTotalLabel>주문 금액</OrderTotalLabel>
        <OrderTotalPrice>{formatPrice(orderTotal)}원</OrderTotalPrice>
      </OrderTotalRow>
    </OrderCard>
  );
}

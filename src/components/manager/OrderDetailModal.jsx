import {
  Overlay,
  ModalContainer,
  ModalHeader,
  OrderTitle,
  OrderNumber,
  TableNumber,
  MenuList,
  MenuItem,
  MenuName,
  MenuQuantity,
  CloseButton,
} from "../../styles/components/orderDetailModal.module";

export default function OrderDetailModal({ order, onClose }) {
  if (!order) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <OrderTitle>
            <OrderNumber>#{String(order.orderId).padStart(3, "0")}</OrderNumber>
            주문 내역
          </OrderTitle>
          <TableNumber>
            {order.isTakeOut ? "포장" : `테이블 ${order.tableNumber}`}
          </TableNumber>
        </ModalHeader>
        <MenuList>
          {order.orderDetail?.map((menu, index) => (
            <MenuItem key={index}>
              <MenuName>{menu.menuName}</MenuName>
              <MenuQuantity>{menu.quantity}</MenuQuantity>
            </MenuItem>
          ))}
        </MenuList>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContainer>
    </Overlay>
  );
}

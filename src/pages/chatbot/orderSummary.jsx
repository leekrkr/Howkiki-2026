import { useNavigate } from "react-router-dom";
import closeIcon from "../../assets/icons/close.svg";
import OrderSummaryCard from "../../components/chatbot/OrderSummaryCard";
import {
  Page,
  Container,
  Header,
  CloseButton,
  CloseIcon,
  HeaderTitle,
  Divider,
  TableText,
  TotalSummary,
  TotalLabel,
  TotalPrice,
  OrderList,
} from "../../styles/chatbot/orderSummary.module";

const orders = [
  {
    orderId: 17,
    status: "주문 접수중",
    cancelable: true,
    menus: [
      {
        name: "소룡포",
        price: 7500,
        quantity: 1,
      },
      {
        name: "라구 짜장과 계란 튀김",
        price: 15000,
        quantity: 1,
      },
    ],
  },
  {
    orderId: 9,
    status: "접수된 주문",
    cancelable: false,
    menus: [
      {
        name: "소룡포",
        price: 7500,
        quantity: 1,
      },
      {
        name: "라구 짜장과 계란 튀김",
        price: 15000,
        quantity: 1,
      },
      {
        name: "맑은 우육탕면",
        price: 13900,
        quantity: 1,
      },
    ],
  },
];

export default function OrderSummaryPage() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const formatPrice = (price) => {
    return price.toLocaleString("ko-KR");
  };

  const getOrderTotal = (menus) => {
    return menus.reduce((sum, menu) => sum + menu.price * menu.quantity, 0);
  };

  const totalPrice = orders.reduce(
    (sum, order) => sum + getOrderTotal(order.menus),
    0,
  );

  return (
    <Page>
      <Container>
        <Header>
          <CloseButton onClick={handleClose}>
            <CloseIcon src={closeIcon} alt="닫기" />
          </CloseButton>
          <HeaderTitle>주문 내역</HeaderTitle>
        </Header>
        <Divider />
        <TableText>테이블 2</TableText>
        <TotalSummary>
          <TotalLabel>총 {orders.length}건 주문 금액</TotalLabel>
          <TotalPrice>{formatPrice(totalPrice)}원</TotalPrice>
        </TotalSummary>
        <OrderList>
          {orders.map((order) => (
            <OrderSummaryCard key={order.orderId} order={order} />
          ))}
        </OrderList>
      </Container>
    </Page>
  );
}

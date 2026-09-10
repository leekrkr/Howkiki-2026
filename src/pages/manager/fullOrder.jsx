import { useState, useEffect } from "react";
import useModal from "../../hooks/useModal";
import OrderDetailModal from "../../components/manager/OrderDetailModal";
import PeriodFilterModal from "../../components/manager/PeriodFilterModal";
import SideBar from "../../components/manager/SideBar";
import Header from "../../components/manager/Header";
import OrderCard from "../../components/manager/OrderCard";
import arrowIcon1 from "../../assets/icons/arrow1.svg";
import arrowIcon2 from "../../assets/icons/arrow2.svg";
import arrowDownIcon from "../../assets/icons/arrow-down.svg";
import { mockOrders } from "../../mock/OrderMock";
import {
  Container,
  MainContainer,
  ListContainer,
  Title,
  FilterRow,
  FilterContainer,
  FilterButton,
  ArrowContainer,
  ArrayContainer,
  ArrayButton,
  PageArrowContainer,
  ArrowButton,
  OrderContainer,
  LoaderWrap,
} from "../../styles/manager/order.module";

export default function FullOrderPage() {
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);
  const [detailOrder, setDetailOrder] = useState(null);

  const {
    isOpen: isDetailOpen,
    openModal: openDetailModal,
    closeModal: closeDetailModal,
  } = useModal();

  const fetchOrderData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const sortedOrders = [...mockOrders.data]
        .filter(
          (order) =>
            ["SERVED", "COMPLETED"].includes(order.status) &&
            order.isTakeOut === false,
        )
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      setOrderData({
        ...mockOrders,
        data: sortedOrders,
      });
    } catch (error) {
      console.error("주문 데이터 가져오기 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  const handleOpenDetailModal = (order) => {
    setDetailOrder(order);
    openDetailModal();
  };

  const handleCloseDetailModal = () => {
    setDetailOrder(null);
    closeDetailModal();
  };

  return (
    <>
      <Container>
        <SideBar />
        <MainContainer>
          <Header />
          <ListContainer>
            <Title>주문</Title>
            <FilterRow>
              <FilterContainer>
                <FilterButton to="/1/waiting">주문 대기</FilterButton>
                <FilterButton to="/1/preparing">조리 중</FilterButton>
                <FilterButton to="/1/completeorder">판매 내역</FilterButton>
                <FilterButton to="/1/fullorder" $active>
                  주문 조회
                </FilterButton>
              </FilterContainer>
              <ArrowContainer>
                <ArrayContainer>
                  <ArrayButton onClick={() => setIsPeriodOpen(true)}>
                    기간 <img src={arrowDownIcon} alt="" />
                  </ArrayButton>
                  <ArrayButton>
                    최신순 <img src={arrowDownIcon} alt="" />
                  </ArrayButton>
                </ArrayContainer>
                <PageArrowContainer>
                  <ArrowButton>
                    <img src={arrowIcon1} alt="" />
                  </ArrowButton>
                  <ArrowButton>
                    <img src={arrowIcon2} alt="" />
                  </ArrowButton>
                </PageArrowContainer>
              </ArrowContainer>
            </FilterRow>
            <OrderContainer>
              {isLoading ? (
                <LoaderWrap>로딩중...</LoaderWrap>
              ) : (
                orderData?.data.map((order) => (
                  <OrderCard
                    key={order.orderId}
                    order={order}
                    showDate
                    onCardClick={() => handleOpenDetailModal(order)}
                  />
                ))
              )}
            </OrderContainer>
          </ListContainer>
        </MainContainer>
      </Container>
      {isDetailOpen && detailOrder && (
        <OrderDetailModal
          order={detailOrder}
          onClose={handleCloseDetailModal}
        />
      )}
      <PeriodFilterModal
        isOpen={isPeriodOpen}
        onClose={() => setIsPeriodOpen(false)}
        onSearch={(value) => {
          console.log(value);
          setIsPeriodOpen(false);
        }}
      />
    </>
  );
}

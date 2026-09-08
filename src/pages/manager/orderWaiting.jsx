import { useState, useEffect } from "react";
import useModal from "../../hooks/useModal";
import SideBar from "../../components/manager/SideBar";
import Header from "../../components/manager/Header";
import OrderCard from "../../components/manager/OrderCard";
import CancelModal from "../../components/manager/CancelModal";
import AcceptModal from "../../components/manager/AcceptModal";
import OrderDetailModal from "../../components/manager/OrderDetailModal";
import arrowIcon1 from "../../assets/icons/arrow1.svg";
import arrowIcon2 from "../../assets/icons/arrow2.svg";
import { mockOrders } from "../../mock/OrderMock";
import {
  Container,
  MainContainer,
  ListContainer,
  Title,
  FilterRow,
  FilterContainer,
  FilterButton,
  PageArrowContainer,
  ArrowButton,
  OrderContainer,
  LoaderWrap,
} from "../../styles/manager/order.module";

export default function OrderWaitingPage() {
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [detailOrder, setDetailOrder] = useState(null);

  const {
    isOpen: isCancelOpen,
    openModal: openCancelModal,
    closeModal: closeCancelModal,
  } = useModal();

  const {
    isOpen: isAcceptOpen,
    openModal: openAcceptModal,
    closeModal: closeAcceptModal,
  } = useModal();

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
          (order) => order.status === "WAITING" && order.isTakeOut === false,
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

  const handleCancel = (orderId) => {
    setOrderData((prev) => ({
      ...prev,
      data: prev.data.filter((order) => order.orderId !== orderId),
    }));
  };

  const handleAccept = (orderId) => {
    setOrderData((prev) => ({
      ...prev,
      data: prev.data.filter((order) => order.orderId !== orderId),
    }));
  };

  const handleOpenCancelModal = (order) => {
    setSelectedOrder(order);
    openCancelModal();
  };

  const handleCloseCancelModal = () => {
    setSelectedOrder(null);
    closeCancelModal();
  };

  const handleOpenAcceptModal = (order) => {
    setSelectedOrder(order);
    openAcceptModal();
  };

  const handleCloseAcceptModal = () => {
    setSelectedOrder(null);
    closeAcceptModal();
  };

  const handleConfirmCancel = ({ reason, menus }) => {
    if (!selectedOrder) return;

    console.log("취소 사유:", reason);
    console.log("재료 소진 메뉴:", menus);

    handleCancel(selectedOrder.orderId);
    handleCloseCancelModal();
  };

  const handleConfirmAccept = (time) => {
    if (!selectedOrder) return;

    console.log("준비 예상 시간:", time, "분");

    handleAccept(selectedOrder.orderId);
    handleCloseAcceptModal();
  };

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
                <FilterButton to="/1/waiting" $active>
                  주문 대기
                </FilterButton>
                <FilterButton to="/1/preparing">조리 중</FilterButton>
                <FilterButton to="/1/completeorder">판매 내역</FilterButton>
                <FilterButton to="/1/fullorder">주문 조회</FilterButton>
              </FilterContainer>
              <PageArrowContainer>
                <ArrowButton>
                  <img src={arrowIcon1} alt="" />
                </ArrowButton>
                <ArrowButton>
                  <img src={arrowIcon2} alt="" />
                </ArrowButton>
              </PageArrowContainer>
            </FilterRow>
            <OrderContainer>
              {isLoading ? (
                <LoaderWrap>로딩중...</LoaderWrap>
              ) : (
                orderData?.data.map((order) => (
                  <OrderCard
                    key={order.orderId}
                    order={order}
                    rightButtonText="수락"
                    onCardClick={() => handleOpenDetailModal(order)}
                    onCancel={() => handleOpenCancelModal(order)}
                    onRightClick={() => handleOpenAcceptModal(order)}
                  />
                ))
              )}
            </OrderContainer>
          </ListContainer>
        </MainContainer>
      </Container>
      {isCancelOpen && selectedOrder && (
        <CancelModal
          order={selectedOrder}
          onClose={handleCloseCancelModal}
          onConfirm={handleConfirmCancel}
        />
      )}
      {isAcceptOpen && selectedOrder && (
        <AcceptModal
          tableNumber={selectedOrder.tableNumber}
          onClose={handleCloseAcceptModal}
          onConfirm={handleConfirmAccept}
        />
      )}
      {isDetailOpen && detailOrder && (
        <OrderDetailModal
          order={detailOrder}
          onClose={handleCloseDetailModal}
        />
      )}
    </>
  );
}

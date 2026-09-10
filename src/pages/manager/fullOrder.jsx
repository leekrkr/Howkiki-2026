import { useState, useEffect, useRef } from "react";
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
  SortWrapper,
  SortPopup,
  SortOption,
  PageArrowContainer,
  ArrowButton,
  OrderContainer,
  LoaderWrap,
} from "../../styles/manager/order.module";

export default function FullOrderPage() {
  const sortRef = useRef(null);
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);
  const [detailOrder, setDetailOrder] = useState(null);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortType, setSortType] = useState("최신순");

  const {
    isOpen: isDetailOpen,
    openModal: openDetailModal,
    closeModal: closeDetailModal,
  } = useModal();

  const handleSortSelect = (type) => {
    setSortType(type);
    setIsSortOpen(false);
  };

  const handleOpenDetailModal = (order) => {
    setDetailOrder(order);
    openDetailModal();
  };

  const handleCloseDetailModal = () => {
    setDetailOrder(null);
    closeDetailModal();
  };

  const fetchOrderData = async () => {
    try {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 500));

      setOrderData(mockOrders);
    } catch (error) {
      console.error("주문 데이터 가져오기 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  // 최신순 / 오래된순 정렬
  const sortedOrders = orderData?.data
    ? [...orderData.data].sort((a, b) => {
        const aTime = new Date(a.createdAt).getTime();
        const bTime = new Date(b.createdAt).getTime();

        if (sortType === "최신순") {
          return bTime - aTime;
        }

        return aTime - bTime;
      })
    : [];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
                    기간
                    <img src={arrowDownIcon} alt="" />
                  </ArrayButton>
                  <SortWrapper ref={sortRef}>
                    <ArrayButton onClick={() => setIsSortOpen((prev) => !prev)}>
                      {sortType}
                      <img src={arrowDownIcon} alt="" />
                    </ArrayButton>
                    {isSortOpen && (
                      <SortPopup>
                        <SortOption
                          $selected={sortType === "최신순"}
                          onClick={() => handleSortSelect("최신순")}
                        >
                          최신순
                        </SortOption>
                        <SortOption
                          $selected={sortType === "오래된순"}
                          onClick={() => handleSortSelect("오래된순")}
                        >
                          오래된순
                        </SortOption>
                      </SortPopup>
                    )}
                  </SortWrapper>
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
                sortedOrders.map((order) => (
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

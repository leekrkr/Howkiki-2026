import { useState } from "react";

import SideBar from "../../components/manager/SideBar";
import Header from "../../components/manager/Header";
import TableModal from "../../components/manager/TableModal";

import useModal from "../../hooks/useModal";
import { mockOrders } from "../../mock/OrderMock";

import {
  Container,
  MainContainer,
  ListContainer,
  Title,
  TableMap,
  TableItem,
  ChairRow,
  Chair,
  TableBox,
  TableName,
  OrderNumber,
} from "../../styles/manager/tableManage.module";

const tables = [
  {
    id: 1,
    name: "테이블 1",
    x: 3,
    y: 8,
    width: 28,
    height: 170,
    topChairs: 3,
    bottomChairs: 3,
  },
  {
    id: 2,
    name: "테이블 2",
    x: 36,
    y: 8,
    width: 20,
    height: 170,
    topChairs: 2,
    bottomChairs: 2,
  },
  {
    id: 3,
    name: "테이블 3",
    x: 62,
    y: 8,
    width: 20,
    height: 170,
    topChairs: 2,
    bottomChairs: 2,
  },
  {
    id: 4,
    name: "테이블 4",
    x: 87,
    y: 8,
    width: 11,
    height: 170,
    topChairs: 1,
    bottomChairs: 1,
  },
  {
    id: 5,
    name: "테이블 5",
    x: 3,
    y: 55,
    width: 20,
    height: 170,
    topChairs: 2,
    bottomChairs: 2,
  },
  {
    id: 6,
    name: "테이블 6",
    x: 29,
    y: 55,
    width: 12,
    height: 170,
    topChairs: 1,
    bottomChairs: 1,
  },
  {
    id: 7,
    name: "테이블 7",
    x: 47,
    y: 55,
    width: 20,
    height: 170,
    topChairs: 2,
    bottomChairs: 2,
  },
];

export default function TableManagePage() {
  const [selectedTable, setSelectedTable] = useState(null);

  const {
    isOpen: isTableModalOpen,
    openModal: openTableModal,
    closeModal: closeTableModal,
  } = useModal();

  const handleOpenTableModal = (table) => {
    setSelectedTable(table);
    openTableModal();
  };

  const handleCloseTableModal = () => {
    setSelectedTable(null);
    closeTableModal();
  };

  // 현재 테이블에서 진행 중인 주문
  const getTableOrders = (tableId) => {
    return mockOrders.data.filter(
      (order) =>
        order.tableNumber === tableId &&
        order.isTakeOut === false &&
        ["WAITING", "PREPARING", "SERVED"].includes(order.status),
    );
  };

  // 모달에 넘겨줄 주문
  const selectedTableOrders = selectedTable
    ? getTableOrders(selectedTable.id)
    : [];

  const handleCompleteTable = () => {
    console.log("테이블 완료:", selectedTable?.id);
    handleCloseTableModal();
  };

  return (
    <>
      <Container>
        <SideBar />

        <MainContainer>
          <Header />

          <ListContainer>
            <Title>테이블</Title>

            <TableMap>
              {tables.map((table) => {
                const tableOrders = getTableOrders(table.id);
                const hasOrder = tableOrders.length > 0;

                // 가장 최근 주문
                const latestOrder = [...tableOrders].sort(
                  (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
                )[0];

                return (
                  <TableItem
                    key={table.id}
                    $x={table.x}
                    $y={table.y}
                    $width={table.width}
                    onClick={() => handleOpenTableModal(table)}
                  >
                    <ChairRow>
                      {Array.from({
                        length: table.topChairs,
                      }).map((_, index) => (
                        <Chair key={index} $active={hasOrder} />
                      ))}
                    </ChairRow>

                    <TableBox $height={table.height} $active={hasOrder}>
                      <TableName $active={hasOrder}>{table.name}</TableName>

                      {hasOrder && latestOrder && (
                        <OrderNumber>
                          #{String(latestOrder.orderId).padStart(3, "0")}
                        </OrderNumber>
                      )}
                    </TableBox>

                    <ChairRow>
                      {Array.from({
                        length: table.bottomChairs,
                      }).map((_, index) => (
                        <Chair key={index} $active={hasOrder} />
                      ))}
                    </ChairRow>
                  </TableItem>
                );
              })}
            </TableMap>
          </ListContainer>
        </MainContainer>
      </Container>

      {isTableModalOpen && selectedTable && (
        <TableModal
          tableNumber={selectedTable.id}
          orders={selectedTableOrders}
          onClose={handleCloseTableModal}
          onComplete={handleCompleteTable}
        />
      )}
    </>
  );
}

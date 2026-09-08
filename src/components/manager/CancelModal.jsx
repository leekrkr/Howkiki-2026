import { useState } from "react";
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  TableNumber,
  ReasonContainer,
  ReasonButton,
  MenuList,
  MenuItem,
  MenuName,
  CheckBox,
  ButtonContainer,
  CancelButton,
  NextButton,
} from "../../styles/components/cancelModal.module";

export default function CancelModal({ order, onClose, onConfirm }) {
  const { tableNumber, orderDetail, isTakeOut } = order;
  const [step, setStep] = useState(1);
  const [selectedReason, setSelectedReason] = useState(null);
  const [selectedMenus, setSelectedMenus] = useState([]);

  const reasons = ["재료 소진", "라스트 오더 종료", "기타"];

  const handleReasonSelect = (reason) => {
    setSelectedReason(reason);
  };

  const handleMenuSelect = (menuName) => {
    setSelectedMenus((prev) =>
      prev.includes(menuName)
        ? prev.filter((menu) => menu !== menuName)
        : [...prev, menuName],
    );
  };

  const handleButtonClick = () => {
    if (!selectedReason) return;

    if (selectedReason === "재료 소진" && step === 1) {
      setStep(2);
      return;
    }

    onConfirm({
      reason: selectedReason,
      menus: selectedMenus,
    });
  };

  const isDisabled = step === 1 ? !selectedReason : selectedMenus.length === 0;

  const buttonText =
    step === 1 && selectedReason === "재료 소진" ? "다음" : "완료";

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            {step === 1
              ? "취소 이유를 선택해주세요."
              : "재료 소진된 메뉴를 선택해주세요."}
          </ModalTitle>
          <TableNumber>
            {isTakeOut ? "포장" : `테이블 ${tableNumber}`}
          </TableNumber>
        </ModalHeader>
        {step === 1 ? (
          <ReasonContainer>
            {reasons.map((reason) => (
              <ReasonButton
                key={reason}
                $active={selectedReason === reason}
                onClick={() => handleReasonSelect(reason)}
              >
                {reason}
              </ReasonButton>
            ))}
          </ReasonContainer>
        ) : (
          <MenuList>
            {orderDetail?.map((menu, index) => {
              const isSelected = selectedMenus.includes(menu.menuName);

              return (
                <MenuItem
                  key={index}
                  onClick={() => handleMenuSelect(menu.menuName)}
                >
                  <MenuName>{menu.menuName}</MenuName>

                  <CheckBox $active={isSelected}>{isSelected && "✓"}</CheckBox>
                </MenuItem>
              );
            })}
          </MenuList>
        )}
        <ButtonContainer>
          <CancelButton onClick={onClose}>닫기</CancelButton>
          <NextButton onClick={handleButtonClick} disabled={isDisabled}>
            {buttonText}
          </NextButton>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
}

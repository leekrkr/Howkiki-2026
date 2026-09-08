import { useState } from "react";
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  TableNumber,
  TimeContainer,
  TimeButton,
  TimeInput,
  ButtonContainer,
  CancelButton,
  CompleteButton,
} from "../../styles/components/acceptModal.module";

export default function AcceptModal({ tableNumber, onClose, onConfirm }) {
  const [step, setStep] = useState(1);
  const [selectedTime, setSelectedTime] = useState(null);
  const [customTime, setCustomTime] = useState("");

  const times = [5, 10, 15];

  const buttonText = step === 1 && selectedTime === "custom" ? "다음" : "완료";

  const handleSelect = (value) => {
    setSelectedTime(value);
  };

  const handleBack = () => {
    setStep(1);
    setCustomTime("");
  };

  const handleComplete = () => {
    if (step === 1) {
      if (selectedTime === null) return;

      if (selectedTime === "custom") {
        setStep(2);
        return;
      }

      onConfirm(selectedTime);
      return;
    }

    if (!customTime.trim()) return;

    onConfirm(Number(customTime));
  };

  const isDisabled =
    step === 1 ? selectedTime === null : customTime.trim() === "";

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            {step === 1
              ? "준비 예상 시간을 선택해주세요."
              : "준비 예상 시간을 입력해주세요."}
          </ModalTitle>
          {step === 1 && <TableNumber>테이블 {tableNumber}</TableNumber>}
        </ModalHeader>
        {step === 1 ? (
          <TimeContainer>
            {times.map((time) => (
              <TimeButton
                key={time}
                $active={selectedTime === time}
                onClick={() => handleSelect(time)}
              >
                {time}분
              </TimeButton>
            ))}
            <TimeButton
              $active={selectedTime === "custom"}
              onClick={() => handleSelect("custom")}
            >
              직접 입력
            </TimeButton>
          </TimeContainer>
        ) : (
          <TimeInput
            type="number"
            value={customTime}
            onChange={(e) => setCustomTime(e.target.value)}
            min="1"
            autoFocus
          />
        )}
        <ButtonContainer>
          <CancelButton onClick={step === 1 ? onClose : handleBack}>
            {step === 1 ? "닫기" : "뒤로"}
          </CancelButton>
          <CompleteButton onClick={handleComplete} disabled={isDisabled}>
            {buttonText}
          </CompleteButton>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
}

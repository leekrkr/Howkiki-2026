import { useState } from "react";
import closeIcon from "../../assets/icons/close.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import calendarActiveIcon from "../../assets/icons/calendar-active.svg";
import {
  Overlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  Section,
  SectionTitle,
  PeriodButtons,
  PeriodButton,
  DateRangeBox,
  DateItem,
  DateIcon,
  DateText,
  RangeDivider,
  ModalFooter,
  ResetButton,
  SearchButton,
} from "../../styles/components/periodFilterModal.module";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};

export default function PeriodFilterModal({ isOpen, onClose, onSearch }) {
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [startDate, setStartDate] = useState("");

  const today = new Date();
  const endDate = formatDate(today);

  if (!isOpen) return null;

  const isDateSelected = !!startDate;

  const periodMonths = {
    "1개월": 1,
    "3개월": 3,
    "6개월": 6,
    "1년": 12,
  };

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);

    const date = new Date();

    date.setMonth(date.getMonth() - periodMonths[period]);

    setStartDate(formatDate(date));
  };

  const handleReset = () => {
    setSelectedPeriod(null);
    setStartDate("");
  };

  const handleSearch = () => {
    if (!startDate) return;

    onSearch?.({
      selectedPeriod,
      startDate,
      endDate,
    });
  };

  return (
    <Overlay>
      <Modal>
        <ModalHeader>
          <ModalTitle>기간 조회</ModalTitle>
          <CloseButton onClick={onClose}>
            <img src={closeIcon} alt="닫기" />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <Section>
            <SectionTitle>기간 선택</SectionTitle>
            <PeriodButtons>
              {["1개월", "3개월", "6개월", "1년"].map((period) => (
                <PeriodButton
                  key={period}
                  $active={selectedPeriod === period}
                  onClick={() => handlePeriodSelect(period)}
                >
                  {period}
                </PeriodButton>
              ))}
            </PeriodButtons>
          </Section>
          <Section>
            <SectionTitle>직접 선택</SectionTitle>
            <DateRangeBox $active={isDateSelected}>
              <DateItem>
                <DateIcon>
                  <img
                    src={isDateSelected ? calendarActiveIcon : calendarIcon}
                    alt=""
                  />
                </DateIcon>
                <DateText $active={isDateSelected}>
                  {startDate || "시작일 선택"}
                </DateText>
              </DateItem>
              <RangeDivider>~</RangeDivider>
              <DateItem>
                <DateIcon>
                  <img
                    src={isDateSelected ? calendarActiveIcon : calendarIcon}
                    alt=""
                  />
                </DateIcon>
                <DateText $active={isDateSelected}>{endDate}</DateText>
              </DateItem>
            </DateRangeBox>
          </Section>
        </ModalBody>
        <ModalFooter>
          <ResetButton onClick={handleReset}>초기화</ResetButton>
          <SearchButton onClick={handleSearch} disabled={!isDateSelected}>
            조회하기
          </SearchButton>
        </ModalFooter>
      </Modal>
    </Overlay>
  );
}

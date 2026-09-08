import {
  Overlay,
  ModalContainer,
  ContentBox,
  SuggestionText,
  DateText,
  CloseButton,
} from "../../styles/components/suggestionModal.module";

export default function SuggestionModal({ suggestion, onClose }) {
  if (!suggestion) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일 ${String(date.getHours()).padStart(
      2,
      "0",
    )}:${String(date.getMinutes()).padStart(2, "0")}`;
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ContentBox>
          <SuggestionText>{suggestion.content}</SuggestionText>
          <DateText>{formatDate(suggestion.createdAt)}</DateText>
        </ContentBox>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContainer>
    </Overlay>
  );
}

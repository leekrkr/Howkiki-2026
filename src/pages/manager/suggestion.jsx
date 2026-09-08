import { useState } from "react";
import SideBar from "../../components/manager/SideBar";
import Header from "../../components/manager/Header";
import SuggestionModal from "../../components/manager/SuggestionModal";
import PeriodFilterModal from "../../components/manager/PeriodFilterModal";
import useModal from "../../hooks/useModal";
import arrowIcon1 from "../../assets/icons/arrow1.svg";
import arrowIcon2 from "../../assets/icons/arrow2.svg";
import arrowDownIcon from "../../assets/icons/arrow-down.svg";
import { mockSuggestions } from "../../mock/SuggestionMock";
import {
  Container,
  Title,
  MainContainer,
  ListContainer,
  FilterRow,
  FilterContainer,
  FilterButton,
  PageArrowContainer,
  ArrowButton,
  SuggestionContainer,
  SuggestionContent,
  SuggestionText,
  SuggestionDate,
} from "../../styles/manager/suggestion.module";

export default function SuggestionPage() {
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);

  const {
    isOpen: isSuggestionModalOpen,
    openModal: openSuggestionModal,
    closeModal: closeSuggestionModal,
  } = useModal();

  const handleOpenSuggestionModal = (suggestion) => {
    setSelectedSuggestion(suggestion);
    openSuggestionModal();
  };

  const handleCloseSuggestionModal = () => {
    setSelectedSuggestion(null);
    closeSuggestionModal();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  };

  return (
    <>
      <Container>
        <SideBar />

        <MainContainer>
          <Header />

          <ListContainer>
            <Title>건의 사항</Title>

            <FilterRow>
              <FilterContainer>
                <FilterButton onClick={() => setIsPeriodOpen(true)}>
                  기간
                  <img src={arrowDownIcon} alt="" />
                </FilterButton>

                <FilterButton>
                  최신순
                  <img src={arrowDownIcon} alt="" />
                </FilterButton>
              </FilterContainer>

              <PageArrowContainer>
                <ArrowButton>
                  <img src={arrowIcon1} alt="이전" />
                </ArrowButton>

                <ArrowButton>
                  <img src={arrowIcon2} alt="다음" />
                </ArrowButton>
              </PageArrowContainer>
            </FilterRow>

            <SuggestionContainer>
              {mockSuggestions.data.map((suggestion) => (
                <SuggestionContent
                  key={suggestion.suggestionId}
                  onClick={() => handleOpenSuggestionModal(suggestion)}
                >
                  <SuggestionText>{suggestion.content}</SuggestionText>

                  <SuggestionDate>
                    {formatDate(suggestion.createdAt)}
                  </SuggestionDate>
                </SuggestionContent>
              ))}
            </SuggestionContainer>
          </ListContainer>
        </MainContainer>
      </Container>

      {isSuggestionModalOpen && selectedSuggestion && (
        <SuggestionModal
          suggestion={selectedSuggestion}
          onClose={handleCloseSuggestionModal}
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

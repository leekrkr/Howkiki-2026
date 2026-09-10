import { useState, useEffect, useRef } from "react";
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
  ArrayRow,
  ArrayContainer,
  ArrayButton,
  SortWrapper,
  SortPopup,
  SortOption,
  PageArrowContainer,
  ArrowButton,
  SuggestionContainer,
  SuggestionContent,
  SuggestionText,
  SuggestionDate,
} from "../../styles/manager/suggestion.module";

export default function SuggestionPage() {
  const sortRef = useRef(null);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortType, setSortType] = useState("최신순");

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

  const handleSortSelect = (type) => {
    setSortType(type);
    setIsSortOpen(false);
  };

  const sortedSuggestions = [...mockSuggestions.data].sort((a, b) => {
    const aTime = new Date(a.createdAt).getTime();
    const bTime = new Date(b.createdAt).getTime();

    if (sortType === "최신순") {
      return bTime - aTime;
    }

    return aTime - bTime;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  };

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
            <Title>건의 사항</Title>
            <ArrayRow>
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
                  <img src={arrowIcon1} alt="이전" />
                </ArrowButton>
                <ArrowButton>
                  <img src={arrowIcon2} alt="다음" />
                </ArrowButton>
              </PageArrowContainer>
            </ArrayRow>
            <SuggestionContainer>
              {sortedSuggestions.map((suggestion) => (
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

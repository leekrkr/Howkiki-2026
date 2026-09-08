import { useNavigate } from "react-router-dom";
import checkIcon from "../../assets/icons/check.svg";
import {
  Page,
  Container,
  SafeContent,
  SuccessContainer,
  CheckContainer,
  CheckIcon,
  SuccessText,
  BackButton,
} from "../../styles/chatbot/chatOrderSuccess.module";

export default function ChatOrderSuccess() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/chatstart/1/1");
  };

  return (
    <Page>
      <Container>
        <SafeContent>
          <SuccessContainer>
            <CheckContainer>
              <CheckIcon src={checkIcon} alt="주문 완료" />
            </CheckContainer>
            <SuccessText>주문이 완료되었습니다!</SuccessText>
            <BackButton onClick={handleBack}>돌아가기</BackButton>
          </SuccessContainer>
        </SafeContent>
      </Container>
    </Page>
  );
}

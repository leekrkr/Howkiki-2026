import { useNavigate } from "react-router-dom";
import logoIcon from "../../assets/icons/logo.svg";
import {
  Page,
  Container,
  SafeContent,
  LogoWrap,
  LogoImage,
  LogoText,
  Button,
} from "../../styles/chatbot/chatbotStart.module";

export default function ChatBotStart() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/chatbot/1/1");
  };

  return (
    <Page>
      <Container>
        <SafeContent>
          <LogoWrap>
            <LogoImage src={logoIcon} alt="HowKIKI" />
            <LogoText>HowKIKI</LogoText>
          </LogoWrap>
          <Button onClick={handleStart}>시작하기</Button>
        </SafeContent>
      </Container>
    </Page>
  );
}

import { useNavigate } from "react-router-dom";
import {
  Container,
  Content,
  Logo,
  Title,
  Description,
  ButtonContainer,
  ModeButton,
} from "../styles/howkiki.module";

import logo from "../assets/icons/logo.svg";

export default function HowkikiPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Logo src={logo} alt="HowKIKI Logo" />
        <Title>HowKIKI</Title>
        <Description>
          고객의 상황을 반영한 응대와 주문 결제 자동화를
          <br />
          제공하는 휴먼터치 AI 챗오더
        </Description>
        <ButtonContainer>
          <ModeButton onClick={() => navigate("/chatbotstart/1/1")}>
            Chatbot Mode
          </ModeButton>
          <ModeButton onClick={() => navigate("/1")}>Manager Mode</ModeButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
}

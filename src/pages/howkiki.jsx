import { useNavigate } from "react-router-dom";
import {
  Container,
  Content,
  Logo,
  Title,
  Description,
  ButtonContainer,
  ModeButton,
  ProjectNote,
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
      <ProjectNote>
        기존에 직접 디자인 및 프론트엔드 개발을 진행했던 프로젝트를 바탕으로,
        <br />
        UI/UX를 새롭게 개선하고 퍼블리싱했습니다. 현재 API 만료로 인해 실시간
        채팅 및 알림 기능은 제한되어 있습니다.
      </ProjectNote>
    </Container>
  );
}

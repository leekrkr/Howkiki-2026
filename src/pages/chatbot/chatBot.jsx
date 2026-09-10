import { useNavigate } from "react-router-dom";
import logoIcon from "../../assets/icons/logo.svg";
import sendIcon from "../../assets/icons/send.svg";
import orderSummaryIcon from "../../assets/icons/ordersummary.svg";
import menuImage from "../../assets/images/menu.png";
import {
  Page,
  Container,
  SafeContent,
  Header,
  HeaderTitle,
  ChatArea,
  MessageGroup,
  BotProfile,
  LogoImage,
  BotBubble,
  UserBubble,
  MessageTime,
  MenuImage,
  InputArea,
  OrderSummaryButton,
  OrderSummaryIcon,
  InputBox,
  Input,
  SendButton,
  SendIcon,
} from "../../styles/chatbot/chatbot.module";

export default function ChatBot() {
  const navigate = useNavigate();

  const handleOrderSummary = () => {
    navigate("/ordersummary/1/1");
  };

  return (
    <Page>
      <Container>
        <SafeContent>
          <Header>
            <HeaderTitle>KIKI</HeaderTitle>
          </Header>
          <ChatArea>
            <MessageGroup>
              <BotProfile>
                <LogoImage src={logoIcon} alt="HowKIKI" />
              </BotProfile>
              <BotBubble>호우SUM에 오신 것을 환영합니다!</BotBubble>
              <BotBubble>
                주문 또는 문의 내용을 입력해 주세요.
                <br />
                대화를 종료하려면 ‘종료’ 또는 ‘그만’을 입력해 주세요.
              </BotBubble>
              <MessageTime>14:28</MessageTime>
            </MessageGroup>
            <MessageGroup $isUser>
              <UserBubble>라구 짜장과 계란튀김이 뭐야?</UserBubble>
              <MessageTime $isUser>14:28</MessageTime>
            </MessageGroup>
            <MessageGroup>
              <BotProfile>
                <LogoImage src={logoIcon} alt="HowKIKI" />
              </BotProfile>
              <BotBubble>
                그 메뉴는 라구 짜장과 계란 튀김을 올린 홍콩식 솥밥입니다. 고기,
                야채 등 다양한 재료가 올라갑니다.
              </BotBubble>
              <MenuImage src={menuImage} alt="라구 짜장과 계란튀김" />
              <MessageTime>14:29</MessageTime>
            </MessageGroup>
          </ChatArea>
          <InputArea>
            <OrderSummaryButton onClick={handleOrderSummary}>
              <OrderSummaryIcon src={orderSummaryIcon} alt="주문 내역" />
            </OrderSummaryButton>
            <InputBox>
              <Input placeholder="메시지를 입력해주세요" />
              <SendButton>
                <SendIcon src={sendIcon} alt="HowKIKI" />
              </SendButton>
            </InputBox>
          </InputArea>
        </SafeContent>
      </Container>
    </Page>
  );
}

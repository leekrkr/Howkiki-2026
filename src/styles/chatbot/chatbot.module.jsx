import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  justify-content: center;

  overflow: hidden;

  background: #fff;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 430px;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  background: #f1f4f7;
`;

export const SafeContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const Header = styled.header`
  width: 100%;
  flex-shrink: 0;

  padding-top: calc(env(safe-area-inset-top) + 20px);
  padding-bottom: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-family: "LEXEND", sans-serif;

  color: #4097ff;
`;

export const ChatArea = styled.div`
  width: 100%;

  flex: 1;
  min-height: 0;

  padding: 0 16px 110px;

  overflow-y: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MessageGroup = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 8px;

  margin-bottom: 16px;

  align-items: ${({ $isUser }) => ($isUser ? "flex-end" : "flex-start")};
`;

export const BotProfile = styled.div`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 4px;

  border-radius: 50%;

  background: #fff;
`;

export const LogoImage = styled.img`
  width: 20px;
  height: auto;
`;

export const BotBubble = styled.div`
  width: fit-content;
  max-width: 74%;

  padding: 14px 16px;

  border-radius: 0 22px 22px 22px;

  background: #fff;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.55;

  color: #0a0a0b;
`;

export const UserBubble = styled.div`
  width: fit-content;
  max-width: 74%;

  padding: 14px 16px;

  border-radius: 22px 22px 0 22px;

  background: #4097ff;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;

  color: #fff;
`;

export const MessageTime = styled.div`
  font-size: 11px;
  font-weight: 400;

  color: #505254;

  align-self: ${({ $isUser }) => ($isUser ? "flex-end" : "flex-start")};
`;

export const MenuImage = styled.img`
  width: 164px;
  height: 164px;

  margin-top: 2px;

  object-fit: cover;

  border: 12px solid #fff;
  border-radius: 0 20px 20px 20px;
`;

export const InputArea = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);

  width: 100%;
  max-width: 430px;

  padding: 12px 16px calc(12px + env(safe-area-inset-bottom));

  display: flex;
  align-items: center;
  gap: 16px;

  background: #f1f4f7;

  z-index: 100;
`;

export const OrderButton = styled.button`
  width: 48px;
  height: 48px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;
  border-radius: 50%;

  background: #e0e3e6;

  cursor: pointer;
`;

export const OrderIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const InputBox = styled.div`
  flex: 1;
  height: 56px;

  display: flex;
  align-items: center;

  padding: 6px 8px 6px 20px;

  border-radius: 999px;

  background: #fff;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 0;

  border: 0;
  outline: none;

  background: transparent;

  font-size: 14px;
  font-weight: 400;

  color: #0a0a0b;

  &::placeholder {
    color: #a2a3a5;
  }
`;

export const SendButton = styled.button`
  width: 42px;
  height: 42px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 50%;

  background: #4097ff;

  cursor: pointer;
`;

export const SendIcon = styled.img`
  width: 24px;
  height: 24px;
`;

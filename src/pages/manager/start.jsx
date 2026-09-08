import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoIcon from "../../assets/icons/logo.svg";
import {
  Container,
  LogoSection,
  LogoWrap,
  LogoImage,
  LogoText,
  LoginSection,
  LoginBox,
  LoginTitle,
  LoginDescription,
  LoginForm,
  Input,
  LoginButton,
} from "../../styles/manager/start.module";

export default function StartPage() {
  const navigate = useNavigate();

  const [storeName, setStoreName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!storeName.trim() || !password.trim()) {
      return;
    }

    navigate("/1/waiting");
  };

  const isDisabled = !storeName.trim() || !password.trim();

  return (
    <Container>
      <LogoSection>
        <LogoWrap>
          <LogoImage src={logoIcon} alt="HowKIKI" />
          <LogoText>HowKIKI</LogoText>
        </LogoWrap>
      </LogoSection>

      <LoginSection>
        <LoginBox>
          <LoginTitle>매장 로그인</LoginTitle>

          <LoginDescription>등록된 가게 정보를 입력해 주세요.</LoginDescription>

          <LoginForm onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="가게 이름을 입력해주세요."
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />

            <Input
              type="password"
              placeholder="비밀 번호를 입력해주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <LoginButton type="submit" disabled={isDisabled}>
              로그인
            </LoginButton>
          </LoginForm>
        </LoginBox>
      </LoginSection>
    </Container>
  );
}

import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;

  overflow: hidden;
`;

export const LogoSection = styled.section`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
`;

export const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 22px;
`;

export const LogoImage = styled.img`
  width: 118px;
  height: auto;
`;

export const LogoText = styled.div`
  font-size: 30px;
  font-weight: 400;
  font-family: "LEXEND", sans-serif;

  color: #4097ff;
`;

export const LoginSection = styled.section`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f1f4f7;
`;

export const LoginBox = styled.div`
  width: 400px;
`;

export const LoginTitle = styled.h1`
  margin: 0 0 12px;

  font-size: 28px;
  font-weight: 600;
  line-height: 1.3;

  color: #4097ff;
`;

export const LoginDescription = styled.p`
  margin: 0 0 30px;

  font-size: 15px;
  font-weight: 400;

  color: #6c6e71;
`;

export const LoginForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;

  padding: 0 26px;

  border: 1px solid transparent;
  border-radius: 14px;

  background: #fff;

  font-size: 15px;
  font-weight: 400;
  color: #0a0a0b;

  outline: none;

  &::placeholder {
    color: #a2a3a5;
  }

  &:focus {
    border-color: #4097ff;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 58px;

  margin-top: 42px;

  border: 0;
  border-radius: 14px;

  background: #4097ff;

  font-size: 16px;
  font-weight: 600;
  color: #fff;

  cursor: pointer;

  &:disabled {
    background: #b3d5ff;
    cursor: default;
  }
`;

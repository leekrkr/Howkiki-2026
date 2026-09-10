import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  min-height: 100dvh;

  display: flex;
  justify-content: center;

  background: #fff;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 430px;
  min-height: 100dvh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f1f4f7;
`;

export const SafeContent = styled.div`
  flex: 1;

  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 14px;
`;

export const LogoImage = styled.img`
  width: 80px;
  height: auto;
`;

export const LogoText = styled.div`
  font-size: 24px;
  font-weight: 400;
  font-family: "LEXEND", sans-serif;

  color: #4097ff;
`;

export const Button = styled.button`
  width: 88px;
  height: 44px;

  margin-top: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 14px;

  background: #e0e3e6;

  font-size: 15px;
  font-weight: 500;

  color: #4097ff;

  cursor: pointer;
`;

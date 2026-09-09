import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 40px 24px;
  box-sizing: border-box;

  background: #ffffff;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 440px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const Logo = styled.img`
  width: clamp(64px, 5vw, 88px);
  height: auto;

  margin-bottom: 16px;
`;

export const Title = styled.h1`
  margin: 0;

  color: #3d91ff;

  font-size: clamp(26px, 2vw, 32px);
  font-weight: 500;
  line-height: 1.2;
`;

export const Description = styled.p`
  margin: 20px 0 0;

  color: #777777;

  font-size: clamp(14px, 1vw, 16px);
  font-weight: 400;
  line-height: 1.6;
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 18px;

  margin-top: 46px;
`;

export const ModeButton = styled.button`
  width: 100%;
  height: clamp(54px, 4vw, 62px);

  border: 1px solid #d5d5d5;
  border-radius: 18px;

  background: #ffffff;
  color: #37383a;

  font-family: inherit;
  font-size: clamp(15px, 1vw, 17px);
  font-weight: 500;

  cursor: pointer;

  &:hover {
    background: #e2efff;
    border-color: #4097ff;
    color: #4097ff;
  }

  @media (max-width: 480px) {
    border-radius: 14px;
  }
`;

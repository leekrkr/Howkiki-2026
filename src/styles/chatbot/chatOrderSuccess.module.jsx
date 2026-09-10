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

  margin: 0 auto;

  background: #f1f4f7;
`;

export const SafeContent = styled.div`
  width: 100%;
  flex: 1;

  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckContainer = styled.div`
  width: 57px;
  height: 57px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #4097ff;
`;

export const CheckIcon = styled.img`
  width: 36px;
  height: auto;
`;

export const SuccessText = styled.p`
  margin: 22px 0 28px;

  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;

  color: #0a0a0b;
`;

export const BackButton = styled.button`
  height: 44px;

  padding: 0 17px;

  border: none;
  border-radius: 14px;

  background: #e0e3e6;

  font-size: 16px;
  font-weight: 500;
  color: #4097ff;

  cursor: pointer;
`;

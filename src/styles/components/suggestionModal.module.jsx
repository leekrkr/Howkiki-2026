import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.35);
`;

export const ModalContainer = styled.div`
  width: 820px;
  height: 460px;

  padding: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fff;
  border-radius: 44px;
`;

export const ContentBox = styled.div`
  position: relative;

  width: 100%;
  height: 300px;

  padding: 30px 36px 56px;

  background: #f1f4f8;
  border-radius: 32px;
`;

export const SuggestionText = styled.div`
  width: 100%;

  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;

  color: #111;

  white-space: pre-wrap;
  word-break: keep-all;

  overflow-y: auto;
`;

export const DateText = styled.div`
  position: absolute;

  right: 36px;
  bottom: 24px;

  font-size: 15px;
  font-weight: 400;

  color: #777;
`;

export const CloseButton = styled.button`
  width: 124px;
  height: 54px;

  margin-top: 36px;

  border: 1px solid #d0d1d2;
  border-radius: 16px;

  background: #fff;
  color: #6c6e71;

  color: #777;

  font-size: 17px;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    color: #4696ff;
  }
`;

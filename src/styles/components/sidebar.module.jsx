import styled from "styled-components";

export const SideBarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;

  width: 316px;
  height: 100vh;

  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-right: 1px solid #eee;
`;

export const TopArea = styled.div`
  padding: 52px 20px 0;
`;

export const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 16px;
`;

export const LogoCircle = styled.div`
  width: 52px;
  height: 52px;

  border: 1px solid #e5e5e5;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #4097ff;
  font-size: 28px;
  font-weight: 700;
`;

export const LogoText = styled.div`
  font-size: 22px;
  font-weight: 400;
  font-family: "LEXEND", sans-serif;

  color: #0a0a0b;
`;

export const StoreName = styled.div`
  margin-top: 18px;
  padding: 0 18px;

  font-size: 19px;
  font-weight: 600;
  color: #0a0a0b;
`;

export const MenuArea = styled.div`
  margin-top: 38px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SideBarLink = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;

  gap: 16px;

  padding: 0 26px;
  border-radius: 32px;

  cursor: pointer;

  background: ${(props) => (props.selected ? "#4097ff" : "transparent")};
  color: ${(props) => (props.selected ? "#fff" : "#6C6E71")};

  transition: 0.2s;

  &:hover {
    background: ${(props) => (props.selected ? "#4097ff" : "#f5f5f5")};
  }
`;

export const SideBarName = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const BottomArea = styled.div`
  width: 100%;
`;

export const SettingButton = styled.div`
  width: 100%;
  height: 92px;

  display: flex;
  align-items: center;
  gap: 18px;

  padding: 0 46px;

  border-top: 1px solid #f1f4f7;

  color: #6c6e71;
  cursor: pointer;

  img {
    width: 22px;
    height: 22px;
  }

  span {
    font-size: 17px;
    font-weight: 500;
  }
`;

export const ProfileArea = styled.div`
  width: 100%;
  height: 96px;

  display: flex;
  align-items: center;
  gap: 14px;

  padding: 0 36px;
`;

export const ProfileIcon = styled.div`
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

export const UserName = styled.span`
  min-width: 0;

  font-size: 17px;
  font-weight: 500;
  color: #0a0a0b;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

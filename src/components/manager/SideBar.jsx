import React from "react";
import logoIcon from "../../assets/icons/logo.svg";
import orderIcon from "../../assets/icons/order.svg";
import orderActiveIcon from "../../assets/icons/order-active.svg";
import tableIcon from "../../assets/icons/table.svg";
import tableActiveIcon from "../../assets/icons/table-active.svg";
import suggestionIcon from "../../assets/icons/suggestion.svg";
import suggestionActiveIcon from "../../assets/icons/suggestion-active.svg";
import settingIcon from "../../assets/icons/setting.svg";
import profileIcon from "../../assets/icons/profile.svg";
import { useNavigate, useLocation } from "react-router-dom";
import {
  SideBarContainer,
  TopArea,
  LogoRow,
  LogoCircle,
  LogoText,
  StoreName,
  MenuArea,
  SideBarLink,
  SideBarName,
  BottomArea,
  SettingButton,
  ProfileArea,
  ProfileIcon,
  UserName,
} from "../../styles/components/sidebar.module";

export default function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const orderPaths = [
    "/1/waiting",
    "/1/preparing",
    "/1/completeorder",
    "/1/fullorder",
    "/1/packaging",
  ];

  const isOrderSelected = orderPaths.includes(location.pathname);

  return (
    <SideBarContainer>
      <TopArea>
        <LogoRow>
          <LogoCircle>
            <img src={logoIcon} alt="" />
          </LogoCircle>
          <LogoText>HowKIKI</LogoText>
        </LogoRow>
        <StoreName>호우SUM 망원점</StoreName>
        <MenuArea>
          <SideBarLink
            onClick={() => handleClick("/1/waiting")}
            selected={isOrderSelected}
          >
            <img src={isOrderSelected ? orderActiveIcon : orderIcon} alt="" />
            <SideBarName>주문</SideBarName>
          </SideBarLink>
          <SideBarLink
            onClick={() => handleClick("/1/tablemanage")}
            selected={location.pathname === "/1/tablemanage"}
          >
            <img
              src={
                location.pathname === "/1/tablemanage"
                  ? tableActiveIcon
                  : tableIcon
              }
              alt=""
            />
            <SideBarName>테이블</SideBarName>
          </SideBarLink>
          <SideBarLink
            onClick={() => handleClick("/1/suggestion")}
            selected={location.pathname === "/1/suggestion"}
          >
            <img
              src={
                location.pathname === "/1/suggestion"
                  ? suggestionActiveIcon
                  : suggestionIcon
              }
              alt=""
            />
            <SideBarName>건의 사항</SideBarName>
          </SideBarLink>
        </MenuArea>
      </TopArea>
      <BottomArea>
        <SettingButton>
          <img src={settingIcon} alt="" />
          <span>설정</span>
        </SettingButton>
        <ProfileArea>
          <ProfileIcon>
            <img src={profileIcon} alt="" />
          </ProfileIcon>
          <UserName>jooyeon333</UserName>
        </ProfileArea>
      </BottomArea>
    </SideBarContainer>
  );
}

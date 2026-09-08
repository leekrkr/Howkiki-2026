import { useNavigate, useLocation } from "react-router-dom";
import alarmIcon from "../../assets/icons/alarm.svg";
import {
  TopBar,
  OrderTypeTabs,
  OrderTypeTab,
  RightInfo,
  DateText,
  Bell,
} from "../../styles/components/header.module";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const today = new Date();
  const todayText = formatDate(today);

  const headerTabPaths = [
    "/1/waiting",
    "/1/preparing",
    "/1/completeorder",
    "/1/fullorder",
    "/1/packaging",
  ];

  const storePaths = [
    "/1/waiting",
    "/1/preparing",
    "/1/completeorder",
    "/1/fullorder",
  ];

  const showOrderTabs = headerTabPaths.includes(location.pathname);
  const isStoreSelected = storePaths.includes(location.pathname);
  const isPackagingSelected = location.pathname === "/1/packaging";

  return (
    <TopBar>
      {showOrderTabs ? (
        <OrderTypeTabs>
          <OrderTypeTab
            $active={isStoreSelected}
            onClick={() => navigate("/1/waiting")}
          >
            매장
          </OrderTypeTab>

          <OrderTypeTab
            $active={isPackagingSelected}
            onClick={() => navigate("/1/packaging")}
          >
            포장
          </OrderTypeTab>
        </OrderTypeTabs>
      ) : (
        <div />
      )}
      <RightInfo>
        <DateText>{todayText}</DateText>
        <Bell>
          <img src={alarmIcon} alt="알림" />
        </Bell>
      </RightInfo>
    </TopBar>
  );
}

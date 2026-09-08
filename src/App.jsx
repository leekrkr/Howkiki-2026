import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/manager/start";
import OrderWaitingPage from "./pages/manager/orderWaiting";
import OrderPreparingPage from "./pages/manager/orderPreparing";
import CompleteOrderPage from "./pages/manager/completeOrder";
import FullOrderPage from "./pages/manager/fullOrder";
import TableManagePage from "./pages/manager/tableManage";
import PackagingPage from "./pages/manager/packaging";
import SuggestionPage from "./pages/manager/suggestion";
import ChatBotStart from "./pages/chatbot/chatBotStart";
import ChatBot from "./pages/chatbot/chatBot";
import OrderSummaryPage from "./pages/chatbot/orderSummary";
import ChatOrderSuccess from "./pages/chatbot/chatOrderSuccess";

function App() {
  return (
    <>
      <Routes>
        <Route path="/1" element={<StartPage />} />
        <Route path="/1/waiting" element={<OrderWaitingPage />} />
        <Route path="/1/preparing" element={<OrderPreparingPage />} />
        <Route path="/1/completeorder" element={<CompleteOrderPage />} />
        <Route path="/1/fullorder" element={<FullOrderPage />} />
        <Route path="/1/tablemanage" element={<TableManagePage />} />
        <Route path="/1/packaging" element={<PackagingPage />} />
        <Route path="/1/suggestion" element={<SuggestionPage />} />
        <Route path="/chatbotstart/1/1" element={<ChatBotStart />} />
        <Route path="/chatbot/1/1" element={<ChatBot />} />
        <Route path="/ordersummary/1/1" element={<OrderSummaryPage />} />
        <Route path="/ordersuccess" element={<ChatOrderSuccess />} />
      </Routes>
    </>
  );
}

export default App;

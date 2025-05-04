import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OAuthCallbackPage from "./pages/OAuthCallbackPage";
import "./styles/global.css";
import MainPage from "./pages/MainPage";
import JoinPage1 from "./pages/JoinPage1";
import JoinPage2 from "./pages/JoinPage2";
import JoinPage3 from "./pages/JoinPage3";
import MyPage from "./pages/MyPage";
import MyOrderListPage from "./pages/MyOrderListPage";
import MyOrderDetailPage from "./pages/MyOrderDetailPage";
import OrderPage1 from "./pages/OrderPage1";
import OrderPage2 from "./pages/OrderPage2";
import PayPage1 from "./pages/PayPage1";
import PayPage2 from "./pages/PayPage2";
import AdminPage from "./pages/AdminPage";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join1" element={<JoinPage1 />} />
      <Route path="/join2" element={<JoinPage2 />} />
      <Route path="/join3" element={<JoinPage3 />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/my-order" element={<MyOrderListPage />} />
      <Route path="/my-order/:orderId" element={<MyOrderDetailPage />} />
      <Route path="/oauth/callback" element={<OAuthCallbackPage />} />
      <Route path="/order1" element={<OrderPage1 />} />
      <Route path="/order2/:storeId" element={<OrderPage2 />} />
      <Route path="/pay1" element={<PayPage1 />} />
      <Route path="/pay2" element={<PayPage2 />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  </BrowserRouter>
);

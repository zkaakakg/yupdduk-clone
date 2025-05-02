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
    </Routes>
  </BrowserRouter>
);

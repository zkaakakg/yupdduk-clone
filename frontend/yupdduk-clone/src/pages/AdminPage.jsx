import { useState } from "react";
import styles from "../styles/AdminPage.module.css";
import StoreTab from "../components/StoreTab";
import OrderListTab from "../components/OrderListTab";
import UserListTab from "../components/UserListTab";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("store");
  const token = localStorage.getItem("accessToken");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });
      if (response.ok) {
        alert("로그아웃이 완료되었습니다.");
        localStorage.clear();
        navigate("/");
      } else {
        console.error("서버 에러", response);
        alert("로그이웃에 실패했습니다.");
      }
    } catch (err) {
      console.error("네트워크 에러", err);
      alert("요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div
            className={`${styles.menuItem} ${
              activeMenu === "store" ? styles.active : ""
            }`}
            onClick={() => handleMenuClick("store")}
          >
            매장 관리
          </div>
          <div
            className={`${styles.menuItem} ${
              activeMenu === "members" ? styles.active : ""
            }`}
            onClick={() => handleMenuClick("members")}
          >
            회원 목록
          </div>
          <div
            className={`${styles.menuItem} ${
              activeMenu === "orders" ? styles.active : ""
            }`}
            onClick={() => handleMenuClick("orders")}
          >
            주문 목록
          </div>
        </nav>
        <div className={styles.logout}>
          <img
            src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/c4/logout-31dva2zl3l9ao92pwnmgnt.png/logout-6bjs3s3fnciv7c0ye52y3l.png?_a=DATAdtAAZAA0"
            alt=""
            style={{ width: "20px" }}
          />
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <main className={styles.mainContent}>
        {activeMenu === "store" && <StoreTab />}
        {activeMenu === "members" && <UserListTab />}
        {activeMenu === "orders" && <OrderListTab />}
      </main>
    </div>
  );
};

export default AdminPage;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/MyOrderList.module.css";
import Header from "../components/Header2";
import axios from "axios";

const MyOrderListPage = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    axios
      .get("http://localhost:8080/orders", {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleOrderDetail = (orderId) => {
    navigate(`/my-order/${orderId}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#f8f8f8",
      }}
    >
      <Header title="주문내역" />
      <main className={styles.main}>
        <div className={styles.orderList}>
          {orders.length === 0 ? (
            <>
              <p className={styles.noOrder}>주문내역이 없습니다</p>
            </>
          ) : (
            <>
              {orders.map((order) => (
                <div key={order.id} className={styles.orderCard}>
                  <div className={styles.orderTop}>
                    <span>
                      주문상태:{" "}
                      {order.orderStatus === "PAYING" ? "결제중" : "주문완료"}
                    </span>
                  </div>
                  <div className={styles.orderMid}>
                    <strong>{order.orderItems[0]?.menuName}</strong>
                    <div className={styles.priceBox}>
                      <span>결제금액 </span>
                      <span className={styles.price}>
                        {order.totalPrice.toLocaleString()}원
                      </span>
                    </div>
                  </div>
                  <div className={styles.branch}>{order.storeName}</div>
                  <button
                    className={styles.detailButton}
                    onClick={() => handleOrderDetail(order.id)}
                  >
                    + 주문상세보기
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default MyOrderListPage;

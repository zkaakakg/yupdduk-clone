import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header2";
import styles from "../styles/MyOrderDetail.module.css";
import axios from "axios";

const MyOrderDetailPage = () => {
  const [order, setOrder] = useState(null);
  const { orderId } = useParams();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => {
        console.error("주문 정보 불러오기 실패:", err);
      });
  }, [orderId]);

  if (!order) return <div>로딩 중...</div>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#f8f8f8",
      }}
    >
      <Header title="주문 상세" />
      <main className={styles.main}>
        <div>
          <div
            style={{
              padding: "30px",
            }}
          >
            <h3 className={styles.title}>주문내역</h3>
            <hr />
            <div className={styles.menuInfo}>
              {order.orderItems.map((item) => (
                <div key={item.menuId}>
                  <div
                    className={styles.item}
                    style={{ fontWeight: "500", color: "black" }}
                  >
                    {item.menuName}
                  </div>
                  <div className={styles.item}>{item.menutype ?? null}</div>
                  <div className={styles.item}>{item.flavor ?? null}</div>
                  {item.toppings && item.toppings.length > 0 && (
                    <div>
                      {item.toppings.map((topping, idx) => (
                        <div key={idx} className={styles.infoBox}>
                          <div>{topping.name}</div>
                          <div>{topping.amount}개</div>
                        </div>
                      ))}
                      {item.sides.map((side, idx) => (
                        <div key={idx} className={styles.infoBox}>
                          <div>{side.name}</div>
                          <div>{side.amount}개</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div style={{ marginTop: "35px" }}>
                <div>
                  <h3 className={styles.title}>결제정보</h3>
                  <hr />
                </div>
                <div>
                  <div className={styles.infoBox}>
                    <div style={{ fontWeight: "bold" }}>결제금액</div>
                    <div style={{ fontWeight: "bold" }}>
                      {order.totalPrice.toLocaleString()}원
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "35px" }}>
                <h3 className={styles.title}>주문정보</h3>
                <hr />
                <div>
                  <div className={styles.infoBox}>
                    <div className="w-1/3">매장명</div>
                    <div>{order.storeName}</div>
                  </div>
                  <div className={styles.infoBox}>
                    <div>주문일시</div>
                    <div>
                      {" "}
                      {order.orderTime
                        ? new Date(order.orderTime).toLocaleString("ko-KR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                          })
                        : null}
                    </div>
                  </div>
                </div>
              </div>

              <p></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyOrderDetailPage;

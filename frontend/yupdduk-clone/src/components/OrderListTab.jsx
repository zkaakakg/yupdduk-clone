import { useEffect, useState } from "react";
import styles from "../styles/OrderListTab.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OrderListTab = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    axios
      .get("http://localhost:8080/admin/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3>주문 목록</h3>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th></th>
              <th>주문상태</th>
              <th>주문메뉴</th>
              <th>결제금액</th>
              <th>지점명</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                onClick={() => navigate(`/my-order/${order.id}`)}
                className={styles.clickableRow}
              >
                <td>{index + 1}</td>
                <td
                  className={
                    order.orderStatus === "PAYING"
                      ? styles.statusPaying
                      : styles.statusCompleted
                  }
                >
                  {order.orderStatus === "PAYING" ? "결제중" : "주문완료"}
                </td>
                <td>
                  {" "}
                  {order.orderItems.length > 1
                    ? `${order.orderItems[0].menuName} 외 ${
                        order.orderItems.length - 1
                      }건`
                    : order.orderItems[0]?.menuName}
                </td>
                <td>{order.totalPrice.toLocaleString()}원</td>
                <td>{order.storeName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderListTab;

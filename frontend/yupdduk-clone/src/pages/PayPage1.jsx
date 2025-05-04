import styles from "../styles/PayPage1.module.css";
import Header from "../components/Header.jsx";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import X from "../assets/x.png";

const PayPage1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let { orderData } = location.state || {};
  const [cartItems, setCartItems] = useState(orderData.orderItems);

  const deleteItem = (itemId) => {
    const token = localStorage.getItem("acccessToken");

    fetch(`http://localhost:8080/order/item/${itemId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include", // 쿠키도 같이 보낼 때만 필요!
    })
      .then(async (response) => {
        if (!response.ok) {
          console.error("응답 실패", response.status);
          return;
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log("받은 데이터:", data);
          orderData = data; // 받아온 데이터 저장
          setCartItems(orderData.orderItems);
        } else {
          console.warn("JSON 응답 아님");
        }
      })
      .catch((err) => {
        console.error("요청 실패:", err);
      });
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          <Header title="방문포장" />
          <nav className={styles.nav}>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className={styles.cartItemWrapper}
                style={{
                  borderBottom:
                    index !== cartItems.length - 1
                      ? "1px dashed rgb(175, 175, 175)"
                      : "none",
                }}
              >
                <div className={styles.cartItem}>
                  <div className={styles.menuName}>
                    <p>{item.menuName}</p>
                    <p>{item.totalPrice.toLocaleString()}원</p>
                  </div>
                  <div className={styles.menuOption}>
                    <p>· 가격</p>
                    <p style={{ color: "rgb(40, 40, 40)" }}>
                      {item.price.toLocaleString()}원
                    </p>
                  </div>
                  {item.menuType !== undefined ? (
                    <div className={styles.menuOption}>
                      <p>엽기메뉴 선택</p>
                      <p>{item.menuType}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {item.flavor !== undefined ? (
                    <div
                      style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                      className={styles.menuOption}
                    >
                      <p>· 맛 선택</p>
                      <p>ㄴ {item.flavor}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {item.toppings.length > 0 ? (
                    <div className={styles.menuPlus}>
                      <div>
                        <p>· 추가메뉴(토핑)</p>
                      </div>
                      {item.toppings.map((topping, index) => (
                        <div key={index}>
                          <p>ㄴ {topping.name}</p>
                          <p>{topping.extraPrice.toLocaleString()}원</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                  {item.sides.length > 0 ? (
                    <div className={styles.menuPlus}>
                      <div>
                        <p>· 추가메뉴(사이드)</p>
                      </div>
                      {item.sides.map((side, index) => (
                        <div key={index}>
                          <p>ㄴ {side.name}</p>
                          <p>{side.extraPrice.toLocaleString()}원</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <button onClick={() => deleteItem(item.menuId)}>
                  <img src={X} alt="" />
                </button>
              </div>
            ))}
          </nav>
          <main className={styles.main}>
            <div className={styles.info}>
              <div>
                <p>매장정보</p>
                <p>엽기떡볶이({orderData.storeName})</p>
              </div>
              <div>
                <p>휴대폰번호</p>
                <div>01055411767</div>
              </div>
            </div>
            <div className={styles.gap}></div>
            <div className={styles.pay}>
              <p>결제수단</p>
              <div>
                <img src="/체크박스O.png" alt="" />
                <p>1초 결제</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIC}></div>
            </div>
            <div className={styles.gap}></div>
            <div className={styles.totalPrice}>
              <p>결제금액</p>
              <div style={{ fontSize: "14px", fontWeight: "400" }}>
                <p>총 주문금액</p>
                <p>10,000원</p>
              </div>
              <div className={styles.blackLine}></div>
              <div style={{ paddingTop: "10px" }}>
                <p>총 주문금액</p>
                <p>10,000원</p>
              </div>
            </div>
          </main>
          <footer className={styles.footer}>
            <div>
              <button className={styles.button}>
                <p style={{ fontWeight: "400", color: "rgb(255, 212, 23)" }}>
                  {orderData.totalPrice.toLocaleString()}원
                </p>
                <p>결제하기</p>
                <p style={{ fontSize: "13px", fontWeight: "400" }}>
                  ({cartItems.length}개)
                </p>
              </button>
            </div>
            <div></div>
          </footer>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PayPage1;

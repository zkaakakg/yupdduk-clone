import styles from "../styles/PayPage1.module.css";
import Header from "../components/Header.jsx";

const PayPage1 = () => {
  const cartItems = [
    {
      menuId: 1,
      orderId: 1,
      menuName: "2인엽기떡볶이",
      menuType: null,
      flavor: "오리지널",
      price: 9000,
      toppings: [],
      sides: [],
      totalPrice: 9000,
    },
    {
      menuId: 2,
      orderId: 2,
      menuName: "엽기떡볶이",
      menuType: null,
      flavor: "덜매운맛",
      price: 14000,
      toppings: [{ name: "통유부(4개)", amount: 1, extraPrice: 1000 }],
      sides: [{ name: "주먹김밥(셀프)", amount: 1, extraPrice: 2000 }],
      totalPrice: 9000,
    },
  ];

  return (
    <div>
      <Header title="방문포장" />
      <nav className={styles.nav}>
        {cartItems.map((item, index) => (
          <div
            key={item.orderId}
            className={styles.cartItem}
            style={{
              borderBottom:
                index !== cartItems.length - 1
                  ? "1px dashed rgb(175, 175, 175)"
                  : "none",
            }}
          >
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
            {item.menuType !== null ? (
              <div className={styles.menuOption}>
                <p>엽기메뉴 선택</p>
                <p>{item.menuType}</p>
              </div>
            ) : (
              ""
            )}
            {item.flavor !== null ? (
              <div
                style={{ flexDirection: "column", alignItems: "flex-start" }}
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
        ))}
      </nav>
      <main className={styles.main}>
        <div className={styles.info}>
          <div>
            <p>매장정보</p>
            <p>엽기떡볶이(김포풍무점)</p>
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
              10,000원
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
  );
};

export default PayPage1;

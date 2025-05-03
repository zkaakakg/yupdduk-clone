import styles from "../styles/PayPage2.module.css";
import Header from "../components/Header.jsx";
const PayPage2 = () => {
  const CurrentTime = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 월은 0부터 시작하니까 +1 해줘야 해!
    const date = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return (
      <div>{`${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분`}</div>
    );
  };

  return (
    <div>
      <Header title="주문 완료" />
      <main className={styles.main}>
        <div className={styles.welcome}>
          <p>
            <span>주문</span>이 완료되었습니다.
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "rgb(136, 136, 136)",
              padding: "20px",
              paddingBottom: "28%",
            }}
          >
            {CurrentTime()}
          </p>
        </div>
        <button className={styles.loginButton}>확인</button>
      </main>
    </div>
  );
};

export default PayPage2;

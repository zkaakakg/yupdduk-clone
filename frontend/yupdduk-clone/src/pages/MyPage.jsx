import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/MyPage.module.css";
import Header from "../components/Header2";

const MyPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("acccessToken");

    fetch("http://localhost:8080/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    })
      .then(async (response) => {
        if (!response.ok) {
          setUser(null);
          setLoading(false);
          return;
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setUser(data);
          setLoading(false);
        } else {
          setUser(null);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("사용자 정보 불러오기 실패:", err);
        setUser(null);
        setLoading(false);
      });
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        alert("로그아웃이 완료되었습니다.");
        navigate("/");
        setUser(null);
      } else {
        console.error("서버 에러", response);
        alert("로그이웃에 실패했습니다.");
      }
    } catch (err) {
      console.error("네트워크 에러", err);
      alert("요청 중 오류가 발생했습니다.");
    }
  };
  const handleOrderList = () => {
    navigate("/my-order");
  };
  const handleHome = () => {
    navigate("/");
  };

  if (loading) {
    return <div></div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#f8f8f8",
      }}
    >
      <Header title="마이페이지" />

      <main className={styles.main}>
        <div className={styles.box}>
          <div className={styles.welcome}>
            <p style={{ fontWeight: "bold" }}>
              {user?.name ?? "로그인이 필요합니다."}
              <span style={{ fontWeight: "lighter" }}>님</span>
            </p>
            <p>안녕하세요!</p>
          </div>
          <img
            src="https://www.yupdduk.com/bj-images/09.png"
            alt="캐릭터"
            style={{ width: "158px" }}
          />
        </div>
        <div>
          <div className={styles.menuBox} style={{ height: "150px" }}>
            <div className={styles.userInfo}>
              <div className={styles.infoItem}>
                <span className={styles.label}>이메일</span>
                <span className={styles.value}>{user?.email ?? "⎯"}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>생일</span>
                <span className={styles.value}>{user?.birthDate ?? "⎯"}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>전화번호</span>
                <span className={styles.value}>{user?.phone ?? "⎯"}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>권한</span>
                <span className={styles.value}>
                  {user?.userRole === "ADMIN"
                    ? "관리자"
                    : user?.userRole === "USER"
                    ? "일반 사용자"
                    : "⎯"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ fontWeight: "500", marginTop: "15px" }}>나의 정보관리</p>
          <div className={styles.menuBox}>
            <button className={styles.menuItem} onClick={handleOrderList}>
              <img
                src="https://www.yupdduk.com/bj-images/yupdduk_sub/icon_myorder.png"
                alt="주문내역"
                className={styles.icon}
              />
              <span>주문내역</span>
            </button>
            <a
              className={styles.menuItem}
              href="https://www.yupdduk.com/sub/cs-info/yup-inquiry"
            >
              <img
                src="https://www.yupdduk.com/bj-images/yupdduk_sub/icon_myinq.png"
                alt="고객의 소리"
                className={styles.icon}
              />
              <span>고객의 소리</span>
            </a>
          </div>

          <div>
            <button
              style={{
                position: "fixed",
                bottom: 30,
                width: "90%",
                height: "50px",
                borderRadius: "20px",
                backgroundColor: "#DE1D24",
                color: "white",
                fontSize: "16px",
              }}
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyPage;

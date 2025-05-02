import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/MyPage.module.css";
import Header from "../components/Header2";

const MyPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      // 토큰 없으면 fetch로 유저 정보 요청
      fetch("http://localhost:8080/user", {
        method: "GET",
        credentials: "include",
      })
        .then(async (response) => {
          if (!response.ok) throw new Error("응답 실패");

          const contentType = response.headers.get("content-type");
          if (contentType?.includes("application/json")) {
            const data = await response.json();
            setUser(data);
          }
        })
        .catch((err) => {
          console.error("유저 정보 로딩 실패:", err);
          setUser(null);
        });
    } else {
      // 토큰 있으면 localStorage에서 유저 정보 로딩 (예: 이름, 이메일 등 저장된 경우)
      const name = localStorage.getItem("userName");
      const email = localStorage.getItem("userEmail");
      setUser({ name, email, birthday, phone });
    }
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };
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
        setIsOpen(false);
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

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleOrderList = () => {
    navigate("/my-order");
  };
  const handleHome = () => {
    navigate("/");
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
      <Header title="마이페이지" />
      <div
        style={{
          padding: "30px",
        }}
      >
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
                <span className={styles.value}>{user?.birthday ?? "⎯"}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>전화번호</span>
                <span className={styles.value}>{user?.phone ?? "⎯"}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
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

          <div style={{ marginTop: "40px" }}>
            <button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "20px",
                backgroundColor: "#DE1D24",
                color: "white",
              }}
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>

      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
      <div className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.menuAccount}>
          {user ? (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  padding: "30px",
                  paddingBottom: "0px",
                }}
              >
                <p style={{ fontSize: "17px", fontWeight: "350" }}>
                  안녕하세요.
                </p>
                <p style={{ fontSize: "23px", fontWeight: "500" }}>
                  {user?.name ?? "사용자 없음"}
                  <span style={{ fontWeight: "350" }}>님</span>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  padding: "30px",
                  paddingTop: "0px",
                  paddingBottom: "3px",
                }}
              >
                <button className={styles.menuInnerButton}>내 정보</button>
                <button
                  className={styles.menuInnerButton}
                  onClick={handleLogout}
                >
                  로그아웃
                </button>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "0.5px",
                  background: "rgba(255, 255, 255, 0.5)",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  paddingBottom: "5%",
                }}
              >
                <div className={styles.menuHaving}>
                  <p style={{ fontWeight: "500", fontSize: "23px" }}>
                    0<span style={{ fontSize: "18px" }}>P</span>
                  </p>
                  <p style={{ fontWeight: "300", fontSize: "15px" }}>포인트</p>
                </div>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.5)",
                    height: "50px",
                    width: "0.5px",
                  }}
                ></div>
                <div className={styles.menuHaving}>
                  <p style={{ fontWeight: "500", fontSize: "23px" }}>
                    3<span style={{ fontSize: "18px" }}>개</span>
                  </p>
                  <p style={{ fontWeight: "300", fontSize: "15px" }}>쿠폰</p>
                </div>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.5)",
                    height: "50px",
                    width: "0.5px",
                  }}
                ></div>
                <div className={styles.menuHaving}>
                  <p style={{ fontWeight: "500", fontSize: "23px" }}>
                    0<span style={{ fontSize: "18px" }}>매</span>
                  </p>
                  <p style={{ fontWeight: "300", fontSize: "15px" }}>선물함</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  padding: "30px",
                  paddingBottom: "0px",
                }}
              >
                <p style={{ fontSize: "17px", fontWeight: "350" }}>
                  안녕하세요.
                </p>
                <p style={{ fontSize: "23px", fontWeight: "500" }}>
                  로그인
                  <span style={{ fontWeight: "350" }}> 후 이용하세요.</span>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  padding: "30px",
                  paddingTop: "0px",
                  paddingBottom: "3px",
                }}
              >
                <button
                  className={styles.menuInnerButton}
                  onClick={handleLogin}
                  style={{ marginBottom: "7px" }}
                >
                  로그인
                </button>
              </div>
            </>
          )}
        </div>

        <div style={{ overflowY: "auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                gap: "20px",
              }}
            >
              <button className={styles.menuInMenu}>
                <img
                  src="https://www.yupdduk.com/bj-images/yupdduk_main/menuicon_menu.png"
                  alt=""
                  style={{ width: "25px" }}
                />
                <p style={{ fontSize: "20px" }}>메뉴 안내</p>
              </button>
              <button className={styles.menuInMenu}>
                <img
                  src="https://www.yupdduk.com/bj-images/yupdduk_main/menuicon_event.png"
                  alt=""
                  style={{ width: "25px" }}
                />
                <p style={{ fontSize: "20px" }}>이벤트 & 안내</p>
              </button>
            </div>

            <div className={styles.grayLine}></div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                gap: "20px",
              }}
            >
              <button className={styles.menuInMenu}>
                <img
                  src="https://www.yupdduk.com/bj-images/yupdduk_main/menuicon_yupdduk.png"
                  alt=""
                  style={{ width: "25px" }}
                />
                <p style={{ fontSize: "20px" }}>공지 사항</p>
              </button>
              <button className={styles.menuInMenu}>
                <img
                  src="https://www.yupdduk.com/bj-images/yupdduk_main/menuicon_customer.png"
                  alt=""
                  style={{ width: "25px" }}
                />
                <p style={{ fontSize: "20px" }}>자주 묻는 질문</p>
              </button>
              <button className={styles.menuInMenu}>
                <img
                  src="https://www.yupdduk.com/bj-images/yupdduk_main/menuicon_voucher.png"
                  alt=""
                  style={{ width: "25px" }}
                />
                <p style={{ fontSize: "20px" }}>고객의 소리</p>
              </button>
              <button className={styles.menuInMenu}>
                <img
                  src="https://www.yupdduk.com/bj-images/yupdduk_main/menuicon_store.png"
                  alt=""
                  style={{ width: "25px" }}
                />
                <p style={{ fontSize: "20px" }}>이용 안내</p>
              </button>
              <button className={styles.menuInMenu}>
                <img
                  src="https://www.yupdduk.com/bj-images/yupdduk_main/menuicon_fran.png"
                  alt=""
                  style={{ width: "25px" }}
                />
                <p style={{ fontSize: "20px" }}>앱 설정</p>
              </button>
            </div>

            <div className={styles.grayLine}></div>
          </div>

          <div
            style={{
              display: "flex",
              paddingLeft: "20px",
              paddingRight: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button>
              <img
                src="https://www.yupdduk.com/bod/config/main/sns_kakaotalk_1.png"
                alt=""
                style={{ width: "75%" }}
              />
            </button>
            <button>
              <img
                src="https://www.yupdduk.com/bod/config/main/sns_naverblog_1.png"
                alt=""
                style={{ width: "75%" }}
              />
            </button>
            <button>
              <img
                src="https://www.yupdduk.com/bod/config/main/sns_instagram_1.png"
                alt=""
                style={{ width: "75%" }}
              />
            </button>
            <button>
              <img
                src="https://www.yupdduk.com/bod/config/main/sns_facebook_1.png"
                alt=""
                style={{ width: "75%" }}
              />
            </button>
            <button>
              <img
                src="https://www.yupdduk.com/bod/config/main/sns_twitter_1.png"
                alt=""
                style={{ width: "75%" }}
              />
            </button>
            <button>
              <img
                src="https://www.yupdduk.com/bod/config/main/sns_youtube_1.png"
                alt=""
                style={{ width: "75%" }}
              />
            </button>
          </div>

          <div style={{ padding: "20px", fontSize: "10px", color: "gray" }}>
            <p>㈜핫시즈너</p>
            <p>대표자 : 금교일</p>
            <p>사업자등록번호 : 201-86-13311</p>
            <p>통신판매번호 : 2016-서울서초-0172호</p>
            <p>본사 : 서울특별시 성동구 아차산로11가길 10, HSF빌딩 7F, 8F</p>
            <p>고객센터 : 1661-8514</p>
            <p>개인정보관리책임자 : 배의섭</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

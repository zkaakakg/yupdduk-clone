import { useState, useEffect, use } from "react";
import styles from "../styles/MainPage.module.css";
import banner1 from "../assets/배너1.jpg";
import banner2 from "../assets/배너2.jpg";
import banner3 from "../assets/배너3.jpg";
import 배달주문 from "../assets/배달주문.jpg";
import 방문포장 from "../assets/방문포장.jpg";
import 홀주문 from "../assets/홀주문.jpg";
import 흰색화살표 from "../assets/흰색화살표.png";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const images = [banner1, banner2, banner3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
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
          return;
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setUser(data);
        } else {
          setUser(null);
        }
      })
      .catch((err) => {
        console.error("사용자 정보 불러오기 실패:", err);
        setUser(null);
      });
  }, []);

  const handleLogin = () => {
    navigate("/login"); // 로그인 페이지로 이동
  };

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <header className={styles.header}>
        <div className={styles.menu}>
          <button className={styles.menuButton} onClick={openMenu}>
            <img
              className={styles.menuImg}
              src="https://www.yupdduk.com/bj-images/icon_gavbar.png"
              alt="메뉴"
            />
          </button>
        </div>
        <div>
          <img
            className={styles.logoImg}
            src="https://www.yupdduk.com/bj-images/logo_m.png"
            alt="엽떡 로고"
          />
        </div>
      </header>
      <nav className={styles.nav}>
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((src, idx) => (
            <img key={idx} src={src} alt="배너" className={styles.slideImg} />
          ))}
        </div>
        <div className={styles.bannerIdx}>
          <div className={styles.bannerIdx_1}>
            <p style={{ color: "white" }}>0{currentIndex + 1}</p>
            <p>/</p>
            <p>03</p>
          </div>
          <p style={{ color: "gray" }}>|</p>
          <p style={{ color: "white", fontSize: "14px" }}>전체보기</p>
        </div>
      </nav>
      <main className={styles.main}>
        {user ? (
          <>
            <button className={styles.myPage}>
              <div className={styles.welcome}>
                <p style={{ fontWeight: "bold" }}>{user.name}</p>
                <p>님, 반갑습니다.</p>
              </div>
              <img
                src="https://www.yupdduk.com/bj-images/yupdduk_main/movearrow.png"
                alt="마이페이지로 이동"
                style={{ width: "9px", height: "18px" }}
              />
            </button>
            <div className={styles.userHaving}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div className={styles.point}>
                  <img
                    src="https://www.yupdduk.com/bj-images/yupdduk_sub/icon_point.png"
                    alt="포인트"
                    style={{ width: "30px" }}
                  />
                  <p>포인트</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    fontWeight: "bold",
                    padding: "5px",
                  }}
                >
                  <p style={{ fontSize: "30px" }}>0</p>
                  <p style={{ fontSize: "23px" }}>P</p>
                </div>
              </div>
              <div className={styles.couponGift}>
                <div className={styles.coupon}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://www.yupdduk.com/bj-images/yupdduk_sub/icon_coupon.png"
                      alt="쿠폰"
                      style={{ width: "30px" }}
                    />
                    <p style={{ color: "#cc3530" }}>쿠폰</p>
                  </div>
                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>3개</p>
                </div>
                <div className={styles.grayLine}></div>
                <div className={styles.gift}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://www.yupdduk.com/bj-images/yupdduk_sub/icon_voucher.png"
                      alt="선물함"
                      style={{ width: "30px" }}
                    />
                    <p style={{ color: "#cc3530" }}>선물함</p>
                  </div>
                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>0매</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <button className={styles.myPage} onClick={handleLogin}>
              <div className={styles.welcome}>
                <p style={{ fontWeight: "bold" }}>로그인 후 이용하세요.</p>
              </div>
              <img
                src="https://www.yupdduk.com/bj-images/yupdduk_main/movearrow.png"
                alt="로그인 페이지로 이동"
                style={{ width: "9px", height: "18px" }}
              />
            </button>
          </>
        )}

        <div className={styles.order}>
          <button
            className={styles.orderButton}
            style={{ paddingBottom: "0px", gap: "4px" }}
          >
            <img
              src={배달주문}
              alt=""
              style={{ width: "80px", paddingTop: "3px" }}
            />
            <p>배달주문</p>
          </button>
          <button className={styles.orderButton}>
            <img src={방문포장} alt="" style={{ width: "70px" }} />
            <p>방문포장</p>
          </button>
          <button className={styles.orderButton}>
            <img src={홀주문} alt="" style={{ width: "70px" }} />
            <p>홀주문</p>
          </button>
        </div>
        <div className={styles.giftAD}>
          <div className={styles.giftADInner}>
            <img
              src="https://www.yupdduk.com/bj-images/yupdduk_sub/icon_voucher.png"
              alt=""
              style={{ width: "50px" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "white",
              }}
            >
              <p style={{ fontWeight: "500" }}>엽기떡볶이 선물하기</p>
              <p style={{ fontSize: "13px" }}>소중한 마음을 전해요!</p>
            </div>
          </div>
          <img src={흰색화살표} alt="" style={{ width: "17px" }} />
        </div>
      </main>

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
                  {user.name}
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

export default MainPage;

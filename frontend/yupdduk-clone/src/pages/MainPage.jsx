import { useState, useEffect } from "react";
import "../styles/MainPage.css";
import banner1 from "../assets/배너1.jpg";
import banner2 from "../assets/배너2.jpg";
import banner3 from "../assets/배너3.jpg";
import 배달주문 from "../assets/배달주문.jpg";
import 방문포장 from "../assets/방문포장.jpg";
import 홀주문 from "../assets/홀주문.jpg";
import 흰색화살표 from "../assets/흰색화살표.png";

const MainPage = () => {
  const images = [banner1, banner2, banner3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <header className="header">
        <div className="menu">
          <button className="menuButton">
            <img
              className="menuImg"
              src="https://www.yupdduk.com/bj-images/icon_gavbar.png"
              alt="메뉴"
            />
          </button>
        </div>
        <div>
          <img
            className="logoImg"
            src="https://www.yupdduk.com/bj-images/logo_m.png"
            alt="엽떡 로고"
          />
        </div>
      </header>
      <nav className="nav">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((src, idx) => (
            <img key={idx} src={src} alt="배너" className="slideImg" />
          ))}
        </div>
        <div className="bannerIdx">
          <div className="bannerIdx_1">
            <p style={{ color: "white" }}>0{currentIndex + 1}</p>
            <p>/</p>
            <p>03</p>
          </div>
          <p style={{ color: "gray" }}>|</p>
          <p style={{ color: "white", fontSize: "14px" }}>전체보기</p>
        </div>
      </nav>
      <main className="main">
        <button className="myPage">
          <div className="welcome">
            <p style={{ fontWeight: "bold" }}>유지원</p>
            <p>님, 반갑습니다.</p>
          </div>
          <img
            src="	https://www.yupdduk.com/bj-images/yupdduk_main/movearrow.png"
            alt="마이페이지로 이동"
            style={{ width: "9px", height: "18px" }}
          />
        </button>
        <div className="userHaving">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div className="point">
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
          <div className="couponGift">
            <div className="coupon">
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <img
                  src="	https://www.yupdduk.com/bj-images/yupdduk_sub/icon_coupon.png"
                  alt="쿠폰"
                  style={{ width: "30px" }}
                />
                <p style={{ color: "#cc3530" }}>쿠폰</p>
              </div>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>3개</p>
            </div>
            <div className="grayLine"></div>
            <div className="gift">
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
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
        <div className="order">
          <button
            className="orderButton"
            style={{ paddingBottom: "0px", gap: "4px" }}
          >
            <img
              src={배달주문}
              alt=""
              style={{ width: "80px", paddingTop: "3px" }}
            />
            <p>배달주문</p>
          </button>
          <button className="orderButton">
            <img src={방문포장} alt="" style={{ width: "70px" }} />
            <p>방문포장</p>
          </button>
          <button className="orderButton">
            <img src={홀주문} alt="" style={{ width: "70px" }} />
            <p>홀주문</p>
          </button>
        </div>
        <div className="giftAD">
          <div className="giftADInner">
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
    </div>
  );
};

export default MainPage;

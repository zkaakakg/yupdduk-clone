import Header from "../components/Header.jsx";
import "../styles/JoinPage3.css";

const JoinPage3 = () => {
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, ".");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Header title="회원가입" />
      <nav>
        <div className="navInner">
          <div className="step"></div>
          <div className="line"></div>
          <div className="step"></div>
          <div className="line"></div>
          <div className="step active"></div>
        </div>
        <div className="navTitle">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "rgb(211, 211, 211)" }}>약관 동의 및</p>
            <p style={{ color: "rgb(211, 211, 211)" }}>본인 인증</p>
          </div>
          <div>
            <p style={{ color: "rgb(211, 211, 211)" }}>회원 정보 입력</p>
          </div>
          <div style={{ paddingRight: "8px", paddingLeft: "7px" }}>
            <p style={{ color: "black", fontWeight: "600" }}>가입 완료</p>
          </div>
        </div>
      </nav>
      <main>
        <div className="welcome">
          <p>
            <span>동대문엽기떡볶이 회원</span>이
          </p>
          <p>되신 것을 환영합니다.</p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "rgb(136, 136, 136)",
              padding: "20px",
              paddingBottom: "28%",
            }}
          >
            {today} 처리 완료
          </p>
        </div>
        <button className="loginButton">로그인</button>
      </main>
    </div>
  );
};
export default JoinPage3;

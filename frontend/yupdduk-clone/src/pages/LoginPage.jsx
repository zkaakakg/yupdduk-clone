import "../styles/LoginPage.css";
import Header from "../components/Header.jsx";

const LoginPage = () => {
  return (
    <div>
      <Header title="로그인" />
      <main className="main">
        <input
          className="loginInput"
          type="text"
          placeholder="아이디(이메일)"
        />
        <input className="loginInput" type="password" placeholder="비밀번호" />
        <div style={{ display: "flex", gap: "30px" }}>
          <label className="checkbox1">
            <input type="checkbox" />
            <span></span> 이메일 저장
          </label>
          <label className="checkbox1">
            <input type="checkbox" />
            <span></span> 자동 로그인
          </label>
        </div>
        <button className="loginButton">로그인</button>
        <div className="otherChoice">
          <button style={{ fontSize: "14px", color: "#464646" }}>
            아이디 찾기
          </button>
          <p style={{ fontSize: "13px", color: "rgba(149, 149, 149, 0.5)" }}>
            |
          </p>
          <button style={{ fontSize: "14px", color: "#464646" }}>
            비밀번호 찾기
          </button>
          <p style={{ fontSize: "13px", color: "rgba(149, 149, 149, 0.5)" }}>
            |
          </p>
          <button style={{ fontSize: "14px", color: "#464646" }}>
            회원 가입
          </button>
        </div>
        <div className="divider">
          <span>또는</span>
        </div>
      </main>
      <footer className="footer">
        <button style={{ border: "1px solid rgb(222, 29, 36)" }}>
          <span
            style={{
              width: "59px",
              height: "13px",
              background: "URL(https://id.yupdduk.com/img/sp_mobile.png)",
              backgroundSize: "200px 200px",
              backgroundPosition: "0 -47px",
            }}
          ></span>
          <p style={{ paddingBottom: "3px", color: "rgb(222, 29, 36)" }}>
            바로가입/로그인
          </p>
        </button>
        <button>
          <span
            style={{
              width: "69px",
              height: "13px",
              background: "URL(https://id.yupdduk.com/img/sp_mobile.png)",
              backgroundSize: "200px 200px",
              backgroundPosition: "0 -62px",
            }}
          ></span>
          <p style={{ paddingBottom: "2px" }}>네이버</p>
        </button>
        <button>
          <span
            style={{
              width: "50px",
              height: "15px",
              background: "URL(https://id.yupdduk.com/img/sp_mobile.png)",
              backgroundSize: "200px 200px",
              backgroundPosition: "0 -77px",
            }}
          ></span>
          <p>카카오</p>
        </button>
        <button>
          <span
            style={{
              width: "67px",
              height: "17px",
              background: "URL(https://id.yupdduk.com/img/sp_mobile.png)",
              backgroundSize: "200px 200px",
              backgroundPosition: "0 -132px",
            }}
          ></span>
          <p style={{ paddingBottom: "5px" }}>애플</p>
        </button>
        <button>
          <span
            style={{
              width: "56px",
              height: "19px",
              background: "URL(https://id.yupdduk.com/img/sp_mobile.png)",
              backgroundSize: "200px 200px",
              backgroundPosition: "0 -111px",
            }}
          ></span>
          <p style={{ paddingBottom: "5px" }}>구글</p>
        </button>
      </footer>
    </div>
  );
};
export default LoginPage;

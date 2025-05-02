import styles from "../styles/LoginPage.module.css";
import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append("email", form.email);
    params.append("password", form.password);

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
        credentials: "include",
      });

      if (response.ok) {
        alert("로그인이 완료되었습니다.");
        navigate("/");
      } else {
        console.error("서버 에러", response);
        alert("로그인에 실패했습니다.");
      }
    } catch (err) {
      console.error("네트워크 에러", err);
      alert("요청 중 오류가 발생했습니다.");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Header title="로그인" />
      <main className={styles.main}>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <input
            className={styles.loginInput}
            name="email"
            type="text"
            placeholder="아이디(이메일)"
            value={form.email}
            onChange={handleChange}
          />
          <input
            className={styles.loginInput}
            name="password"
            type="password"
            placeholder="비밀번호"
            value={form.password}
            onChange={handleChange}
          />
          <div style={{ display: "flex", gap: "30px" }}>
            <label className={styles.checkbox1}>
              <input type="checkbox" />
              <span></span> 이메일 저장
            </label>
            <label className={styles.checkbox1}>
              <input type="checkbox" />
              <span></span> 자동 로그인
            </label>
          </div>
          <button className={styles.loginButton} type="submit">
            로그인
          </button>
        </form>

        <div className={styles.otherChoice}>
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
        <div className={styles.divider}>
          <span>또는</span>
        </div>
      </main>
      <footer className={styles.footer}>
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
        <a href="http://localhost:8080/oauth2/authorization/naver">
          <button type="button" className={styles.snsButton}>
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
        </a>
        <a href="http://localhost:8080/oauth2/authorization/kakao">
          <button type="button" className={styles.snsButton}>
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
        </a>
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
        <a href="http://localhost:8080/oauth2/authorization/google">
          <button type="button" className={styles.snsButton}>
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
        </a>
      </footer>
    </div>
  );
};

export default LoginPage;

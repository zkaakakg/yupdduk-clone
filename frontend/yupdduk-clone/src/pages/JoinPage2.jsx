import { useState } from "react";
import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";
import styles from "../styles/JoinPage2.module.css";

const JoinPage2 = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    phone: "",
    birthDate: "",
    userRole: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, "");
    if (onlyNums.length > 11) return; // 최대 11자리 제한
    setForm({ ...form, phone: onlyNums });
  };

  const formChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatPhone = (num) => {
    if (num.length <= 3) return num;
    if (num.length <= 7) return `${num.slice(0, 3)}-${num.slice(3)}`;
    return `${num.slice(0, 3)}-${num.slice(3, 7)}-${num.slice(7)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("제출됨");

    const {
      name,
      email,
      birthDate,
      password,
      repeatPassword,
      phone,
      userRole,
    } = form;

    if (password !== repeatPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
          birthDate,
          userRole,
        }),
        credentials: "include",
      });

      if (response.ok) {
        alert("회원가입이 완료되었습니다.");
        navigate("/join3");
      } else {
        console.error("서버 에러", response);
        alert("회원가입에 실패했습니다.");
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
      <Header title="회원가입" />
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <div className={styles.step}></div>
          <div className={styles.line}></div>
          <div className={`${styles.step} ${styles.active}`}></div>
          <div className={styles.line}></div>
          <div className={styles.step}></div>
        </div>
        <div className={styles.navTitle}>
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
            <p style={{ color: "black", fontWeight: "600" }}>회원 정보 입력</p>
          </div>
          <div style={{ paddingRight: "8px", paddingLeft: "7px" }}>
            <p style={{ color: "rgb(211, 211, 211)" }}>가입 완료</p>
          </div>
        </div>
      </nav>
      <form onSubmit={handleSubmit}>
        <main className={styles.main}>
          <div className={styles.nameBirth}>
            <p>이름</p>
            <input
              name="name"
              type="text"
              style={{ paddingBottom: "2px" }}
              value={form.name}
              onChange={formChange}
              required
            />
            <p>생년월일</p>
            <input
              name="birthDate"
              type="date"
              value={form.birthDate}
              onChange={formChange}
              required
            />
          </div>
          <div className={styles.input}>
            <input
              name="email"
              type="email"
              placeholder="이메일"
              value={form.email}
              onChange={formChange}
              required
            />
          </div>
          <div className={styles.input}>
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              value={form.password}
              onChange={formChange}
              required
            />
          </div>
          <div className={styles.input}>
            <input
              name="repeatPassword"
              type="password"
              placeholder="비밀번호 재확인"
              value={form.repeatPassword}
              onChange={formChange}
              required
            />
          </div>
          <div className={styles.input}>
            <input
              name="phone"
              type="tel"
              value={formatPhone(form.phone)}
              onChange={(e) => {
                formChange(e);
                handleChange(e);
              }}
              placeholder="핸드폰 번호"
              required
            />
          </div>
          <div className={styles.input}>
            <select
              name="userRole"
              placeholder="권한"
              value={form.userRole}
              onChange={formChange}
              required
            >
              <option value="">권한 선택</option>
              <option value="ADMIN">관리자</option>
              <option value="USER">일반 사용자</option>
            </select>
          </div>
          <div className={styles.notice}>
            <p>
              • 회사 정책상 부적절한 단어는 등록이 제한되거나 관리자에 의해
              삭제될 수 있습니다.
            </p>
            <p>• 잘못된 권한 선택 시 이용이 제한될 수 있습니다.</p>
          </div>
          <button className={styles.joinButton} type="submit">
            가입
          </button>
        </main>
      </form>
    </div>
  );
};
export default JoinPage2;

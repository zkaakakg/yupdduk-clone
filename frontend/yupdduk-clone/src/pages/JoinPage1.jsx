import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import styles from "../styles/JoinPage1.module.css";

const JoinPage1 = () => {
  const [allCheck, setAllCheck] = useState(false);
  const [checks, setChecks] = useState({
    age: false,
    use: false,
    privacy: false,
    ad: false,
  });
  const navigate = useNavigate();

  const handleAllChange = () => {
    const newValue = !allCheck; //원래 상태 반전
    setAllCheck(newValue); //전체 상태 업데이트
    setChecks({
      //각각의 상태 업데이트
      age: newValue,
      use: newValue,
      privacy: newValue,
      ad: newValue,
    });
  };

  const hadleSingleChange = (name) => {
    const newChecks = { ...checks, [name]: !checks[name] }; //클릭한 name만 골라서 반전시킴
    setChecks(newChecks); //업데이트

    //모든 항목이 true면 전체 동의도 true로 설정
    const isAllChecked = Object.values(newChecks).every((v) => v); //모두 true이면 true 반환
    setAllCheck(isAllChecked);
  };

  const handleJoin = (e) => {
    navigate("/join2");
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
          <div className={`${styles.step} ${styles.active}`}></div>
          <div className={styles.line}></div>
          <div className={styles.step}></div>
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
            <p style={{ color: "black", fontWeight: "600" }}>약관 동의 및</p>
            <p style={{ color: "black", fontWeight: "600" }}>본인 인증</p>
          </div>
          <div>
            <p style={{ color: "rgb(211, 211, 211)" }}>회원 정보 입력</p>
          </div>
          <div style={{ paddingRight: "8px", paddingLeft: "7px" }}>
            <p style={{ color: "rgb(211, 211, 211)" }}>가입 완료</p>
          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <label className={styles.checkbox1}>
          <input
            type="checkbox"
            checked={allCheck}
            onChange={handleAllChange}
          />
          <span></span> <p>전체 약관 동의</p>
        </label>
        <div className={styles.checkList}>
          <label className={styles.checkbox2}>
            <input
              type="checkbox"
              checked={checks.age}
              onChange={() => hadleSingleChange("age")}
            />
            <span></span> <p>만 14세 이상입니다.</p>
          </label>
          <label className={styles.checkbox2}>
            <input
              type="checkbox"
              checked={checks.use}
              onChange={() => hadleSingleChange("use")}
            />
            <span></span> <p>이용 약관</p>
          </label>
          <label className={styles.checkbox2}>
            <input
              type="checkbox"
              checked={checks.privacy}
              onChange={() => hadleSingleChange("privacy")}
            />
            <span></span> <p>개인 정보 수집과 이용(필수)</p>
          </label>
          <label className={styles.checkbox2}>
            <input
              type="checkbox"
              checked={checks.ad}
              onChange={() => hadleSingleChange("ad")}
            />
            <span></span>
            <p style={{ fontWeight: "500" }}>광고성 정보 수신 동의(선택)</p>
          </label>
        </div>
        <div className={styles.grayLine}></div>
        <div className={styles.guide}>
          <p>회원가입 및 본인확인을 위한 인증절차를 진행해 주세요.</p>
        </div>
        <button className={styles.nextButton} onClick={handleJoin}>
          <p>다음</p>
        </button>
      </main>
    </div>
  );
};
export default JoinPage1;

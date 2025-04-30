import { useState } from "react";
import Header from "../components/Header.jsx";
import "../styles/JoinPage2.css";

const JoinPage2 = () => {
  const [rawNumber, setRawNumber] = useState("");

  const handleChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, "");
    if (onlyNums.length > 11) return; // 최대 11자리 제한
    setRawNumber(onlyNums);
  };

  const formatPhone = (num) => {
    if (num.length <= 3) return num;
    if (num.length <= 7) return `${num.slice(0, 3)}-${num.slice(3)}`;
    return `${num.slice(0, 3)}-${num.slice(3, 7)}-${num.slice(7)}`;
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
      <nav>
        <div className="navInner">
          <div className="step"></div>
          <div className="line"></div>
          <div className="step active"></div>
          <div className="line"></div>
          <div className="step"></div>
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
            <p style={{ color: "black", fontWeight: "600" }}>회원 정보 입력</p>
          </div>
          <div style={{ paddingRight: "8px", paddingLeft: "7px" }}>
            <p style={{ color: "rgb(211, 211, 211)" }}>가입 완료</p>
          </div>
        </div>
      </nav>
      <main>
        <div className="nameBirth">
          <p>이름</p>
          <input type="text" style={{ paddingBottom: "2px" }} />
          <p>생년월일</p>
          <input type="date" />
        </div>
        <div className="input">
          <input type="email" placeholder="이메일" />
        </div>
        <div className="input">
          <input type="password" placeholder="비밀번호" />
        </div>
        <div className="input">
          <input type="password" placeholder="비밀번호 재확인" />
        </div>
        <div className="input">
          <input
            type="tel"
            value={formatPhone(rawNumber)}
            onChange={handleChange}
            placeholder="핸드폰 번호"
          />
        </div>
        <div className="input">
          <input type="text" placeholder="닉네임" />
        </div>
        <div className="notice">
          <p>
            • 회사 정책상 부적절한 단어는 등록이 제한되거나 관리자에 의해 삭제될
            수 있습니다.
          </p>
          <p>
            • 닉네임은 매장에서 고객님을 불러드리는데에 사용됩니다. 신중하게
            설정해주세요.
          </p>
        </div>
        <button className="joinButton">가입</button>
      </main>
    </div>
  );
};
export default JoinPage2;

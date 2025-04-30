import { useState } from "react";
import Header from "../components/Header.jsx";
import "../styles/JoinPage2.css";

const JoinPage2 = () => {
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
    </div>
  );
};
export default JoinPage2;

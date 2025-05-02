import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OAuthCallbackPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");
    const email = queryParams.get("email");
    const name = queryParams.get("name");

    if (token) {
      // 1. JWT 토큰 로컬스토리지에 저장
      localStorage.setItem("accessToken", token);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userName", name);

      alert("소셜 로그인 성공! 환영합니다 " + decodeURIComponent(name));

      // 2. 홈이나 마이페이지 등으로 이동
      navigate("/");
    } else {
      alert("로그인에 실패했습니다. 토큰이 없습니다.");
      navigate("/login");
    }
  }, []);

  return <p>로그인 처리 중입니다...</p>;
};

export default OAuthCallbackPage;

import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignupStep3() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="content signup_form">
      <h2 className="step3-title">welcome!</h2>
      <div className="step3-text">
        <img
          className="step3-img"
          src="https://cdn.imweb.me/upload/S202211085117a29d86234/6b1a872dfd518.jpg"
        />
        <p className="step3-text-p">배스킨라빈스 회원이 되신 걸 축하합니다!</p>
        <button className="step3-button" type="button" onClick={handleLogin}>
          로그인
        </button>
      </div>
    </div>
  );
}

import React from "react";
import "../css/seulki.css";
import { useNavigate } from "react-router-dom";
import "../css/animation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpoon } from "@fortawesome/free-solid-svg-icons/faSpoon";

export default function SignupStep3() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="content signup_form">
      <h2 className="step3_title">welcome!</h2>
      <div className="step3_text">
        <img
          className="step3_img"
          src="https://cdn.imweb.me/upload/S202211085117a29d86234/6b1a872dfd518.jpg"
        />
        <p className="step3_text_p">배스킨라빈스 회원이 되신 걸 축하합니다!</p>
        <button className="step3_button" type="button" onClick={handleLogin}>
          <FontAwesomeIcon icon={faSpoon} className="login_spoon" />
          &nbsp; 로그인
        </button>
      </div>
    </div>
  );
}

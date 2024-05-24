import React, { useRef } from "react";
import login from "../video/login3.mp4";
import "../css/seulki.css";
import "../css/animation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpoon } from "@fortawesome/free-solid-svg-icons/faSpoon";

export default function Login() {
  const videoRef = useRef();
  const setPlayBackRate = () => {
    videoRef.current.setPlayBackRate = 0.5;
  };

  return (
    <div className="content login_form">
      <div>
        <video
          muted
          autoPlay
          loop
          ref={videoRef}
          onCanPlay={() => setPlayBackRate()}
          width="600px"
          height="160px"
        >
          <source src={login} type="video/mp4" />
        </video>
        <div className="word1">
          <span>We make people happy!</span>
          <span>한달 31일 내내 새로운 맛을 선사합니다</span>
        </div>
      </div>
      <div className="login_line"></div>
      <ul className="login_form_ul">
        <li>
          <input
            className="login_input"
            type="text"
            placeholder="아이디"
          ></input>
        </li>
        <li>
          <input
            className="login_input"
            type="password"
            placeholder="비밀번호"
          ></input>
        </li>
        <li>
          <button className="login_button" type="button">
            로그인
          </button>
        </li>
      </ul>
      <p className="word2">
        아이디찾기 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 비밀번호 재발급
      </p>
      <p className="word3">
        베스킨라빈스 회원이 아니시라면 지금 베스킨라빈스에
        <br />
        가입하시고 다양한 혜택을 경험하세요
      </p>
      <button className="signup_button">
        <FontAwesomeIcon icon={faSpoon} className="login_spoon" />
        &nbsp; 베스킨라빈스 가입
      </button>
    </div>
  );
}

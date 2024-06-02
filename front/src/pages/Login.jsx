import React, { useState, useRef } from "react";
import login from "../video/login3.mp4";
import "../css/seulki.css";
import "../css/animation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpoon } from "@fortawesome/free-solid-svg-icons/faSpoon";

export default function Login() {
  const [formData, setFormData] = useState({ id: "", pw: "" });
  const userIdRef = useRef(null);
  const userPwRef = useRef(null);

  const videoRef = useRef();
  const setPlayBackRate = () => {
    videoRef.current.setPlayBackRate = 0.5;
  };

  //TODO 변화감지
  const handleChange = (e) => {
    const { name, value } = e.target; //! {name:value} 형태 고정
    setFormData({ ...formData, [name]: value }); // ...formData 이걸로 처음 데이터 저장해두고, [name]: value로 바뀐값만 변경해줌
  };

  //TODO 서버전송 (★서버전송전에 유효성검사는 필수사항!)
  /* 서버에 전송하는 방법 두가지
  GET 방식 : 패킷의 header 부분에 붙어서 넘어감 [url] => axios.get() ==> /:id
  POST 방식 : 패킷의 body부분에 붙어서 넘어감 => axios.post()
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationCheck()) console.log("전송성공");
  };

  //TODO 유효성 검사
  const validationCheck = () => {
    let checkFlag = true;
    if (!formData.id.trim()) {
      alert("아이디를 입력해주세요");
      userIdRef.current.focus();
      checkFlag = false;
    } else if (!formData.pw.trim()) {
      alert("패스워드를 입력해주세요");
      userPwRef.current.focus();
      checkFlag = false;
    }
    return checkFlag;
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
      <form onSubmit={handleSubmit}>
        <ul className="login_form_ul">
          <li>
            <input
              className="login_input"
              type="text"
              name="id"
              value={formData.id}
              placeholder="아이디"
              onChange={handleChange}
              ref={userIdRef}
            ></input>
          </li>
          <li>
            <input
              className="login_input"
              type="password"
              name="pw"
              value={formData.pw}
              placeholder="비밀번호"
              onChange={handleChange}
              ref={userPwRef}
            ></input>
          </li>
          <li>
            <button className="login_button" type="submit">
              로그인
            </button>
          </li>
        </ul>
        {/* <p className="word2">
          아이디찾기 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 비밀번호 재발급
        // </p> */}
        <p className="word3">
          베스킨라빈스 회원이 아니시라면 지금 베스킨라빈스에
          <br />
          가입하시고 다양한 혜택을 경험하세요
        </p>
        <div>
          <button className="signup_button">
            <FontAwesomeIcon icon={faSpoon} className="login_spoon" />
            &nbsp; 베스킨라빈스 가입
          </button>
        </div>
      </form>
    </div>
  );
}

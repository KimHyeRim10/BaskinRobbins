import React from "react";
import "../css/seulki.css";
import SeulkiHeader from "../components/SeulkiHeader.jsx";

export default function Signup() {
  return (
    <div>
      <div className="content">
        <SeulkiHeader title={"회원가입"} />
        <div>
          <p className="delivery_header_font">
            We make people happy
            <span className="exclamation_mark">!</span>
            <br />
            한달 31일 내내 새로운 맛을 선사합니다
            <span className="exclamation_mark">!</span>
          </p>
        </div>
        <div className="login_line"></div>
      </div>
    </div>
  );
}

import React from "react";
import "../css/seulki.css";
import OrderMenubar from "../components/OrderMenubar.jsx";
import SeulkiHeader from "../components/SeulkiHeader.jsx";

export default function GroupOrderForm() {
  return (
    <div className="content delivery_form">
      <OrderMenubar />
      <SeulkiHeader title={"단체주문서 작성"} />
      <div>
        <p className="delivery_header_font">
          단체주문도 언제나, 어디서나 배스킨라빈스
          <span className="exclamation_mark">!</span>
        </p>
      </div>

      <div className="delivery_form_content">
        <form className="delivery_form_detail">
          <section className="delivery_form_section1">
            <div className="d_f_section1">
              <h3 className="delivery_form_h3">
                개인정보 수집, 이용 동의(필수)
              </h3>
              <button className="delivery_form_button_s" type="button">
                단체주문 혜택보기
              </button>
            </div>

            <p className="delivery_form_p1">
              배스킨라빈스 단체주문 서비스 회원 가입, 고객상담, 고지사항
              전달등을 위해 아래와 같이 개인정보를 수집 이용 합니다
            </p>
            <table className="delivery_section1_table">
              <thead>
                <tr>
                  <th>수집목적</th>
                  <th>필수수집항목</th>
                  <th>보유.이용기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>회원식별 및 서비스 제공</td>
                  <td>성명,전화번호,주소,이메일</td>
                  <td rowSpan={2}>동의 철회시</td>
                </tr>
                <tr>
                  <td>서비스 변경 및 고지사항 전달</td>
                  <td>이메일</td>
                </tr>
              </tbody>
            </table>

            <div className="d_f_section1_div">
              <p className="delivery_form_p2">
                동의를 거부할 권리가 있습니다. 다만, 필수 동의 거부시 서비스가
                반드시 제한 될 수 있습니다.
                <br />위 개인정보 수집,이용에 동의 합니다
              </p>
              <div className="delivery_input_1">
                <input
                  className="delivery_radio_input"
                  type="radio"
                  name="is_policy"
                />
                <span className="delivery_radio_text">동의합니다</span>
                <input
                  className="delivery_radio_input"
                  type="radio"
                  name="is_policy"
                />
                <span className="delivery_radio_text">동의하지 않습니다</span>
              </div>
            </div>
          </section>

          <div className="login_line"></div>
        </form>
      </div>
    </div>
  );
}

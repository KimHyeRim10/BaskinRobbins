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
          <div className="delivery_line"></div>

          {/* 섹션2 */}
          <section className="delivery_form_section2">
            <div className="d_f_section1">
              <h3 className="delivery_form_h3 delivery_form_h3_color">
                개인정보 제3자 제공(선택)
              </h3>
            </div>

            <p className="delivery_form_p1">
              동의를 거부할 권리 있으며,제3자 제공의 동의 여부와 관계없이
              서비스를 가능하나 개인정보 제3자 제공 동의 거부시 , 금액 할인에
              대한 서비스를 받으실 수 없습니다.
            </p>
            <table className="delivery_section1_table">
              <thead>
                <tr>
                  <th>제공처</th>
                  <th>필수수집항목</th>
                  <th>제공항목</th>
                  <th>이용기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>해피오더</td>
                  <td>금액할인,이벤트참여,경품발송</td>
                  <td>성명,전화번호,이메일,주소</td>
                  <td rowSpan={2}>동의 철회시</td>
                </tr>
                <tr>
                  <td>쿠프마케팅</td>
                  <td>금액할인,이벤트참여,경품발송</td>
                  <td>성명,전화번호</td>
                </tr>
              </tbody>
            </table>

            <div className="d_f_section1_div">
              <p className="delivery_form_p2">
                위 개인정보 수집,이용에 동의 합니다
              </p>
              <div className="delivery_input_2">
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
          <div className="delivery_line2"></div>

          {/* 섹션3 */}
          <section className="delivery_form_section3">
            <div className="d_f_section1">
              <h3 className="delivery_form_h3 delivery_form_h3_color">
                마케팅 및 광고 활용 동의(선택)
              </h3>
            </div>

            <p className="delivery_form_p1">
              배스킨라빈스 에서 제공하는 이벤트 및 서비스(제휴서비스포함) 안내를
              광고성 정보를 받으시려면 마케팅 이용 동의 하여 주시기 바랍니다.
              <br />
              동의 거부시 금액 할인에 대한 서비스및 경품 지급을 받으실 수
              없습니다
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
                  <td>이벤트 참여 기회 제공</td>
                  <td>성명,전화번호,이메일</td>
                  <td rowSpan={2}>동의 철회시</td>
                </tr>
                <tr>
                  <td>이벤트,광고,프로모션 안내</td>
                  <td>성명,전화번호,이메일</td>
                </tr>
              </tbody>
            </table>

            <div className="d_f_section1_div">
              <p className="delivery_form_p2">
                동의를 거부할 권리가 있으며,마케팅등의 여부와 관계없이 단체
                주문은 가능합니다. <br /> 다만 거부시 , 상기 목적에 명시된
                서비스를 받으실 수 없습니다. <br />위 마케팅 및 광고 활용 이용에
                동의 합니다
              </p>
              <div className="delivery_input_3">
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

          {/* 섹션4 */}
          <section className="delivery_form_section4">
            <div className="d_f_section1">
              <h3 className="delivery_form_h3">단체주문 주문서 작성자 정보</h3>
            </div>
            <div className="delivery_form_section4_form"></div>
          </section>
        </form>
      </div>
    </div>
  );
}

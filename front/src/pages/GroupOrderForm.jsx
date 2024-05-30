import React, { useRef, useState } from "react";
import "../css/seulki.css";
import OrderMenubar from "../components/OrderMenubar.jsx";
import SeulkiHeader from "../components/SeulkiHeader.jsx";
import DaumPostcode from "react-daum-postcode";

export default function GroupOrderForm() {
  //TODO 전체항목 변화감지
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    zipcode: "",
    address: "",
    detailAddress: "",
  });

  //TODO 필수항목 변화감지
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    number: "",
  });

  //TODO focus용
  const refName = useRef(null);
  const refEmail = useRef(null);
  const refNumber = useRef(null);

  //TODO 폼데이터 변경시 호출이벤트 [변화감지]
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // [name]: value -> 선택한 항목의 name값의 value값을 변경
    // 선택한 항목의 name="id"이면 여기 변수 name에 id가 들어감
  };
  // console.log(formData);

  //* step2의 주소검색부분
  const handleAddress = (e) => {
    setFormData({ ...formData, zipcode: e.zipcode, address: e.address });
  }; //! step2에서 zonecode를 zipcode에 넣었으니까 데이터는 e.zipcode가 됨!!

  //TODO 서버전송
  const handleSubmit = (e) => {
    e.preventDefault(); //! submit 주도권 변경
    if (validationCheck()) {
      console.log("submit 성공=>", formData); // 유효성 체크가 true이면 실행할 실행문
    }
  };

  //TODO 유효성 체크 (validation check)
  const validationCheck = () => {
    let checkFlag = true;
    const errors = {};

    //! ※브라우저에 표시될 focus는 한곳만 가능.
    //? 포커스 필요한 곳이 한곳이상일 때, if문 과 if ~ else if문의 로직차이 ↓
    //? if로만 진행하면 제일 마지막 영역에 포커스가 가고, 메시지는 빈곳에 다뜸
    //? if ~ else if 일땐 제일 윗쪽 영역에 포커스가 가고, 메시지도 제일 윗쪽 영역만 뜸

    if (!formData.name.trim()) {
      refName.current.focus();
      checkFlag = false;
    }
    if (!formData.email.trim()) {
      refEmail.current.focus();
      checkFlag = false;
    }
    if (!formData.number.trim()) {
      refNumber.current.focus();
      checkFlag = false;
    }

    //해당 에러의 맨위 element에 focus 설정하기 (if로만 진행했을 때 사용)
    const keys = Object.keys(errors);
    const fElement = document.querySelector(`[name="${keys[0]}"]`);
    fElement.focus();

    // console.log(errors);
    setFormError(errors); // errors에 모아서 한번에 setFormError에 넣어주기
    return checkFlag;
  };

  //TODO 주소검색버튼 Toggle
  const [isOpen, setIsOpen] = useState(false); // 기본값 false로 설정해서 처음에는 주소검색창 안보이게 하기

  //TODO 주소검색버튼
  const handleToggle = () => {
    setIsOpen(true);
  };

  //TODO ★ DaumPostcode 관련 디자인 및 이벤트
  const themeObj = {
    bgColor: "#FFFFFF", // 바탕 배경색
    pageBgColor: "#FFFFFF", // 페이지 배경색
    postcodeTextColor: "#C05850", // 우편번호 글자색
    emphTextColor: "#222222", // 강조글자색
  };

  const postCodeStyle = {
    width: "360px",
    height: "480px",
  };

  const completeHandler = (data) => {
    const { address, zonecode } = data; //! {address,zonecode} 이름고정. 임의로 변경하면 안됨!!
    handleAddress({ zipcode: zonecode, address: address });
  };

  const closeHandler = (state) => {
    if (state === "FORCE_CLOSE") {
      setIsOpen(false);
    } else if (state === "COMPLETE_CLOSE") {
      setIsOpen(false);
      // refs.detailAddressRef.current.value = ""; 실행이 안되서 일단 보류처리
      // refs.detailAddressRef.current.focus();
    }
  };

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
        <form className="delivery_form_detail" onSubmit={handleSubmit}>
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
            <div className="delivery_form_section4_form1">
              <ul>
                <li>
                  <lable>이름</lable>
                  <input
                    className="d_f_input_color"
                    type="text"
                    name="name"
                    value={formData.name}
                    // onChange={handleChange}
                    ref={refName}
                    placeholder="이름 또는 업체명을 입력해 주세요"
                  />
                </li>
                <li>
                  <lable>신청자 이메일</lable>
                  <input
                    className="d_f_input_color"
                    type="text"
                    name="email"
                    value={formData.email}
                    // onChange={handleChange}
                    ref={refEmail}
                    placeholder="이메일 입력"
                  />{" "}
                  &nbsp;
                  <span>
                    * 필독 ! 작성하신 주소로 세부 내용이 안내 됩니다. 정확한
                    이메일 주소를 입력해주세요
                  </span>
                </li>
                <li>
                  <lable>신청자 연락처</lable>
                  <input
                    className="d_f_input_color"
                    type="text"
                    name="number"
                    value={formData.number}
                    placeholder="010-xxxx-xxxx"
                    // onChange={handleChange}
                  />
                  &nbsp;
                  <span>
                    휴대폰번호 또는 유선전화 중 연락 가능한 전화번호를
                    입력해주세요
                  </span>
                </li>
                <li>
                  <lable>배송 희망 주소</lable>

                  <input
                    className="d_f_input_color"
                    type="text"
                    name="zipcode"
                    value={formData.zipcode}
                    // onChange={handleChange}
                    placeholder="우편번호"
                  ></input>
                  <button
                    className="d_f_input_button"
                    type="button"
                    onClick={handleToggle}
                  >
                    우편번호 찾기
                  </button>
                  <br />
                  <input
                    className="d_f_input_color"
                    type="text"
                    name="address"
                    value={formData.address}
                    // onChange={handleChange}
                    placeholder="기본 주소를 입력하세요."
                  />
                  <br />
                  <input
                    className="d_f_input_color"
                    type="text"
                    name="detailAddress"
                    value={formData.detailAddress}
                    // onChange={handleChange}
                    // ref={refs.detailAddressRef}
                    placeholder="상세 주소를 입력하세요"
                  />
                  {isOpen && (
                    /* [ isOpen && ]을 안쓰면 주소검색창이 계속 떠있게 됨! */
                    <div>
                      {/* ★중요!! Postcode 사용시 <div>로 꼭 감싸줘야함!!!! */}
                      <DaumPostcode
                        className="delivery_postmodal"
                        theme={themeObj}
                        style={postCodeStyle}
                        onComplete={completeHandler}
                        onClose={closeHandler}
                      />
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <button type="submit" className="delivery_form_button_b ">
              제출하기
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}

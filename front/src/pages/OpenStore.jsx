import React, { useRef, useState } from "react";
import "../css/seulki.css";
import DaumPostcode from "react-daum-postcode";
import { OrderMenubar4 } from "../components/OrderMenubar.jsx";
import SeulkiHeader from "../components/SeulkiHeader.jsx";
import {
  SeulkiMap1,
  SeulkiMap2,
  TwoTierSelect,
} from "../components/SeulkiMap.jsx";

export default function OpenStore() {
  const [formData, setFormData] = useState({
    zipcode: "",
    address: "",
    detailAddress: "",
  });

  const detailAddressRef = useRef(null);

  //* 변화감지
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //TODO 주소검색버튼 Toggle
  const [isOpen, setIsOpen] = useState(false); // 기본값 false로 설정해서 처음에는 주소검색창 안보이게 하기

  //TODO 주소검색버튼
  const handleToggle = () => {
    setIsOpen(true);
  };

  //TODO ★DaumPostcode 관련 디자인 및 이벤트
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
    setFormData({ zipcode: zonecode, address: address });
  };

  const closeHandler = (state) => {
    if (state === "FORCE_CLOSE") {
      setIsOpen(false);
    } else if (state === "COMPLETE_CLOSE") {
      setIsOpen(false);
      detailAddressRef.current.focus();
    }
  };

  const handleClick = () => {
    alert("점포개설문의가 접수되었습니다!");
  };

  return (
    <div className="content store_form_s">
      <OrderMenubar4 />
      <SeulkiHeader title={"점포개설문의"} />
      <div>
        <p className="delivery_header_font">
          <span className="delivery_header_span">
            아이스크림 전문기업 배스킨라빈스
          </span>
          <br />
          한달 31일 내내 새로운 맛을 선사한다 (One flavor each day of the
          month)라는 의미가 ‘31’ 이라는 숫자로
          <br />
          널리 알려진 배스킨라빈스는 세계 35개국에 점포를 운영하고 있는 세계No.1
          아이스크림 브랜드 입니다.
        </p>

        <div className="delivery_form_content">
          <form className="delivery_form_detail" /* onSubmit={handleSubmit} */>
            <section className="delivery_form_section1">
              <div className="d_f_section1">
                <h3 className="delivery_form_h3">
                  배스킨라빈스 가맹점포 창업 문의 개인정보 수집이용 동의안내
                </h3>
              </div>

              <table className="delivery_section1_table">
                <thead>
                  <tr>
                    <th>수집하는 개인정보 항목</th>
                    <th>개인정보 수집 이용목적</th>
                    <th>개인정보 보유 및 이용기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>이름, 연락처, 이메일, 희망 창업조건</td>
                    <td>배스킨라빈스 창업 상담</td>
                    <td>창업 상담 신청 후 12개월 또는 동의 철회 시 까지</td>
                  </tr>
                </tbody>
              </table>

              <div className="d_f_section1_div">
                <p className="delivery_form_p2"></p>
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

            <p className="openstore_top_p">*표시 항목은 필수 입력 항목입니다</p>

            {/* 섹션1 */}
            <table className="delivery_section2_table">
              <tbody className="delivery_section2_table_tbody1 openstore_s1">
                <tr>
                  <th>* 이름</th>
                  <td>
                    <input
                      className="d_f_input_color"
                      type="text"
                      placeholder="   이름을 입력하세요"
                    />
                  </td>
                </tr>

                <tr>
                  <th>* 연락처</th>
                  <td className="openstore_s1_tel">
                    <input className="d_f_input_color" type="text" />
                    &nbsp;&nbsp;
                    <span>-</span>
                    <input className="d_f_input_color" type="text" />
                    &nbsp;&nbsp;
                    <span>-</span>
                    <input className="d_f_input_color" type="text" />
                  </td>
                </tr>

                <tr>
                  <th>* 연락가능 시간</th>
                  <td className="openstore_s1_time">
                    <SeulkiMap1 />
                    <span className="openstore_s1_time_span">시</span>
                    <SeulkiMap2 />
                    <span className="openstore_s1_time_span">분</span>
                    &nbsp;&nbsp;
                    <span>-</span>
                    &nbsp;&nbsp;
                    <SeulkiMap1 />
                    <span className="openstore_s1_time_span">시</span>
                    <SeulkiMap2 />
                    <span className="openstore_s1_time_span">분</span>
                  </td>
                </tr>

                <tr>
                  <th>* 이메일</th>
                  <td>
                    <input
                      className="d_f_input_color"
                      type="text"
                      placeholder="   이메일을 입력하세요"
                    />
                  </td>
                </tr>

                <tr>
                  <th>* 창업 희망 지역</th>
                  <td>
                    <TwoTierSelect />
                  </td>
                </tr>

                <tr>
                  <th>* 기타 문의 내용</th>
                  <td>
                    <div>
                      <textarea
                        className="d_f_input_color d_f_textarea openstore_textarea"
                        placeholder="요청 사항 혹은 문의 내용을 입력 해주세요.
                        해당 내용에 대한답변은 세부내용 안내 시 함께 답변 드립니다."
                      ></textarea>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="delivery_form_bottom_p openstore_p">
              구체적인 의뢰 점포가 있을 시에는 점포주소, 임차조건, 평수를
              작성해주세요
            </p>

            <table className="delivery_section2_table">
              <tbody className="delivery_section2_table_tbody1 openstore_s2">
                <tr>
                  <th>점포 상세 주소</th>
                  <td>
                    <div className="openstore_address">
                      <ul>
                        <li>
                          <input
                            className="d_f_input_color"
                            name="zipcode"
                            value={formData.zipcode}
                            onChange={handleChange}
                            type="text"
                            placeholder="   우편번호"
                          ></input>
                          <button
                            className="d_f_input_button"
                            type="button"
                            onClick={handleToggle}
                          >
                            우편번호 찾기
                          </button>
                          <li>
                            <lable></lable>
                            <input
                              className="d_f_input_color"
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              placeholder="   기본 주소를 입력하세요."
                            />
                          </li>
                          <li>
                            <lable></lable>
                            <input
                              className="d_f_input_color"
                              type="text"
                              name="detailAddress"
                              onChange={handleChange}
                              ref={detailAddressRef}
                              placeholder="   상세 주소를 입력하세요"
                            />
                          </li>
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
                  </td>
                </tr>

                <tr>
                  <th>면적 (평수)</th>
                  <td>
                    <select>
                      <option value="평수선택">평수선택</option>
                      <option value="30평이상">30평이상</option>
                      <option value="40평이상">40평이상</option>
                      <option value="50평이상">50평이상</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <th>희망 임차 조건</th>
                  <td>
                    <div className="openstore_desc">
                      <div className="openstore_desc_1">
                        <p className="openstore_desc_p">점포 개설 희망 시기</p>
                        <div>
                          <div>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>즉시</span>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>3개월</span>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>6개월</span>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>1년이상</span>
                          </div>
                          <div>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>기타(내용작성)</span>
                            <p>
                              <input
                                className="d_f_input_color openstore_last_input"
                                type="text"
                                placeholder="  내용을 작성해주세요"
                              />
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="openstore_desc_1">
                        <p className="openstore_desc_p">점포 개설 투자 금액</p>
                        <div>
                          <div>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>2억 이상</span>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>3억 이상</span>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>4억 이상</span>
                          </div>
                          <div>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>기타 금액(내용작성)</span>
                            <p>
                              <input
                                className="d_f_input_color openstore_last_input"
                                type="text"
                                placeholder="  내용을 작성해주세요"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="delivery_form_bottom seulki_flex openstore_last_div">
              <div className="delivery_form_bottom_div">
                <p className="delivery_form_h3">상담안내</p>
                <p>
                  가맹점 문의/점포개설에 대한 상담은 전화 및 팩스, 이메일 모두
                  가능합니다.
                </p>
              </div>
            </div>
            <div className="delivery_line"></div>
            <div className="openstore_button">
              <button type="button" className="openstore_button_1 ">
                취소
              </button>

              <button
                type="submit"
                className="delivery_form_button_b "
                onClick={handleClick}
              >
                등록
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

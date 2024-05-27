import React from "react";
import "../css/seulki.css";
import { Link, useNavigate } from "react-router-dom";
import OrderMenubar from "../components/OrderMenubar.jsx";

export default function GroupOrder() {
  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   navigate("/login");
  // };

  return (
    <div className="content delivery_form">
      <OrderMenubar />

      <div>
        <h2 className="delivery_header">단체주문</h2>
      </div>
      <div>
        <p className="delivery_header_font">
          단체주문도 언제나, 어디서나 배스킨라빈스!
        </p>
      </div>

      <div className="login_line"></div>

      <section className="grouporder_section1">
        <h3 className="grouporder_section1_h3">
          특별한 날, 이벤트 행사 등 단체 선물이 필요할 때 <br />
          배스킨라빈스 단체주문 혜택도 받고 편하게 받아보세요!
        </h3>
        {/* <button className="step3-button" type="button" onClick={handleLogin}>
          로그인
        </button> */}

        <div className="grouporder_button_div">
          <button className="grouporder_button">
            주문서 접수하기 &nbsp;&nbsp;&nbsp;{">"}
          </button>
          <p className="grouporder_section1_p1">
            수령일 기준 최소 3일전 주문 가능
          </p>
        </div>

        <div className="grouporder_main">
          <div className="grouporder_main_1">
            <img
              className="grouporder_section1_img"
              src="/images/grouporder/img_info_item_1.png"
              alt=""
            />
            <div className="grouporder_main_1_div">
              <p>
                <span>아이스크림 제품</span> <br />
                회사, 관공서, 은행, 학교 등 <br />
                <span>한 장소로 일괄배송</span>
              </p>

              <div className="fff">
                <div className="sss">
                  <p>
                    <div className="grouporder_mini">할인 및 혜택</div>
                  </p>
                  <p>
                    할인혜택 <span>별도협의 필요</span>
                  </p>
                  <p>
                    50만원 이상 <span>배송/배달 서비스</span>
                  </p>
                </div>
                <div className="ggg">
                  <p>
                    <div className="grouporder_mini">결제방식</div>
                  </p>
                  <p>현금 (계좌이체) / 카드 (전화결제)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="two">
            <img src="/images/grouporder/img_info_item_2.png" alt="" />
            <div>
              <p>
                <span>아이스크림 제품</span>
                전국 VIP 고객에게 원하는 시간 / 장소로 배달 <br />
                <span>여러곳 배달</span>
              </p>
            </div>

            <div>
              <div>
                <p>
                  <div className="grouporder_mini">할인 및 혜택</div>
                </p>
                <p>
                  50만원 이상 <span>5%</span>
                </p>
                <p>
                  100만원 이상 <span>별도 협의 필요</span>
                </p>
                <p>
                  50만원 이상 <span>주문가능</span>
                </p>
              </div>
              <div>
                <p>
                  <div className="grouporder_mini">결제방식</div>
                </p>
                <p>카드 (전화결제)</p>
              </div>
            </div>
          </div>

          <div className="three">
            <img src="/images/grouporder/img_info_item_3.png" alt="" />
            <div>
              <p>
                <span>온/오프라인 상품권</span>
                매장, 해피오더, 배달앱 다양한 채널 결제 가능 <br />
                <span>모바일 교환권</span>
              </p>
            </div>

            <div>
              <div>
                <p>
                  <div className="grouporder_mini">할인 및 혜택</div>
                </p>
                <p>
                  500만원 이상 <span>1%</span>
                </p>
                <p>
                  <span>발송료 무료</span> (건당 50원)
                </p>
              </div>
              <div>
                <p>
                  <div className="grouporder_mini">결제방식</div>
                </p>
                <p>
                  현금 (계좌이체) / <br /> 법인카드 (전화결제)
                </p>
              </div>
            </div>
          </div>

          <div className="four">
            <img src="/images/grouporder/img_info_item_4.png" alt="" />
            <div>
              <p>
                <span>온/오프라인 상품권</span>
                모바일사용이 익숙지 않은 분께 감사의 마음을 전하고 싶다면?
                <br />
                <span>지류상품권</span>
              </p>
            </div>

            <div>
              <div>
                <p>
                  <div className="grouporder_mini">할인 및 혜택</div>
                </p>
                <p>
                  300만원 이상 <span>2%</span>
                </p>
                <p>
                  500만원 이상 <span>3%</span>
                </p>
                <p>포장봉투 제공 / 등기발송 (1곳)</p>
              </div>
              <div>
                <p>
                  <div className="grouporder_mini">결제방식</div>
                </p>
                <p>
                  현금 (계좌이체) / <br /> 법인카드 (전화결제)
                </p>
              </div>
            </div>
          </div>

          <div className="five">
            <img src="/images/grouporder/img_info_item_5.png" alt="" />
            <div>
              <p>
                <span>아이스크림, 음료 제품</span>
                실내외 공연, 연예인, 축제 등 이벤트 장소 케이터링
                <br />
                <span>아이스크림 트레일러</span>
              </p>
            </div>

            <div>
              <div>
                <p>
                  <div className="grouporder_mini">할인 및 혜택</div>
                </p>
                <p>별도 협의 필요</p>
              </div>
              <div>
                <p>
                  <div className="grouporder_mini">결제방식</div>
                </p>
                <p>1 : 1 문의 (400만원 이상)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grouporder_section2">
        <h3 className="delivery_h3">HOW TO ORDER</h3>
        <ul className="delivery_section3_ul">
          <li className="delivery_section3_li">
            <img
              className="section3_img"
              src="/images/grouporder/img_order_item_1.png"
              alt=""
            />
            <span>STEP 1</span>
            <p>
              배스킨라빈스 홈페이지에서 <br /> 원하는 메뉴를 골라주세요
            </p>
          </li>
          <img
            className="delivery_arrow"
            src="/images/grouporder/img_order_arrow.png"
            alt=""
          />
          <li className="delivery_section3_li">
            <img
              className="section3_img"
              src="/images/grouporder/img_order_item_2.png"
              alt=""
            />
            <span>STEP 2</span>
            <p>
              원하는 방법을 <br /> 선택해주세요
            </p>
          </li>
          <img
            className="delivery_arrow"
            src="/images/grouporder/img_order_arrow.png"
            alt=""
          />
          <li className="delivery_section3_li">
            <img
              className="section3_img"
              src="/images/grouporder/img_order_item_3.png"
              alt=""
            />
            <span>STEP 3</span>
            <p>
              주문서 접수하기를 남겨주세요 <br /> 주문서 접수하시면 확인 후
              연락드려요
            </p>
          </li>
        </ul>
        <div>
          <ul>
            <li>
              ※ 배달 서비스는 인근 매장에서 진행되며, 단체 주문 시 배달비 무료
              혜택을 드립니다. (단, 매장 상황에 따라 배달 서비스가 제한될 수
              있습니다.)
            </li>
            <li>※ 문의 : 월~금 AM 9:00 ~ PM 6:00</li>
            <li>※ 연락처 : 010-1234-5678</li>
          </ul>
          <button className="grouporder_button">
            주문서 접수하기 &nbsp;&nbsp;&nbsp;{">"}
          </button>
        </div>
      </section>
    </div>
  );
}

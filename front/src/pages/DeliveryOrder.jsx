import React from "react";
import "../css/seulki.css";

export default function DeliveryOrder() {
  const handleClick = () => {
    alert("모바일 앱을 이용해주세요");
  };

  return (
    <div className="content delivery_form">
      <nav>
        <ul className="menu_s">
          <li>
            <div>매장찾기</div>
          </li>
          <li>
            <div>100 flavor</div>
          </li>
          <li>
            <div>flow</div>
          </li>
          <li>
            <div>배달주문</div>
          </li>
          <li>
            <div>단체주문</div>
          </li>
        </ul>
      </nav>
      <div>
        <section>
          <div>
            <h2 className="delivery_header">Delivery</h2>
          </div>
          <div>
            <p className="delivery_header_font">
              <span className="delivery_header_span">
                모바일 사전주문 & 배달 서비스
              </span>
              <br />내 손안의 배스킨라빈스
              <span className="exclamation_mark">!</span>
              <br />
              이제 모바일에서 빠르고 간편하게 주문해보세요
              <span className="exclamation_mark">!</span>
            </p>
          </div>
          <div className="login_line"></div>
          <section className="delivery_section2">
            <h3 className="delivery_h3">배스킨라빈스 모바일 사전주문 서비스</h3>
            <p className="delivery_section2_p">
              배스킨라빈스와 함께하는 달콤한 시간
              <span className="exclamation_mark">!</span> <br />
              모바일 앱을 통해 간편하게 주문, 결제와 배달 예약 서비스를
              이용하세요<span className="exclamation_mark">!</span>
            </p>
            <button
              className="delivery_button"
              type="button"
              onClick={handleClick}
            >
              해피오더 주문하기
            </button>
            <ul>
              <li>
                <img src="/images/order/icon_list_1_1.png" alt="" />
                <h4>
                  모바일에서 주문은 여유롭게! <br /> 기다리는 시간은 슬림하게!
                </h4>
                <p>
                  해피오더를 통해 모바일로 주문하고 원하는 시간에 <br /> 픽업
                  또는 배달 서비스를 이용하세요!
                </p>
              </li>
              <li>
                <img src="/images/order/icon_list_1_2.png" alt="" />
                <h4>
                  모임 또는 행사, 단체 <br /> 예약주문 서비스!
                </h4>
                <p>
                  원하는 날짜, 원하는 시간에 맞추어 <br /> 제품을 미리
                  예약주문하세요!
                </p>
              </li>
              <li>
                <img src="/images/order/icon_list_1_3.png" alt="" />
                <h4>
                  쿠폰, 적립, 할인등 다양한 <br /> 멤버쉽 서비스!
                </h4>
                <p>
                  해피오더에서 제공되는 다양한 <br /> 쿠폰과 해피포인트 적립
                  서비스!
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h3>HOW TO ORDER</h3>
            <ul>
              <li>
                <img src="/images/order/icon_list_2_1.png" alt="" />
                <span>STEP 1</span>
                <p>
                  해피앱에 접속 후, 해피마켓 해피오더에서 <br /> 원하시는 제품을
                  선택!
                </p>
              </li>
              <img src="/images/order/icon_list_arrow.png" alt="" />
              <li>
                <img src="/images/order/icon_list_2_2.png" alt="" />
                <span>STEP 2</span>
                <p>
                  원하시는 제품과 옵션을 <br /> 선택 후 결제하면 주문 완료!
                </p>
              </li>
              <img src="/images/order/icon_list_arrow.png" alt="" />
              <li>
                <img src="/images/order/icon_list_2_3.png" alt="" />
                <span>STEP 3</span>
                <p>
                  원하시는 제품과 옵션을 <br /> 선택 후 결제하면 주문 완료!
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h3>모바일교환권 주문하기</h3>
            <p>
              카카오 기프티콘, 해피콘 등 모바일 쿠폰도 편리하게! <br />
              해피앱에서 주문, 배달을 할 수 있어요!
            </p>
            <ul>
              <li>
                <img src="/images/order/icon_list_3_1.png" alt="" />
                <h4>
                  <span>1</span>
                  해피오더 접속 및 주소 설정
                </h4>
                <p>해피오더에 접속한 후 배달지 또는 픽업지 주소를 설정하세요</p>
                <p>
                  *구글플레이 및 앱스토어에서 해피오더를 검색하고 다운받으세요
                </p>
              </li>
              <img src="/images/order/icon_delivery_arrow.png" alt="" />
              <li>
                <img src="/images/order/icon_list_3_2.png" alt="" />
                <h4>
                  <span>2</span>
                  브랜드 및 주문유형 선택
                </h4>
                <p>
                  소지하고있는 모바일교환권 브랜드를 선택한 후 <br />
                  원하는 주문유형(배달/픽업/예약)을 선택하세요
                </p>
                <p>
                  *SPC 통합권을 소지하고 계신 고객님은 원하시는 브랜드를
                  선택하세요
                </p>
              </li>
              <img src="/images/order/icon_delivery_arrow_long.png" alt="" />
              <li>
                <img src="/images/order/icon_list_3_3.png" alt="" />
                <h4>
                  <span>3</span>
                  매장 및 제품 선택
                </h4>
                <p>원하는 매장과 제품을 선택하세요</p>
                <p>
                  *소지하고 있는 모바일교환권 금액 이상의 제품에 한하여 <br />
                  구매가능합니다
                </p>
              </li>
              <img src="/images/order/icon_delivery_arrow_long.png" alt="" />
              <li>
                <img src="/images/order/icon_list_3_4.png" alt="" />
                <h4>
                  <span>4</span>
                  결제하기에서 모바일교환권 코드입력
                </h4>
                <p>
                  할인정보에서 모바일교환권(교환권/해피콘)란에 <br />
                  코드 입력 후 확인 버튼을 누르세요
                </p>
                <p>*일부 모바일교환권에 대해 적용이 불가할 수 있습니다</p>
              </li>
              <img src="/images/order/icon_delivery_arrow.png" alt="" />
              <li>
                <img src="/images/order/icon_list_3_5.png" alt="" />
                <h4>
                  <span>5</span>
                  결제하기
                </h4>
              </li>
            </ul>
          </section>
          <section>
            <h3>
              해피오더 외에도 다양한 배달 앱에서 <br /> 배스킨라빈스를
              만나보세요<span>!</span>
            </h3>
            <ul>
              <li>
                <img src="/images/order/icon_list_4_2.png" alt="" />
                <p>쿠팡이츠</p>
                <a href="https://www.coupangeats.com/?_branch_match_id=1300464128809667886&utm_source=Coupang&utm_campaign=IN_0503_EX_BASKIN&utm_medium=marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL85ILErVS84vLUjMS09NLCkGsnP1M7NCAg3y0zzC05IA4DXKRCkAAAA%3D">
                  주문하기
                </a>
              </li>
              <li>
                <img src="/images/order/icon_list_4_3.png" alt="" />
                <p>배달의 민족</p>
                <a href="https://www.baemin.com/?shortlink=763121a&c=brand_BRkorea&pid=app&af_click_lookback=1d&source_caller=ui">
                  주문하기
                </a>
              </li>
              <li>
                <img src="/images/order/icon_list_4_4.png" alt="" />
                <p>요기요</p>
                <a href="https://www.yogiyo.co.kr/mobile/?_branch_match_id=1300464128809667886&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXr8xPz6zM10ssKNDLyczL1jf1ScorjTQ0c3UFAMESOxQiAAAA#/">
                  주문하기
                </a>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
}

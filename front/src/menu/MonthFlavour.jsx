import React from "react";
import "../css/hyerim.css";
import { MenuNavbar1 } from "../components/MenuNavbar";
import { Link } from "react-router-dom";

export default function MonthFlavour() {
  return (
    <div className="content">
      <MenuNavbar1 />
      <div className="monthflavour_content">
        <h2 className="monthflavour_header">5월 이달의 맛</h2>
      </div>
      <div className="monthflavour_form">
        <header className="monthflavour_box">
          <p className="monthflavor_title_eng">Shooting Star in Wonderland</p>
          <h3 className="monthflavour_title_kor">이상한 나라의 슈팅스타</h3>
          <p className="monthflavour_description">
            딸기와 블루베리가 들어간 솜사탕 아이스크림에 톡톡 튀는 팝핑캔디로
            입안 가득 즐거운 맛
          </p>
        </header>

        <div className="monthflavour_bar"></div>

        <ul className="monthflavour_items">
          <li>
            <img src="/images/monthflavour/blueberry.png" />
            <p className="monthflavour_item_name">블루베리</p>
          </li>
          <li>
            <img src="/images/monthflavour/strawberry.png" />
            <p className="monthflavour_item_name">딸기</p>
          </li>
          <li>
            <img src="/images/monthflavour/candy.png" />
            <p className="monthflavour_item_name">팝핑 캔디</p>
          </li>
        </ul>
      </div>
      <div>
        <img
          className="monthflavour_product"
          src="/images/monthflavour/shootingstarview.jpg"
        />
      </div>

      <div>
        <header>
          <h4 className="monthflavour_new_title">이달의 신제품</h4>
        </header>
        <ul className="monthflavour_new_items">
          <Link to={"/menu/icecreamdetail/33"}>
            <li className="monthflavour_new_item">
              <img
                className="monthflavour_new_img"
                src="/images/monthflavour/shootingstar.jpg"
              />
              <p className="monthflavour_new_item_name">
                이상한 나라의 슈팅스타
              </p>
            </li>
          </Link>
          <Link to={"/menu/icecreamcakedetail/19"}>
            <li className="monthflavour_new_item">
              <img
                className="monthflavour_new_img happyjoy"
                src="/images/monthflavour/happyjoy.png"
              />
              <p className="monthflavour_new_item_name">해피 조이 큐브</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

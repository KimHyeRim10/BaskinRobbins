import React, { useEffect, useState } from "react";
import "../css/seulki.css";
import SeulkiHeader from "../components/SeulkiHeader.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function MyCart() {
  const [cartList, setCartList] = useState([]);

  const handleClick = () => {
    alert("주문이 완료되었습니다!");
  };

  return (
    <div className="content cart_form">
      <SeulkiHeader title={"장바구니"} />
      <div>
        <p className="delivery_header_font">
          지금 주문하시고 배스킨라빈스와 달콤한 시간을 즐겨보세요
          <span className="exclamation_mark">!</span>
        </p>
      </div>
      <div className="login_line"></div>

      <table className="cart_table">
        <thead>
          <tr>
            <th>NO.</th>
            <th>제품 정보</th>
            <th>제품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>구분</th>
            <th>삭제하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="cart_delete_btn" type="button">
                <FontAwesomeIcon icon={faX} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="cart_table2_div">
        <table className="cart_table2">
          <tr>
            <th className="cart_table2_th1">총 결제금액</th>
            <th>
              <span className="cart_table2_span">원</span>
            </th>
          </tr>
        </table>
      </div>

      <p className="delivery_form_bottom_p">
        ※ 아이스크림은 싱글사이즈만 주문 가능합니다
      </p>

      <button className="cart_button" type="submit" onClick={handleClick}>
        주문하기
      </button>
    </div>
  );
}

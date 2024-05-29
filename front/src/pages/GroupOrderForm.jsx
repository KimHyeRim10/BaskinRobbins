import React from "react";
import "../css/seulki.css";
import OrderMenubar from "../components/OrderMenubar.jsx";

export default function GroupOrderForm() {
  return (
    <div>
      <OrderMenubar />

      <div>
        <h2 className="delivery_header">단체주문서 작성</h2>
      </div>
      <div>
        <p className="delivery_header_font">
          단체주문도 언제나, 어디서나 배스킨라빈스
          <span className="exclamation_mark">!</span>
        </p>
      </div>
    </div>
  );
}

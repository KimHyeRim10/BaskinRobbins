import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export function SeulkiModal({ openModal, closeModal }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal_out_s" onClick={closeModal}>
      <div className="modal_container_s" onClick={(e) => e.stopPropagation()}>
        <button className="close_s" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="modal_content_s">
          <section className="modal_content_section">
            <img
              className="modal_content_section1_img"
              src="/images/grouporder/img_info_item_1.png"
              alt=""
            />
            <p className="modal_content_s_p">
              <span className="grouporder_span_b">아이스크림 제품</span>
              <br />
              <p className="modal_content_p_hight">
                회사, 관공서, 은행, 학교 등 <br />
                <span className="modal_content_span_p">한 장소로 일괄배송</span>
              </p>
            </p>

            <div className="modal_content_mini_div_1">
              <div className="modal_content_mini">할인 및 혜택</div>
              <p className="grouporder_mini_p modal_content_mini_p">
                할인혜택 &nbsp;
                <span className="grouporder_mini_point">별도협의 필요</span>
              </p>
              <p className="grouporder_mini_p">
                50만원 이상 &nbsp;
                <span className="grouporder_mini_point">배송/배달 서비스</span>
              </p>
            </div>
            <div className="modal_content_mini_div_2">
              <p>
                <div className="modal_content_mini">결제방식</div>
              </p>
              <p className="grouporder_mini_p modal_content_mini_p">
                현금 (계좌이체) / 카드 (전화결제)
              </p>
            </div>
          </section>

          <section className="modal_content_section"></section>

          <section className="modal_content_section"></section>

          <section className="modal_content_section"></section>
        </div>
      </div>
    </div>
  );
}

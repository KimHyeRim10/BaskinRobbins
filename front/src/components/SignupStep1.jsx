import React from "react";
import { validateCheckStep1, handleFocus } from "../apis/seulkiValidate.js";

export default function SignupStep1({ next, formData, handleCheck }) {
  return (
    <div className="content signup_form">
      <h2>Shoppy Signup</h2>
      <div>
        <h3>약관동의</h3>
        <p>회원가입에 필요한 약관에 동의합니다</p>
      </div>
      <div>
        <div>
          <input
            type="checkbox"
            onChange={(e) => handleCheck("all", e.target.checked)}
            onFocus={() => handleFocus("all")}
          />
          <span>모두 동의합니다</span>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, nus
          sed cumque esse corrupti nesciunt impedit ipsam quam, incidunt qu
        </p>
      </div>
      <div>
        <h4>서비스 약관 동의</h4>
        <textarea>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          numquam optio aspernatur quia, perspiciatis, dolores delectus libero
          perferendis ab reprehenderit tempora. Omnis modi numquam sunt. Esse
          fuga nesciunt vitae magnam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptate, deserunt neque alias nostrum dolor cumque
          ex, saepe blanditiis quibusdam hic atque reprehenderit laboriosam
          incidunt amet earum dolores vel sapiente repudiandae!
        </textarea>
        <div>
          <input
            type="checkbox"
            name="service"
            id="service"
            checked={formData.service}
            // onChange={handleCheckService} //* 서비스,퍼스널 각각보낼때
            onChange={() => handleCheck("service")}
            onFocus={() => handleFocus("service")}
          />
          <span>동의합니다</span>
        </div>
      </div>
      <div>
        <h4>개인정보 수집 및 이용 동의</h4>
        <textarea>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          vel cupiditate, cum nobis sint deserunt labore voluptatem, atque
          aperiam enim reiciendis impedit distinctio tempora incidunt quis ad
          repellendus! Aut, id.
        </textarea>
        <div>
          <input
            type="checkbox"
            name="personal"
            id="personal"
            checked={formData.personal}
            // onChange={handleCheckPersonal} //* 서비스,퍼스널 각각보낼때
            onChange={() => handleCheck("personal")}
            onFocus={() => handleFocus("personal")}
          />
          <span>동의합니다</span>
        </div>
      </div>
      <button type="button" onClick={() => validateCheckStep1(next, formData)}>
        다음
      </button>
    </div>
  );
}

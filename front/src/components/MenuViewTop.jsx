import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
/* *
 *   MenuViewTop
 */
export function MenuViewTop({
  icecreamimage,
  bgcolor,
  line,
  engname,
  korname1,
  korname2,
  dep,
  price,
  ingredients,
  //sizecheck,
  btnleft,
  btnright,
  id,
  addCartCount,
}) {
  const [size, setSize] = useState(false); // 타입

  const price_org = price ? price.toLocaleString() : "0";

  const navigate = useNavigate();
  const location = useLocation();
  /* 
  const handleNavigate = (direction) => {
    const path = location.pathname;
    const match = path.match(/(\d+)$/);

    if (match) {
      const currentId = parseInt(match[0], 10);
      const newId = currentId + direction;
      navigate(`${path.replace(/\d+$/, "")}${newId}`);
    }
  }; */

  // 다음으로 이동
  const handleNavigatenext = () => handleNavigate(1);

  // 이전으로 이동
  const handleNavigatepre = () => handleNavigate(-1);

  const icecreamcheck = () => {
    if (line === "ICECREAM") {
      return (
        <div>
          <li>
            <input
              type="radio"
              name="icecreamtype"
              onChange={(e) => setSize(e.target.value)}
              value="싱글"
            />
            <label>싱글</label>
          </li>
          <li>
            <input
              type="radio"
              name="icecreamtype"
              onChange={(e) => setSize(e.target.value)}
              value="콘"
            />
            <label>콘</label>
          </li>
        </div>
      );
    } else if (line === "BLOCK PACK" || line === "READY PACK") {
      return (
        <li>
          <input
            type="radio"
            name="icecreamtype"
            onChange={(e) => setSize(e.target.value)}
            value="컵"
          />
          <label>컵</label>
        </li>
      );
    } else if (line === "ICECREAM CAKE") {
      return (
        <li>
          <input
            type="radio"
            name="icecreamtype"
            onChange={(e) => setSize(e.target.value)}
            value="아이스크림 케이크"
          />
          <label>아이스크림 케이크</label>
        </li>
      );
    }
  };

  const addCartItem = (id) => {
    const url = "http://localhost:8080/carts/add";
    axios({
      method: "post",
      url: url,
      data: { pid: id, size: size, type: line },
    })
      .then((result) => {
        if (result.data.cnt === 1) alert("장바구니에 추가되었습니다!");
        addCartCount(result.data.cnt);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="menuviewtop">
      <section
        className="menuviewtop_img_box"
        style={{ backgroundColor: `${bgcolor}` }}
      >
        <img className="menuviewtop_imageice" src={icecreamimage}></img>
        {line === "ICECREAM" && (
          <img
            className="menuviewtop_imagecone"
            src="/images/icecream/cone.png"
          ></img>
        )}
      </section>

      <section className="menuviewtop_description_box">
        <div className="menuviewtop_description_box_mini">
          <p className="menuviewtop_line">{line}</p>
          <h2>
            <span className="menuviewtop_engname">{engname}</span>
            <br />
            <div>
              <span className="menuviewtop_korname1">{korname1}</span>
              <br />
              <span className="menuviewtop_korname2">{korname2}</span>
            </div>
          </h2>
          <p className="menuviewtop_description">{dep}</p>
          <p className="menuviewtop_price">{price_org}원</p>
          {ingredients && ingredients.length > 0 && (
            <ul className="menuviewtop_ingredients">
              {ingredients.map((ingredient) => (
                <li key={ingredient.id}>
                  <img
                    className="menuviewtop_ingredient_item"
                    src={ingredient.inimage}
                  />
                  <p className="menuviewtop_ingredient_name">
                    {ingredient.inname}
                  </p>
                </li>
              ))}
            </ul>
          )}
          <form>
            <ul className="menuviewtop_cartlist">
              <li className="menuviewtop_cart menuviewtop_size">
                {icecreamcheck(line)}
              </li>
              <li>
                <button
                  className="menuviewtop_cartlist button"
                  type="button"
                  onClick={() => addCartItem(id)}
                >
                  장바구니 담기
                </button>
              </li>
            </ul>
          </form>
        </div>
      </section>
      <div className="menuviewtop_btn_left" onClick={handleNavigatenext}>
        <img
          className="menuviewtop_btn_image_left"
          src="/images/productdetail/menuviewtop_btn_left.png"
        />
        <span className="menuviewtop_btn_name">{btnleft}</span>
      </div>
      <div className="menuviewtop_btn_right" onClick={handleNavigatepre}>
        <span className="menuviewtop_btn_name">{btnright}</span>
        <img
          className="menuviewtop_btn_image_right"
          src="/images/productdetail/menuviewtop_btn_right.png"
        />
      </div>
    </div>
  );
}

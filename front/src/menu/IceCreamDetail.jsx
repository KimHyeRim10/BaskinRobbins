import React, { useEffect, useState } from "react";
import "../css/hyerim.css";
import { MenuViewTop } from "../components/MenuViewTop";
import { MenuViewNutrition } from "../components/MenuViewNutrition";
import { MenuviewImage } from "../components/MenuviewImage";
import { MenuviewSize } from "../components/MenuviewSize";
import { RelatedProduct } from "../components/RelatedProduct";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

export default function IceCreamDetail({ addCartCount }) {
  const { id } = useParams();

  const { state } = useLocation();
  const { list } = state;

  const [icecreamdetail, setIceCreamDetail] = useState({});
  const [icecreamingredients, setIceCreamIngredients] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8080/menu/icecreamdetail/${id}`).then((res) => {
      setIceCreamDetail(res.data.icecreamdetail);
      setIceCreamIngredients(res.data.ingredients);
    });
  }, [id]);

  return (
    <div className="content">
      <MenuViewTop
        icecreamimage={icecreamdetail.icecreamimage}
        bgcolor={icecreamdetail.bgcolor}
        line={icecreamdetail.line}
        engname={icecreamdetail.engname}
        korname1={icecreamdetail.korname1}
        korname2={icecreamdetail.korname2}
        dep={icecreamdetail.dep}
        price={icecreamdetail.price}
        ingredients={icecreamingredients}
        btnleft={icecreamdetail.btnleft}
        btnright={icecreamdetail.btnright}
        id={id}
        addCartCount={addCartCount}
        list={list}
      />
      <MenuViewNutrition
        servingsize={icecreamdetail.servingsize}
        calory={icecreamdetail.calory}
        sugar={icecreamdetail.sugar}
        protein={icecreamdetail.protein}
        saturatedfat={icecreamdetail.saturatedfat}
        natrium={icecreamdetail.natrium}
        allergy={icecreamdetail.allergy}
      />
      <MenuviewImage menuviewimage={icecreamdetail.menuviewimage} />
      <MenuviewSize />
      <RelatedProduct id={id} type={"icecream"} list={list} />
    </div>
  );
}

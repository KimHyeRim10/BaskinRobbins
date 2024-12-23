import React from "react";
import "../css/hyerim.css";
import { MenuViewTop } from "../components/MenuViewTop";
import { RelatedProduct } from "../components/RelatedProduct";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PrepackDetail({ addCartCount }) {
  const { id } = useParams();

  const { state } = useLocation();
  const { list } = state;
  const [prepackdetail, setPrepackDetail] = useState({});
  const [prepackingredients, setPrepackIngredients] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8080/menu/prepackdetail/${id}`).then((res) => {
      setPrepackDetail(res.data.prepackdetail);
      setPrepackIngredients(res.data.ingredients);
    });
  }, [id]);

  return (
    <div className="content">
      <MenuViewTop
        icecreamimage={prepackdetail.icecreamimage}
        bgcolor={prepackdetail.bgcolor}
        line={prepackdetail.line}
        engname={prepackdetail.engname}
        korname1={prepackdetail.korname1}
        korname2={prepackdetail.korname2}
        dep={prepackdetail.dep}
        price={prepackdetail.price}
        ingredients={prepackingredients}
        btnleft={prepackdetail.btnleft}
        btnright={prepackdetail.btnright}
        id={id}
        addCartCount={addCartCount}
        list={list}
      />
      <RelatedProduct id={id} type={"prepack"} list={list} />
    </div>
  );
}

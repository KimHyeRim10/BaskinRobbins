import React from "react";
import "../css/hyerim.css";
import { MenuViewTop } from "../components/MenuViewTop";
import { RelatedProduct } from "../components/RelatedProduct";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PrepackDetail({ addCartCount }) {
  const { id } = useParams();
  console.log(id);
  const [prepackdetail, setPrepackDetail] = useState({});
  const [prepackingredients, setPrepackIngredients] = useState([]);
  // const [prepacksizecheck, setPrepackSizeCheck] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/menu/prepackdetail/${id}`)
      .then((res) => setPrepackDetail(res.data));
    axios
      .get(`http://127.0.0.1:8080/menu/prepackingredients/${id}`)
      .then((res) => {
        setPrepackIngredients(res.data);
      });
    // axios
    //   .get(`http://127.0.0.1:8080/menu/prepacksizecheck/${id}`)
    //   .then((res) => {
    //     setPrepackSizeCheck(res.data);
    //   });
  }, []);

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
        // sizecheck={prepacksizecheck}
        btnleft={prepackdetail.btnleft}
        btnright={prepackdetail.btnright}
        id={id}
        addCartCount={addCartCount}
      />
      <RelatedProduct id={id} type={"prepack"} />
    </div>
  );
}

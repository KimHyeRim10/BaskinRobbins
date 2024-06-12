import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

/**
 * RelatedProduct
 */
export function RelatedProduct({ id, type }) {
  const [relatedProduct, setRelatedProduct] = useState([]);
  //const [preRelatedProduct, setPreRelatedProduct] = useState([]);

  useEffect(() => {
    axios({
      method: "post",
      url: `http://127.0.0.1:8080/option/relatedproduct`,
      data: {
        id: id,
        type: type,
      },
    })
      .then((res) => {
        //console.log(res.data);
        setRelatedProduct(res.data);
      })
      .catch((error) => console.log(error));
    // axios
    //   .get(`http://127.0.0.1:8080/menu/prepackrelatedproduct/${id}`)
    //   .then((res) => {
    //     setPreRelatedProduct(res.data);
    //   })
    //   .catch((error) => console.log(error));
  }, [id]);

  // console.log(relatedproduct);

  return (
    <div className="relatedproduct">
      {relatedProduct.length !== 0 && (
        <h3 className="relatedproduct_title">관련상품</h3>
      )}
      <div className="relatedproducts">
        {relatedProduct.map((product, index) => (
          <div className="relatedproduct_box" key={index}>
            <Link to={`/menu/${product.linkname}detail/${`${product.linkid}`}`}>
              <img
                className="relatedproduct_image"
                src={product.relatedimage}
              ></img>
              <span className="relatedproduct_name">{product.relatedname}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

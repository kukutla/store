import React from "react";
import { Link } from "react-router-dom";

export default function Product({ image, title, price, id }) {
  return (
    <article className="product">
      <div className="img-container">
        {/* <img src={image.url} alt="title" /> */}
        <img src={image} alt="title" />
        <Link to={`/products/${id}`} className="btn btn-primary product-link">
          details
        </Link>
      </div>
      <div className="product-footer">
        <div className="product-title">{title}</div>
        <div className="product-price">{price}</div>
      </div>
    </article>
  );
}

import React from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../utils/helpers";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import { useHistory } from "react-router-dom";
import { CartContext } from "../context/cart";

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = React.useContext(ProductContext);
  const { addToCart } = React.useContext(CartContext);
  const product = getProduct(products, id);
  //console.log("found product=>", product);
  const history = useHistory();
  if (products.length === 0) {
    return <Loading />;
  } else {
    if (product === null) {
      return <section>Product info not found</section>;
    } else {
      const {
        // image: { url },
        image,
        title,
        price,
        description,
      } = product;
      console.log("ProductDetails")
      console.log(product)
      return (
        <section className="single-product">
          {/* <img src={url} alt={title} className="single-product-image" /> */}
          <img src={image} alt={title} className="single-product-image" />
          <article>
            <h1>{title}</h1>
            <h2>${price}</h2>
            <p>{description}</p>
            <button
              className="btn btn-primary btn-block"
              onClick={() => {
                addToCart(product);
                history.push("/cart");
              }}
            >
              add to cart
            </button>
          </article>
        </section>
      );
    }
  }
}

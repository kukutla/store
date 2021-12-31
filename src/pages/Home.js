import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import { ProductContext } from "../context/products";
export default function Home() {
  const { featured } = React.useContext(ProductContext);
  console.log("featured=> ", featured);
  return (
    <>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          our products
        </Link>
      </Hero>

      <FeaturedProducts />
    </>
  );
}

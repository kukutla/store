import React from "react";
//import axios from "axios";
//import url from "../utils/URL";
import featuredProducts from "../utils/helpers";
import data from "../utils/localCart.js";
export const ProductContext = React.createContext();

// state change
// props change

// useEffect();
// let's perform side effects - data fetching,   window event listener
// by default runs after every render
// cb as first parameter
// returns cleanup function to avoid memory leaks, so cannot be async
// second argument - array of values(dependencies)

//Provider, Consumer, useContext()

//provider,consumer, useContext
export default function ProductProvider({ children }) {
  //console.log(React.useState(false));
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
   /* axios.get(`${url}/products`).then((response) => {
      // console.log("response=>", response);
      console.log("data=>", data);
      setProducts(response.data);
      //setFeatured(response.data.filter((item) => item.featured));
      setFeatured(featuredProducts(response.data));
      setLoading(false);
    }
    );*/
    console.log("data=>", data);
    setProducts(data);
    setFeatured(featuredProducts(data));
    setLoading(false);
    return () => {
      console.log("clean up call");
    };
  }, []);
  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
}

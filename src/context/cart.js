import React from "react";
const CartContext = React.createContext();

function getLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}

function CartProvider({ children }) {
  const [cart, setCart] = React.useState(getLocalStorage());
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  React.useEffect(() => {
    console.log("useEffect");
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    let localCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(localCartItems);
    let localCartTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    setTotal(parseFloat(localCartTotal.toFixed(2)));
  }, [cart]);
  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
  };
  const increaseItem = (id) => {
    setCart(
      [...cart].map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount + 1 }
          : { ...item };
      })
    );
  };
  const decreaseItem = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
    } else {
      setCart(
        [...cart].map((item) => {
          return item.id === id
            ? { ...item, amount: item.amount - 1 }
            : { ...item };
        })
      );
    }
  };
  const addToCart = (product) => {
    console.log(product);
    const {
      id,
      title,
      // image: { url },
      image,
      price,
    } = product;
    console.log(product);
    const item = cart.find((item) => item.id === id);
    console.log(item);
    if (item) {
      increaseItem(id);
      return;
    } else {
      // const newItem = { id, title, image: url, price, amount: 1 };
      const newItem = { id, title, image, price, amount: 1 };
      setCart([...cart, newItem]);
    }
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseItem,
        decreaseItem,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };

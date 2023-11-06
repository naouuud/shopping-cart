import { useState } from "react";
import MainRouter from "./MainRouter";
import CartContext from "./CartContext";

const CartLoader = () => {
  const [cart, setCart] = useState({});

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <MainRouter />
    </CartContext.Provider>
  );
};

export default CartLoader;

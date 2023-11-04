import MainRouter from "./MainRouter";
import { useState } from "react";

const CartLoader = () => {
  const [cart, setCart] = useState([]);

  return <MainRouter cart={cart} setCart={setCart} />;
};

export default CartLoader;

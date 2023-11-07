import { useContext } from "react";
import DataContext from "./DataContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, data } = useContext(DataContext);
  console.log(data);
  return Object.keys(cart).length === 0 ? (
    <h1>Your cart is empty</h1>
  ) : (
    Object.keys(cart).map((key) => (
      <CartItem key={key} id={key} quantity={cart[key]} />
    ))
  );
};

export default Cart;

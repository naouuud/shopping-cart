import { useContext } from "react";
import CartContext from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return Object.keys(cart).length === 0 ? (
    <h1>Your cart is empty</h1>
  ) : (
    Object.keys(cart).map((key) => (
      <CartItem key={key} id={key} quantity={cart[key]} />
    ))
  );
};

export default Cart;

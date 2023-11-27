import { useContext } from "react";
import DataContext from "./DataContext";
import CartItem from "./CartItem";
import Total from "./Total";

const Cart = () => {
  const { cart } = useContext(DataContext);

  const isEmpty = Object.keys(cart).length === 0;

  return isEmpty ? (
    <>
      <h1>Your cart is empty</h1>
      <Total priceList />
    </>
  ) : (
    <>
      {Object.keys(cart).map((key) =>
        cart[key] > 0 ? (
          <CartItem key={key} id={parseInt(key)} quantity={cart[key]} />
        ) : null
      )}
      <Total />
    </>
  );
};

export default Cart;

import PropTypes from "prop-types";
import { useContext } from "react";
import DataContext from "./DataContext";

const ChangeQuantity = ({ id }) => {
  const { cart, setCart } = useContext(DataContext);

  const addToCart = (e) => {
    e.preventDefault();
    const nextCart = cart[id]
      ? { ...cart, [id]: cart[id] + 1 }
      : { ...cart, [id]: 1 };
    setCart(nextCart);
  };

  const removeFromCart = (e) => {
    e.preventDefault();
    const nextCart = cart[id]
      ? { ...cart, [id]: cart[id] - 1 >= 0 ? cart[id] - 1 : 0 }
      : { ...cart, [id]: 0 };
    setCart(nextCart);
  };

  return (
    <>
      <span>Quantity:</span>
      <button onClick={removeFromCart}>-</button>
      <span>{cart[id] ? cart[id] : 0}</span>
      <button onClick={addToCart}>+</button>
    </>
  );
};

ChangeQuantity.propTypes = {
  id: PropTypes.number,
};

export default ChangeQuantity;

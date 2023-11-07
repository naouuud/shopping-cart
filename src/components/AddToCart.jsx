import PropTypes from "prop-types";
import { useContext, useState } from "react";
import DataContext from "./DataContext";

const AddToCart = ({ id }) => {
  const { cart, setCart } = useContext(DataContext);
  const [quantity, setQuantity] = useState(1);
  // console.log(cart);

  const addToCart = (e) => {
    e.preventDefault();
    const nextCart = cart[id]
      ? { ...cart, [id]: cart[id] + parseInt(quantity) }
      : { ...cart, [id]: parseInt(quantity) };
    setCart(nextCart);
    setQuantity(1);
  };

  return (
    <form onSubmit={addToCart}>
      <label htmlFor={`quantity-${id}`}>Quantity:</label>
      <input
        onChange={(e) => setQuantity(e.target.value)}
        type="number"
        id={`quantity-${id}`}
        min={1}
        max={10}
        value={quantity}
      />
      <button>Add To Cart</button>
    </form>
  );
};

AddToCart.propTypes = {
  id: PropTypes.number,
};

export default AddToCart;

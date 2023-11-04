import PropTypes from "prop-types";
import { useState } from "react";

const CartLoader = () => {
  const [cart, setCart] = useState([]);

  return cart.length === 0 ? (
    <h1>Your cart is empty. Please shop!</h1>
  ) : (
    <h1>(cart items)</h1>
  );
};

CartLoader.propTypes = {
  className: PropTypes.string,
};

export default CartLoader;

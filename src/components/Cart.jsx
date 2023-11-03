import PropTypes from "prop-types";

const Cart = ({ className }) => {
  return <h1 className={className}>This is the cart</h1>;
};

Cart.propTypes = {
  className: PropTypes.string,
};

export default Cart;

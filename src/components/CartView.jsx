import SharedLayout from "./SharedLayout";
import Cart from "./Cart";
import PropTypes from "prop-types";

const CartView = ({ cart, setCart }) => {
  return (
    <SharedLayout>
      <Cart cart={cart} setCart={setCart} />
    </SharedLayout>
  );
};

CartView.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default CartView;

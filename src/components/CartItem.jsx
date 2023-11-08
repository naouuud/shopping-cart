import PropTypes from "prop-types";
import { useContext } from "react";
import DataContext from "./DataContext";

const CartItem = ({ id, quantity }) => {
  const { data } = useContext(DataContext);
  const product = data.find((item) => item.id == id);
  const subtotal = product.price * quantity;

  return (
    <>
      <h3>{product.title}</h3>
      <h3>Quantity: {quantity}</h3>
      <h3>Subtotal: {subtotal}</h3>
    </>
  );
};

CartItem.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
  priceList: PropTypes.object,
};

export default CartItem;

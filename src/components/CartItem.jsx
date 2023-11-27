import PropTypes from "prop-types";
import { useContext } from "react";
import DataContext from "./DataContext";
import ChangeQuantity from "./ChangeQuantity";

const CartItem = ({ id, quantity }) => {
  const { data } = useContext(DataContext);
  const product = data.find((item) => item.id == id);
  const subtotal = (product.price * quantity).toFixed(2);

  return (
    <>
      <p>{product.title}</p>
      <p>Quantity: {quantity}</p>
      <p>Subtotal: {subtotal}</p>
      <ChangeQuantity id={id} />
    </>
  );
};

CartItem.propTypes = {
  id: PropTypes.number,
  quantity: PropTypes.number,
  priceList: PropTypes.object,
};

export default CartItem;

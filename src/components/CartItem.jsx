import PropTypes from "prop-types";
import { useContext } from "react";
import DataContext from "./DataContext";

const CartItem = ({ id, quantity }) => {
  const { data } = useContext(DataContext);
  const product = data.find((item) => item.id == id);

  return (
    <>
      <h3>{product.title}</h3>
      <h3>{quantity}</h3>
    </>
  );
};

CartItem.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
};

export default CartItem;

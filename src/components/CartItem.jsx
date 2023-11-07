import PropTypes from "prop-types";

const CartItem = ({ id, quantity }) => {
  return (
    <ul>
      <li>
        Product #{id}: {quantity}
      </li>
    </ul>
  );
};

CartItem.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
};

export default CartItem;

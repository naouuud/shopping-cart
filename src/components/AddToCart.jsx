import PropTypes from "prop-types";

const AddToCart = ({ id }) => {
  const addToCart = () => {};

  return (
    <form onSubmit={addToCart}>
      <label htmlFor={`quantity-${id}`}>Quantity:</label>
      <input type="number" id={`quantity-${id}`} />
      <button>Add To Cart</button>
    </form>
  );
};

AddToCart.propTypes = {
  id: PropTypes.number,
};

export default AddToCart;

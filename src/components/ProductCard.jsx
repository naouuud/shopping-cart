import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return <div>{product.title}</div>;
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;

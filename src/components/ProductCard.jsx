import PropTypes from "prop-types";
import AddToCart from "./AddToCart";

const ProductCard = ({ product }) => {
  return (
    <>
      <h3>{product.title}</h3>
      <img src="" alt={`Image of ${product.title}`} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>
        {product.rating.rate} ({product.rating.count} votes)
      </p>
      <hr />
      <AddToCart id={product.id} />
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;

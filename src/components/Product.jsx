import AddToCart from "./AddToCart";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <>
      <h1>{product.title}</h1>
      <img src="" alt={`Image of ${product.title}`} />
      <h3>{product.description}</h3>
      <h3>{product.price}</h3>
      <h3>
        {product.rating.rate} ({product.rating.count} votes)
      </h3>
      <hr />
      <AddToCart id={product.id} />
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
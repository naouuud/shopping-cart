import PropTypes from "prop-types";
import AddToCart from "./AddToCart";
import LoadingMessage from "./LoadingMessage";
import ProductError from "./ProductError";

const ProductContainer = ({ product, error, loading }) => {
  return loading ? (
    <LoadingMessage item="product" />
  ) : product ? (
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
  ) : (
    <ProductError error={error} />
  );
};

ProductContainer.propTypes = {
  product: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
};

export default ProductContainer;

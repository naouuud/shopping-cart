import PropTypes from "prop-types";
import AddToCart from "./AddToCart";
import useData from "./useData";
import LoadingPage from "./LoadingPage";
import ProductError from "./ProductError";

const Product = ({ id }) => {
  const { data, loading, error } = useData(
    `https://fakestoreapi.com/products/${id}`
  );
  const product = data;
  return loading ? (
    <LoadingPage item="product" />
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

export default Product;

Product.propTypes = {
  id: PropTypes.string,
};

import PropTypes from "prop-types";
import LoadingMessage from "./LoadingMessage";
import ProductError from "./ProductError";
import Product from "./Product";

const ProductContainer = ({ product, filterError, dataError, loading }) => {
  return loading ? (
    <LoadingMessage item="product" />
  ) : product ? (
    <Product product={product} />
  ) : dataError ? (
    <ProductError error={dataError} />
  ) : filterError ? (
    <ProductError error={filterError} />
  ) : null;
};

ProductContainer.propTypes = {
  product: PropTypes.object,
  filterError: PropTypes.object,
  dataError: PropTypes.object,
  loading: PropTypes.bool,
};

export default ProductContainer;

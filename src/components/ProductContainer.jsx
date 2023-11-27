import PropTypes from "prop-types";
import LoadingMessage from "./LoadingMessage";
import ProductError from "./ProductError";
import StyledProduct from "../styled/StyledProduct";

const ProductContainer = ({ product, filterError, dataError, loading }) => {
  return loading ? (
    <LoadingMessage item="product" />
  ) : product ? (
    <StyledProduct product={product} />
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

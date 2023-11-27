import ChangeQuantity from "./ChangeQuantity";
import PropTypes from "prop-types";

const Product = ({ className, product }) => {
  return (
    <div className={className}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={`Image of ${product.title}`} />
      <h3>{product.description}</h3>
      <h3>{product.price}</h3>
      <h3>
        {product.rating.rate} ({product.rating.count} votes)
      </h3>
      <hr />
      <ChangeQuantity id={product.id} />
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
};

export default Product;

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AddToCart from "./AddToCart";

const ProductCard = ({ className, product }) => {
  return (
    <div className={className}>
      <h3>
        <Link to={`products/${product.id}`}>{product.title}</Link>
      </h3>
      <img src="" alt={`Image of ${product.title}`} />
      <div className="description">{product.description}</div>
      <div className="price">{product.price}</div>
      <div className="rating">
        {product.rating.rate} ({product.rating.count} votes)
      </div>
      <hr />
      <AddToCart id={product.id} />
    </div>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
};

export default ProductCard;

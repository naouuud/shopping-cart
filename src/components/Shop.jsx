import PropTypes from "prop-types";

const Shop = ({ className }) => {
  return <h1 className={className}>This is the shop</h1>;
};

Shop.propTypes = {
  className: PropTypes.string,
};

export default Shop;

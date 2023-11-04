import PropTypes from "prop-types";

const ShopError = ({ error }) => {
  console.log(error);
  return (
    <h1>Apologies, the shop has failed to load! Please refresh the page.</h1>
  );
};

ShopError.propTypes = {
  error: PropTypes.object,
};

export default ShopError;

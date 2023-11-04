import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductError = ({ error }) => {
  console.log(error);
  return (
    <>
      <h1>Oops, we can&apos;t find the product you&apos;re looking for!</h1>
      <h2>
        <Link to="/">Return to the store</Link>
      </h2>
    </>
  );
};

ProductError.propTypes = {
  error: PropTypes.object,
};

export default ProductError;

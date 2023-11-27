import { Link } from "react-router-dom";

const CartError = () => {
  return (
    <h1>
      Woops, there is an error in processing your cart. Please{" "}
      <Link to="/cart">try again.</Link>
    </h1>
  );
};

export default CartError;

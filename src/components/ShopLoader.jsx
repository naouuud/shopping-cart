import PropTypes from "prop-types";
import useData from "./useData";
import ShopError from "./ShopError";
import LoadingPage from "./LoadingPage";
import ShopContainer from "./ShopContainer";

const ShopLoader = () => {
  const { data, error, loading } = useData("https://fakestoreapi.com/products");

  return loading ? (
    <LoadingPage item={"shop"} />
  ) : data ? (
    <ShopContainer data={data} />
  ) : (
    <ShopError error={error} />
  );
};

ShopLoader.propTypes = {
  className: PropTypes.string,
};

export default ShopLoader;

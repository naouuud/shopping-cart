import PropTypes from "prop-types";
import useData from "./FetchData";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import ShopContainer from "./ShopContainer";

const ShopLoader = () => {
  const { data, error, loading } = useData("https://fakestoreapi.com/products");

  return loading ? (
    <LoadingPage />
  ) : data ? (
    <ShopContainer data={data} />
  ) : (
    <ErrorPage error={error} />
  );
};

ShopLoader.propTypes = {
  className: PropTypes.string,
};

export default ShopLoader;

import PropTypes from "prop-types";
import useData from "./useData";
import { Outlet } from "react-router-dom";

const ShopLoader = () => {
  const { data, error, loading } = useData("https://fakestoreapi.com/products");

  return <Outlet context={{ data, error, loading }} />;
};

ShopLoader.propTypes = {
  className: PropTypes.string,
};

export default ShopLoader;

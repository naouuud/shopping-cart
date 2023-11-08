import useData from "./useData";
import { Outlet } from "react-router-dom";

const ShopLoader = () => {
  useData("https://fakestoreapi.com/products");

  return <Outlet />;
};

export default ShopLoader;

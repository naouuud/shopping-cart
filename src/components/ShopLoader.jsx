import DataContext from "./DataContext";
import { useContext } from "react";
import FetchData from "./FetchData";
import { Outlet } from "react-router-dom";

const ShopLoader = () => {
  const { data } = useContext(DataContext);
  !data && FetchData("https://fakestoreapi.com/products");

  return <Outlet />;
};

export default ShopLoader;

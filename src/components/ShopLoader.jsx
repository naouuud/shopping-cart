import DataContext from "./DataContext";
import { useContext } from "react";
import FetchData from "./FetchData";
import { Outlet } from "react-router-dom";

const ShopLoader = () => {
  const { data, error, loading } = useContext(DataContext);

  return data || error ? (
    <Outlet />
  ) : loading ? (
    <>
      <Outlet />
      <FetchData url={"https://fakestoreapi.com/products"} />
    </>
  ) : (
    <FetchData url={"https://fakestoreapi.com/products"} />
  );
};

export default ShopLoader;

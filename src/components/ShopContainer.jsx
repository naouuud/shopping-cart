import { useState, useContext } from "react";
import ShopError from "./ShopError";
import LoadingMessage from "./LoadingMessage";
import Shop from "./Shop";
import DataContext from "./DataContext";

const ShopContainer = () => {
  const { data, error, loading } = useContext(DataContext);
  const [category, setCategory] = useState("");
  return loading ? (
    <LoadingMessage item="shop" />
  ) : data ? (
    <Shop data={data} category={category} setCategory={setCategory} />
  ) : error ? (
    <ShopError error={error} />
  ) : null;
};

export default ShopContainer;

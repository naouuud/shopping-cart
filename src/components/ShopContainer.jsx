import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ShopError from "./ShopError";
import LoadingMessage from "./LoadingMessage";
import Shop from "./Shop";

const ShopContainer = () => {
  const { data, error, loading } = useOutletContext();
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

import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import ProductContainer from "./ProductContainer";

const ProductFilter = () => {
  const { id } = useParams();
  let { data, error, loading } = useOutletContext();
  const [product, setProduct] = useState(null);
  const [filterError, setFilterError] = useState(null);

  useEffect(() => {
    if (data) {
      const nextProduct = data.find((item) => item.id == id);
      if (nextProduct) setProduct(nextProduct);
      else setFilterError(new Error("Product not found"));
    }
  }, [data, id]);

  return (
    <ProductContainer
      product={product}
      filterError={filterError}
      dataError={error}
      loading={loading}
    />
  );
};

export default ProductFilter;

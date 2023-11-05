import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import ProductContainer from "./ProductContainer";

const ProductFilter = () => {
  const { id } = useParams();
  const { data, error, loading } = useOutletContext();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (data) {
      const nextProduct = data.find((item) => item.id == id);
      setProduct(nextProduct);
    }
  }, [data, id]);

  return <ProductContainer product={product} error={error} loading={loading} />;
};

export default ProductFilter;

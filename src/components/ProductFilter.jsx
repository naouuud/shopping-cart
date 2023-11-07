import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductContainer from "./ProductContainer";
import DataContext from "./DataContext";

const ProductFilter = () => {
  const { id } = useParams();
  const { data, error, loading } = useContext(DataContext);
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

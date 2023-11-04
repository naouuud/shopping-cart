import SharedLayout from "./SharedLayout";
import Product from "./Product";
import { useParams } from "react-router-dom";

const ProductView = () => {
  const { id } = useParams();

  return (
    <SharedLayout>
      <Product id={id} />
    </SharedLayout>
  );
};

export default ProductView;

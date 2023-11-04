import { useState } from "react";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const ShopContainer = ({ data }) => {
  const [category, setCategory] = useState("");

  return (
    <>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="men's clothing">Men&apos;s clothing</option>
        <option value="women's clothing">Women&apos;s clothing</option>
        <option value="jewelery">Jewellery</option>
        <option value="electronics">Electronics</option>
      </select>
      {category.length > 0
        ? data
            .filter((product) => product.category === category)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        : data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </>
  );
};

ShopContainer.propTypes = {
  data: PropTypes.array,
};

export default ShopContainer;

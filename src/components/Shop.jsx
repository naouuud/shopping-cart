import { StyledProductCard } from "../styled/StyledProductCard";
import PropTypes from "prop-types";

const Shop = ({ data, category, setCategory }) => {
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
              <StyledProductCard key={product.id} product={product} />
            ))
        : data.map((product) => (
            <StyledProductCard key={product.id} product={product} />
          ))}
    </>
  );
};

Shop.propTypes = {
  data: PropTypes.array,
  category: PropTypes.string,
  setCategory: PropTypes.func,
};

export default Shop;

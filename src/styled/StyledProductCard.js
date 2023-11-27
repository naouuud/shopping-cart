import styled from "styled-components";
import ProductCard from "../components/ProductCard";

export const StyledProductCard = styled(ProductCard)`
  border: 2px solid black;

  img {
    width: 200px;
  }

  h3 {
    color: blue;
  }

  .description {
    color: grey;
  }

  .price {
    color: green;
  }

  .rating {
    color: red;
  }
`;

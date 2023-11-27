import { useContext } from "react";
import DataContext from "./DataContext";
import generatePriceList from "./generatePriceList";

const Total = () => {
  const { cart, data } = useContext(DataContext);

  const priceList = generatePriceList(data);
  const isEmpty = Object.keys(cart).length === 0;

  const quantity = isEmpty
    ? 0
    : Object.values(cart).reduce((prev, curr) => prev + curr);

  const total = isEmpty
    ? "0.00"
    : Object.keys(cart)
        .map((key) => cart[key] * priceList[key])
        .reduce((prev, curr) => prev + curr)
        .toFixed(2);

  return (
    <>
      <h2>Items in cart: {quantity}</h2>
      <h2>Total: {total}</h2>
    </>
  );
};

export default Total;

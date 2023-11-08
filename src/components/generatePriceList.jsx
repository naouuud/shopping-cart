export const generatePriceList = (data) => {
  const priceList = {};

  if (data) {
    data.map((item) => {
      priceList[item.id] = item.price;
    });
  }
  console.log("price list generated");
  return priceList;
};

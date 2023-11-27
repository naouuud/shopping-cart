const generatePriceList = (data) => {
  const priceList = {};

  if (data) {
    data.forEach((item) => {
      priceList[item.id] = item.price;
    });
  }

  return priceList;
};

export default generatePriceList;

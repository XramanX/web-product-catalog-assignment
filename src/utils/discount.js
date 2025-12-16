export const getDiscountPercent = (category) => {
  if (category === "men's clothing") return 30;
  if (category === "jewelery") return 10;
  return 0;
};

export const getDiscountedPrice = (product) => {
  const discount = getDiscountPercent(product.category);
  return product.price - (product.price * discount) / 100;
};

import { getDiscountedPrice } from "./discount";

export const filterByCategory = (products, category) => {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
};

export const filterByPrice = (products, [min, max]) => {
  return products.filter((p) => p.price >= min && p.price <= max);
};

export const sortProducts = (products, sortType, selectedCategory) => {
  const result = [...products];

  if (sortType === "price-asc") {
    return result.sort((a, b) => a.price - b.price);
  }

  if (sortType === "price-desc") {
    return result.sort((a, b) => b.price - a.price);
  }

  if (sortType === "discount" && selectedCategory === "all") {
    return result.sort((a, b) => {
      const da = a.price - getDiscountedPrice(a);
      const db = b.price - getDiscountedPrice(b);
      return db - da;
    });
  }

  return result;
};

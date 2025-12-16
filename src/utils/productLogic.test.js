import { describe, it, expect } from "vitest";
import { filterByCategory, filterByPrice, sortProducts } from "./productLogic";

const products = [
  { id: 1, price: 100, category: "jewelery" },
  { id: 2, price: 200, category: "men's clothing" },
  { id: 3, price: 150, category: "electronics" },
];

describe("filterByCategory", () => {
  it("returns all products for 'all'", () => {
    const result = filterByCategory(products, "all");
    expect(result.length).toBe(3);
  });

  it("filters by category", () => {
    const result = filterByCategory(products, "jewelery");
    expect(result.length).toBe(1);
    expect(result[0].category).toBe("jewelery");
  });
});

describe("filterByPrice", () => {
  it("filters products within range", () => {
    const result = filterByPrice(products, [120, 180]);
    expect(result.length).toBe(1);
    expect(result[0].price).toBe(150);
  });
});

describe("sortProducts", () => {
  it("sorts by price ascending", () => {
    const result = sortProducts(products, "price-asc", "all");
    expect(result[0].price).toBe(100);
  });

  it("applies discount sort only when category is all", () => {
    const result = sortProducts(products, "discount", "all");
    expect(result[0].category).toBe("men's clothing");
  });

  it("does not apply discount sort for specific category", () => {
    const result = sortProducts(products, "discount", "jewelery");
    expect(result).toEqual(products);
  });
});

import { useEffect, useMemo, useState } from "react";
import { fetchAllProducts, fetchCategories } from "../api/products.api";
import {
  filterByCategory,
  filterByPrice,
  sortProducts,
} from "../utils/productLogic";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortType, setSortType] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedCategory !== "all" && sortType === "discount") {
      setSortType("");
    }
  }, [selectedCategory, sortType]);

  useEffect(() => {
    const load = async () => {
      try {
        const [p, c] = await Promise.all([
          fetchAllProducts(),
          fetchCategories(),
        ]);
        setProducts(p);
        setCategories(c);
      } catch {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const safePriceRange = useMemo(() => {
    return priceRange[0] > priceRange[1]
      ? [priceRange[1], priceRange[0]]
      : priceRange;
  }, [priceRange]);

  const filteredProducts = useMemo(() => {
    let result = filterByCategory(products, selectedCategory);
    result = filterByPrice(result, safePriceRange);
    result = sortProducts(result, sortType, selectedCategory);
    return result;
  }, [products, selectedCategory, safePriceRange, sortType]);

  return {
    products: filteredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortType,
    setSortType,
    loading,
    error,
  };
}

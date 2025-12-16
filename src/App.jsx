import CategoryList from "./components/CategoryList/CategoryList";
import ProductList from "./components/ProductList/ProductList";
import PriceFilter from "./components/Filters/PriceFilter";
import Sort from "./components/Sort/Sort";
import useProducts from "./hooks/useProducts";

export default function App() {
  const {
    products,
    categories,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortType,
    setSortType,
    loading,
    error,
  } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="app">
      <aside className="sidebar">
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <PriceFilter priceRange={priceRange} onChange={setPriceRange} />
        <Sort
          value={sortType}
          onChange={setSortType}
          isDiscountDisabled={selectedCategory !== "all"}
        />
      </aside>

      <main className="content">
        <div className="count">Showing {products.length} products</div>
        <ProductList products={products} />
      </main>
    </div>
  );
}

import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

export default function ProductList({ products }) {
  if (!products.length) {
    return <div>No products found</div>;
  }

  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

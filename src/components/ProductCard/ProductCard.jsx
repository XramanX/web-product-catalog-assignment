import { getDiscountPercent } from "../../utils/discount";
import "./ProductCard.scss";

export default function ProductCard({ product }) {
  const discount = getDiscountPercent(product.category);
  const finalPrice = product.price - (product.price * discount) / 100;

  return (
    <div className="product-card">
      <div className="image-wrap">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="info">
        <div className="title">{product.title}</div>

        {discount > 0 ? (
          <div className="price">
            <span className="old">₹{product.price}</span>
            <span className="new">₹{finalPrice.toFixed(2)}</span>
            <span className="badge">{discount}% OFF</span>
          </div>
        ) : (
          <div className="price">
            <span className="new">₹{product.price}</span>
          </div>
        )}
      </div>
    </div>
  );
}

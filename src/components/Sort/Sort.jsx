import "./Sort.scss";

export default function Sort({ value, onChange, isDiscountDisabled }) {
  return (
    <div className="section">
      <div className="section-title">Sort By</div>

      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Default</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        {!isDiscountDisabled && (
          <option value="discount" disabled={isDiscountDisabled}>
            Best Discount
          </option>
        )}
      </select>
    </div>
  );
}

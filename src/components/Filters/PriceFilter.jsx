import "./PriceFilter.scss";

export default function PriceFilter({
  priceRange,
  onChange,
  min = 0,
  max = 1000,
}) {
  const [minPrice, maxPrice] = priceRange;

  const minPercent = ((minPrice - min) / (max - min)) * 100;
  const maxPercent = ((maxPrice - min) / (max - min)) * 100;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    onChange([value, maxPrice]);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    onChange([minPrice, value]);
  };

  return (
    <div className="section">
      <div className="section-title">Price Range</div>

      <div className="price-values">
        ₹{minPrice} – ₹{maxPrice}
      </div>

      <div className="range-container">
        <div className="slider-track" />
        <div
          className="slider-range"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={minPrice}
          onChange={handleMinChange}
          className="thumb thumb--left"
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxPrice}
          onChange={handleMaxChange}
          className="thumb thumb--right"
        />
      </div>
    </div>
  );
}

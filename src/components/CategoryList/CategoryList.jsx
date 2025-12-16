import "./CategoryList.scss";

export default function CategoryList({
  categories,
  selectedCategory,
  onSelect,
}) {
  return (
    <div className="section">
      <div className="section-title">Categories</div>

      <div className="categories">
        <button
          className={selectedCategory === "all" ? "active" : ""}
          onClick={() => onSelect("all")}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => onSelect(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

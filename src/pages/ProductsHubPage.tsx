import { Link } from "react-router-dom";
import { collections } from "../data/products";

export function ProductsHubPage() {
  return (
    <section className="page-hero products-hub">
      <h1>Products</h1>
      <p>Select a category to browse subcategories and configure your board.</p>
      <div className="home-catalog-grid products-catalog-grid">
        {collections.map((entry) => (
          <Link key={entry.path} className="home-catalog-card" to={entry.path}>
            <div className="home-catalog-image-wrap">
              <img src={entry.thumbnailSrc} alt={entry.title} className="home-catalog-image" />
            </div>
            <span>{entry.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}


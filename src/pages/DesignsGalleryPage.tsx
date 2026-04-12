import { Link } from "react-router-dom";
import { designCategories } from "../data/designs";

export function DesignsGalleryPage() {
  return (
    <section className="page-hero designs-index">
      <h1>Design Gallery</h1>
      <p>Pick a design category to explore all available engravings.</p>
      <div className="design-category-grid">
        {designCategories.map((category) => (
          <Link key={category.slug} to={`/designs-gallery/${category.slug}`} className="design-category-tile">
            <img src={category.thumbnailSrc} alt={category.name} className="design-category-image" />
            <div className="design-category-overlay">
              <h3>{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}


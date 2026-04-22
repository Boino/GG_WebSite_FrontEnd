import { Link, useParams } from "react-router-dom";
import { designCategoryBySlug } from "../data/designs";

export function DesignDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? designCategoryBySlug.get(slug) : null;

  if (!category) {
    return (
      <section className="page-hero compact">
        <h1>Design category not found</h1>
        <p>The requested design category does not exist in this clone.</p>
      </section>
    );
  }

  return (
    <section className="page-hero design-category-page">
      <p className="eyebrow">Design Category</p>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <div className="design-category-header-image-wrap">
        <img src={category.headerImageSrc} alt={`${category.name} category header`} className="design-category-header-image" />
      </div>
      <div className="design-mosaic-grid">
        {category.artworks.map((artwork) => (
          <figure key={artwork.id} className="design-mosaic-item">
            <img src={artwork.imageSrc} alt={artwork.name} />
            <figcaption>
              <strong>{artwork.name}</strong>
              <br />
              {artwork.description}
            </figcaption>
          </figure>
        ))}
      </div>
      <Link to="/designs-gallery" className="inline-link">
        Back to all categories
      </Link>
    </section>
  );
}


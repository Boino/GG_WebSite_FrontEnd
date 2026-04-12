import { Link } from "react-router-dom";
import type { Product } from "../types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link className="product-media" to={product.slugPath} aria-label={product.title}>
        <div className="product-card-image-wrap">
          <img className="product-card-image" src={product.thumbnailSrc} alt={product.categoryTag} />
        </div>
      </Link>
      <div className="product-meta">
        <h3>
          <Link to={product.slugPath}>{product.title}</Link>
        </h3>
        <p className="price">
          {product.fromPrice ? "from " : ""}EUR {product.price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}

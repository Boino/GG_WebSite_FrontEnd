import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ProductGrid } from "../components/ProductGrid";
import { collections, products } from "../data/products";

export function CollectionPage() {
  const { pathname } = useLocation();
  const collection = collections.find((entry) => entry.path === pathname) ?? collections[0];

  const collectionProducts = useMemo(
    () => products.filter((product) => product.collectionPath === collection.path),
    [collection.path]
  );

  return (
    <>
      <section className="page-hero compact">
        <p className="eyebrow">Category</p>
        <h1>{collection.heading}</h1>
        <p>Select a subcategory.</p>
      </section>

      <ProductGrid products={collectionProducts} />
    </>
  );
}


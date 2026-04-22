import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ProductGrid } from "../components/ProductGrid";
import { collections, products } from "../data/products";

const collectionCopy: Record<string, string> = {
  "/shop": "Shortboards are built for tighter turns, steeper faces, and higher speed. They suit experienced surfers and powerful surf.",
  "/shop-evolutive-boards": "Evolutive boards are stable and forgiving. They help surfers progress with more paddle support and easy control.",
  "/shop-longboards": "Longboards are designed for glide and trim. They are ideal for small waves and relaxed sessions.",
  "/shop-balance-boards": "Balance boards are dry-land training tools. They help improve posture, coordination, and core stability.",
  "/shop-decoration-boards": "Decoration boards bring surf craftsmanship into your space. Shapes, sizes, and graphics can be tailored to each customer."
};

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
        <p>{collectionCopy[collection.path] ?? "Browse this category and open a product to configure size and design."}</p>
      </section>

      <ProductGrid products={collectionProducts} />
    </>
  );
}


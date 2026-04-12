import { NavLink } from "react-router-dom";
import { collectionNav } from "../data/products";

export function CategoryShortcuts() {
  return (
    <section className="category-shortcuts">
      {collectionNav.map((item) => (
        <NavLink key={item.path} to={item.path} className="category-tile">
          {item.label}
        </NavLink>
      ))}
    </section>
  );
}


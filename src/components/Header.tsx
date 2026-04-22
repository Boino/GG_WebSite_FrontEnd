import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { designCategories } from "../data/designs";
import { collections } from "../data/products";
import { useCart } from "../state/CartContext";

const links = [
  { to: "/board-calculator", label: "Board Calculator" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];

export function Header() {
  const { count } = useCart();
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState<"products" | "catalog" | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<"products" | "catalog" | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!navRef.current?.contains(target)) {
        setOpenMenu(null);
        setHoveredMenu(null);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setHoveredMenu(null);
  }, [pathname]);

  const isProductsOpen = openMenu === "products" || hoveredMenu === "products";
  const isCatalogOpen = openMenu === "catalog" || hoveredMenu === "catalog";

  return (
    <header className="top-header">
      <div className="top-header__row">
        <NavLink to="/" className="brand-link">
          Gnarly Gents Crafts
        </NavLink>
        <a className="social-link" href="https://www.instagram.com/gnarly.gents" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <span className="lang-pill">English</span>
        <NavLink to="/cart" className="cart-link">
          Cart ({count})
        </NavLink>
      </div>
      <nav className="main-nav" ref={navRef}>
        <NavLink to="/" className="main-nav__item">
          Home
        </NavLink>
        <div className="nav-menu-item" onMouseEnter={() => setHoveredMenu("products")} onMouseLeave={() => setHoveredMenu(null)}>
          <NavLink
            to="/shop-1"
            className="main-nav__item nav-menu-link"
            onClick={() => {
              setOpenMenu(null);
              setHoveredMenu(null);
            }}
          >
            Products <span className="nav-menu-caret" aria-hidden="true">v</span>
          </NavLink>
          <div className={`nav-dropdown ${isProductsOpen ? "is-open" : ""}`} role="menu" aria-label="Product categories">
            {collections.map((collection) => (
              <NavLink
                key={collection.path}
                to={collection.path}
                className="nav-dropdown-item"
                role="menuitem"
                onClick={() => {
                  setOpenMenu(null);
                  setHoveredMenu(null);
                }}
              >
                {collection.title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="nav-menu-item" onMouseEnter={() => setHoveredMenu("catalog")} onMouseLeave={() => setHoveredMenu(null)}>
          <NavLink
            to="/designs-gallery"
            className="main-nav__item nav-menu-link"
            onClick={() => {
              setOpenMenu(null);
              setHoveredMenu(null);
            }}
          >
            Designs <span className="nav-menu-caret" aria-hidden="true">v</span>
          </NavLink>
          <div className={`nav-dropdown ${isCatalogOpen ? "is-open" : ""}`} role="menu" aria-label="Design categories">
            {designCategories.map((category) => (
              <NavLink
                key={category.slug}
                to={`/designs-gallery/${category.slug}`}
                className="nav-dropdown-item"
                role="menuitem"
                onClick={() => {
                  setOpenMenu(null);
                  setHoveredMenu(null);
                }}
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </div>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className="main-nav__item">
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

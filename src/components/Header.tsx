import { NavLink } from "react-router-dom";
import { collections } from "../data/products";
import { useCart } from "../state/CartContext";

const links = [
  { to: "/board-calculator", label: "Board Calculator" },
  { to: "/about", label: "About" },
  { to: "/designs-gallery", label: "Designs" },
  { to: "/contact", label: "Contact" }
];

export function Header() {
  const { count } = useCart();

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
      <nav className="main-nav">
        <NavLink to="/" className="main-nav__item">
          Home
        </NavLink>
        <div className="products-nav-item">
          <NavLink to="/shop-1" className="main-nav__item products-nav-link">
            Products <span className="products-nav-caret" aria-hidden="true">▼</span>
          </NavLink>
          <div className="products-dropdown" role="menu" aria-label="Product categories">
            {collections.map((collection) => (
              <NavLink key={collection.path} to={collection.path} className="products-dropdown-item" role="menuitem">
                {collection.title}
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


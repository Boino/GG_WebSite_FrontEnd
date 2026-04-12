import { Link } from "react-router-dom";
import { productById } from "../data/products";
import { useCart } from "../state/CartContext";

export function CartPage() {
  const { items, count, subtotal, removeItem, setQuantity, clearCart } = useCart();

  if (!items.length) {
    return (
      <section className="page-hero compact">
        <h1>Cart (0)</h1>
        <p>Your cart is empty.</p>
        <Link className="btn" to="/shop">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="page-hero compact">
      <h1>Cart ({count})</h1>
      <div className="cart-list">
        {items.map((item) => {
          const product = productById.get(item.productId);
          if (!product) return null;
          return (
            <article key={item.key} className="cart-item">
              <div className="cart-item-main">
                <div className="cart-item-thumb-wrap">
                  <img src={product.thumbnailSrc} alt={product.title} className="cart-item-thumb" />
                </div>
                <div>
                  <h3>{product.title}</h3>
                  <p>EUR {product.price.toFixed(2)}</p>
                  <p className="meta-small">
                    {Object.entries(item.selectedOptions)
                      .map(([name, value]) => `${name}: ${value}`)
                      .join(" | ") || "Default configuration"}
                  </p>
                </div>
              </div>
              <div className="cart-controls">
                <input type="number" min={1} value={item.quantity} onChange={(event) => setQuantity(item.key, Number(event.target.value) || 1)} />
                <button type="button" className="text-btn" onClick={() => removeItem(item.key)}>
                  Remove
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <p className="calc-result">Subtotal: EUR {subtotal.toFixed(2)}</p>
      <div className="cart-actions">
        <button type="button" className="text-btn" onClick={clearCart}>
          Clear Cart
        </button>
        <button type="button" className="btn" disabled>
          Checkout (Mock)
        </button>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { homeCatalogCards, homeHeroSlides } from "../data/homeContent";

export function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % homeHeroSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="home-landing">
        {homeHeroSlides.map((slide, index) => (
          <img
            key={slide}
            src={slide}
            alt=""
            aria-hidden="true"
            className={`home-landing-image ${index === activeSlide ? "is-active" : ""}`}
          />
        ))}
        <div className="home-landing-overlay">
          <h1>Welcome to our expertly handcrafted surfboard collection</h1>
          <p>
            Wooden boards, custom engravings, and surf-inspired craftsmanship.
          </p>
        </div>
      </section>

      <div className="home-content-shell">
        <section className="home-catalog-overview">
          <h2>Product Catalog</h2>
          <div className="home-catalog-grid">
            {homeCatalogCards.map((card) => (
              <Link key={card.label} to={card.path} className="home-catalog-card">
                <div className="home-catalog-image-wrap">
                  <img src={card.imageSrc} alt={card.label} className="home-catalog-image" />
                </div>
                <span>{card.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="info-callout">
          <h2>Reach Out to Us</h2>
          <p>
            Want your own logo or pattern engraved into your next board? Share your concept and we will craft a custom piece around it.
          </p>
        </section>
      </div>
    </>
  );
}


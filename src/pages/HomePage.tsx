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
          <h1>Family-built wooden surfboards from northern Spain</h1>
          <p>We craft hollow wooden surfboards, balance boards, and decorative surf pieces for riders and surf spaces.</p>
        </div>
      </section>

      <div className="home-content-shell">
        <section className="home-catalog-overview">
          <h2>Product Catalog</h2>
          <p>Each model can be adapted to your needs, including custom shape, dimensions, and engraved design.</p>
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
          <h2>Tell us what you need</h2>
          <p>Share your requirements and we will help you define the right shape, size, and design for your project.</p>
          <Link className="btn" to="/contact">
            Contact Us
          </Link>
        </section>
      </div>
    </>
  );
}


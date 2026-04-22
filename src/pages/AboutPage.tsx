import { useEffect, useState } from "react";
import { aboutSlides } from "../data/aboutContent";

export function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % aboutSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="about-landing">
        {aboutSlides.map((slide, index) => (
          <img key={slide} src={slide} alt="" aria-hidden="true" className={`about-landing-image ${index === activeSlide ? "is-active" : ""}`} />
        ))}
        <div className="about-landing-overlay">
          <h1>About us</h1>
          <p>We are a family business based in the north of Spain, focused on handcrafted hollow wooden surfboards and related surf products.</p>
        </div>
      </section>

      <section className="page-hero compact">
        <h2>How we work</h2>
        <p>Every board is made to order. We can adapt shape, dimensions, and graphics to fit each customer and intended use.</p>
      </section>
    </>
  );
}


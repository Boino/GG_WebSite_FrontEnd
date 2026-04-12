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
          <h1>Discover Our Story</h1>
          <p>
            We build wooden surf pieces by combining practical shaping knowledge with design-led engraving. The process mixes hand-finishing,
            durable materials, and visual storytelling.
          </p>
        </div>
      </section>

      <section className="page-hero compact">
        <h2>Discover Your Unique Design</h2>
        <p>Browse design families and apply them to your preferred board model.</p>
      </section>
    </>
  );
}


import { useMemo, useState } from "react";
import type { FormEventHandler } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { productBySlugPath } from "../data/products";
import {
  getPlaceholderRecommendations,
  type CalculatorFormData,
  type RecommendationDescriptor,
  type RiderLevel,
  type UnitSystem,
  validateAndNormalizeCalculatorForm
} from "../features/boardCalculator";

type RecommendationCardData = RecommendationDescriptor & {
  title: string;
};

const defaultForm: CalculatorFormData = {
  unitSystem: "metric",
  metricMeters: "",
  metricCentimeters: "175",
  imperialFeet: "5",
  imperialInches: "9",
  weightKilograms: "75",
  weightPounds: "165",
  level: "intermediate"
};

const levelOptions: RiderLevel[] = ["beginner", "intermediate", "advanced", "professional"];
const waveLabels: Record<RecommendationDescriptor["waveSize"], string> = {
  small: "Small waves",
  medium: "Medium waves",
  large: "Large waves"
};

export function BoardCalculatorPage() {
  const [form, setForm] = useState<CalculatorFormData>(defaultForm);
  const [errors, setErrors] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<RecommendationDescriptor[]>([]);

  const recommendationCards = useMemo<RecommendationCardData[]>(() => {
    return recommendations
      .map((recommendation) => {
        const product = productBySlugPath.get(recommendation.productSlugPath);
        if (!product) return null;
        return { ...recommendation, title: product.title };
      })
      .filter((entry): entry is RecommendationCardData => entry !== null);
  }, [recommendations]);

  const updateFormValue = <K extends keyof CalculatorFormData>(key: K, value: CalculatorFormData[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleUnitSystemChange = (unitSystem: UnitSystem) => {
    setForm((current) => ({ ...current, unitSystem }));
    setErrors([]);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const validation = validateAndNormalizeCalculatorForm(form);
    if (validation.errors.length > 0 || !validation.normalized) {
      setErrors(validation.errors);
      setRecommendations([]);
      return;
    }

    setErrors([]);
    setRecommendations(getPlaceholderRecommendations(validation.normalized));
  };

  return (
    <>
      <section className="page-hero compact board-calculator-header">
        <p className="eyebrow">Board Selector</p>
        <h1>Board Calculator</h1>
        <p>Enter your height, weight, and level to get a practical starting point for small, medium, and larger waves.</p>
      </section>

      <section className="board-calculator-layout">
        <form className="board-calculator-form product-panel" onSubmit={handleSubmit} noValidate>
          <div className="unit-toggle" role="radiogroup" aria-label="Unit system">
            <button
              type="button"
              className={`unit-toggle-btn ${form.unitSystem === "metric" ? "active" : ""}`}
              onClick={() => handleUnitSystemChange("metric")}
              aria-pressed={form.unitSystem === "metric"}
            >
              Metric
            </button>
            <button
              type="button"
              className={`unit-toggle-btn ${form.unitSystem === "imperial" ? "active" : ""}`}
              onClick={() => handleUnitSystemChange("imperial")}
              aria-pressed={form.unitSystem === "imperial"}
            >
              Imperial
            </button>
          </div>

          {form.unitSystem === "metric" ? (
            <div className="calculator-input-grid">
              <label className="field">
                <span>Height - centimeters</span>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={form.metricCentimeters}
                  onChange={(event) => updateFormValue("metricCentimeters", event.target.value)}
                />
              </label>
              <label className="field">
                <span>Weight - kilograms</span>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={form.weightKilograms}
                  onChange={(event) => updateFormValue("weightKilograms", event.target.value)}
                />
              </label>
            </div>
          ) : (
            <div className="calculator-input-grid">
              <label className="field">
                <span>Height - feet</span>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={form.imperialFeet}
                  onChange={(event) => updateFormValue("imperialFeet", event.target.value)}
                />
              </label>
              <label className="field">
                <span>Height - inches</span>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={form.imperialInches}
                  onChange={(event) => updateFormValue("imperialInches", event.target.value)}
                />
              </label>
              <label className="field">
                <span>Weight - pounds</span>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={form.weightPounds}
                  onChange={(event) => updateFormValue("weightPounds", event.target.value)}
                />
              </label>
            </div>
          )}

          <label className="field">
            <span>Level</span>
            <select value={form.level} onChange={(event) => updateFormValue("level", event.target.value as RiderLevel)}>
              {levelOptions.map((level) => (
                <option key={level} value={level}>
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </option>
              ))}
            </select>
          </label>

          <button className="btn" type="submit">
            Get recommendations
          </button>

          {errors.length > 0 && (
            <div className="status error" role="alert">
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
        </form>

        <div className="board-calculator-results">
          {recommendationCards.length === 0 ? (
            <div className="product-panel calculator-empty-state">
              <h2>Recommendation preview</h2>
              <p>Submit your data to view three board suggestions with target volume ranges.</p>
            </div>
          ) : (
            <div className="calculator-wave-grid">
              {recommendationCards.map((recommendation) => {
                const product = productBySlugPath.get(recommendation.productSlugPath);
                if (!product) return null;

                return (
                  <article key={recommendation.waveSize} className="calculator-wave-card">
                    <header className="calculator-wave-header">
                      <p className="eyebrow">{waveLabels[recommendation.waveSize]}</p>
                      <h2>{product.title}</h2>
                      <p>Target volume: {recommendation.suggestedVolumeRange}</p>
                      <p className="meta-small">{recommendation.summary}</p>
                    </header>
                    <ProductCard product={product} />
                    <Link className="inline-link" to={product.slugPath}>
                      Open product details
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}


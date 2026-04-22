import { useMemo, useState } from "react";
import { designOverlayCategories, formatSelectedDesignLabel } from "../data/designOverlays";
import type { ProductDesignOverlay } from "../types";

type DesignSelectorPanelProps = {
  designs: ProductDesignOverlay[];
  selectedDesign: ProductDesignOverlay | null;
  onSelect: (design: ProductDesignOverlay) => void;
  onClear: () => void;
};

export function DesignSelectorPanel({ designs, selectedDesign, onSelect, onClear }: DesignSelectorPanelProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(selectedDesign?.categoryId ?? designs[0]?.categoryId ?? "");

  const filteredDesigns = useMemo(() => {
    if (!activeCategoryId) return designs;
    return designs.filter((design) => design.categoryId === activeCategoryId);
  }, [activeCategoryId, designs]);

  if (designs.length === 0) return null;

  return (
    <section className="design-selector-inline" aria-label="Design selection">
      <div className="design-selector-header">
        <h3>Design</h3>
        <button type="button" className="design-clear-btn" aria-label="Remove selected design" onClick={onClear}>
          X
        </button>
      </div>

      <div className="design-category-controls">
        {designOverlayCategories.map((category) => {
          const hasItems = designs.some((design) => design.categoryId === category.id);
          if (!hasItems) return null;
          return (
            <button
              key={category.id}
              type="button"
              className={`design-category-btn ${activeCategoryId === category.id ? "active" : ""}`}
              onClick={() => setActiveCategoryId(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="design-gallery-grid inline">
        {filteredDesigns.map((design) => (
          <button
            key={design.id}
            type="button"
            className={`design-gallery-item ${design.id === selectedDesign?.id ? "active" : ""}`}
            onClick={() => onSelect(design)}
          >
            <img className="design-gallery-thumb" src={design.thumbnailSrc} alt={`${design.galleryName} ${design.artworkName}`} />
            <span>{design.artworkName}</span>
          </button>
        ))}
      </div>

      <p className="selected-design-label">
        {selectedDesign ? formatSelectedDesignLabel(selectedDesign) : "No design selected"}
      </p>
    </section>
  );
}

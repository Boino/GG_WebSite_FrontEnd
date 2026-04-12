import { useEffect, useMemo, useState } from "react";
import { designOverlayCategories } from "../data/designOverlays";
import type { DesignPlacement, Product, ProductDesignOverlay } from "../types";
import { BoardPreview } from "./BoardPreview";

type DesignSelectionModalProps = {
  product: Product;
  boardImageSrc: string;
  designs: ProductDesignOverlay[];
  initialDesign: ProductDesignOverlay | null;
  initialPlacement: DesignPlacement;
  onClose: () => void;
  onSave: (design: ProductDesignOverlay, placement: DesignPlacement) => void;
};

const DEFAULT_PLACEMENT: DesignPlacement = { xPercent: 50, yPercent: 50, scale: 1 };

export function DesignSelectionModal({
  product,
  boardImageSrc,
  designs,
  initialDesign,
  initialPlacement,
  onClose,
  onSave
}: DesignSelectionModalProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(initialDesign?.categoryId ?? designs[0]?.categoryId ?? "");
  const [draftDesignId, setDraftDesignId] = useState(initialDesign?.id ?? designs[0]?.id ?? "");
  const [placementByDesignId, setPlacementByDesignId] = useState<Record<string, DesignPlacement>>(
    initialDesign ? { [initialDesign.id]: initialPlacement } : {}
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const filteredDesigns = useMemo(() => designs.filter((design) => design.categoryId === activeCategoryId), [activeCategoryId, designs]);

  const draftDesign = designs.find((design) => design.id === draftDesignId) ?? filteredDesigns[0] ?? initialDesign ?? null;
  const draftPlacement = draftDesign ? placementByDesignId[draftDesign.id] ?? DEFAULT_PLACEMENT : DEFAULT_PLACEMENT;

  const saveDisabled = !draftDesign;

  return (
    <div className="design-modal-backdrop" role="dialog" aria-modal="true" aria-label="Select design">
      <div className="design-modal" onClick={(event) => event.stopPropagation()}>
        <div className="design-modal-preview">
          <BoardPreview
            categoryTag={product.categoryTag}
            selectedDesign={draftDesign}
            boardImageSrc={boardImageSrc}
            placement={draftPlacement}
            onPlacementChange={(nextPlacement) => {
              if (!draftDesign) return;
              setPlacementByDesignId((current) => ({ ...current, [draftDesign.id]: nextPlacement }));
            }}
            editable
            large
          />
        </div>
        <div className="design-modal-panel">
          <div className="design-category-controls">
            {designOverlayCategories.map((category) => {
              const hasItems = designs.some((design) => design.categoryId === category.id);
              if (!hasItems) return null;
              return (
                <button
                  key={category.id}
                  type="button"
                  className={`design-category-btn ${activeCategoryId === category.id ? "active" : ""}`}
                  onClick={() => {
                    setActiveCategoryId(category.id);
                    const first = designs.find((design) => design.categoryId === category.id);
                    if (first) setDraftDesignId(first.id);
                  }}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="design-gallery-grid">
            {filteredDesigns.map((design) => (
              <button
                key={design.id}
                type="button"
                className={`design-gallery-item ${design.id === draftDesign?.id ? "active" : ""}`}
                onClick={() => setDraftDesignId(design.id)}
              >
                <img className="design-gallery-thumb" src={design.thumbnailSrc} alt={`${design.galleryName} ${design.artworkName}`} />
                <span>{design.artworkName}</span>
              </button>
            ))}
          </div>

          <div className="design-modal-actions">
            <button type="button" className="text-btn" onClick={onClose}>
              Cancel
            </button>
            <button
              type="button"
              className="btn"
              disabled={saveDisabled}
              onClick={() => {
                if (draftDesign) onSave(draftDesign, draftPlacement);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <button className="design-modal-dismiss" type="button" aria-label="Close design selection" onClick={onClose} />
    </div>
  );
}

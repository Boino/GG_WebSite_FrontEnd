import { useEffect, useMemo, useRef, useState } from "react";
import type { TouchEventHandler } from "react";
import { Link, useLocation } from "react-router-dom";
import { BoardPreview } from "../components/BoardPreview";
import { DesignSelectorPanel } from "../components/DesignSelectorPanel";
import { formatSelectedDesignLabel, getCompatibleDesignsForProduct } from "../data/designOverlays";
import { productBySlugPath, products } from "../data/products";
import { useCart } from "../state/CartContext";
import type { DesignPlacement, ProductDesignOverlay } from "../types";

type ProductStatus = { type: "idle" | "error" | "success"; message: string };
const blankStatus: ProductStatus = { type: "idle", message: "" };
const defaultPlacement: DesignPlacement = { xPercent: 50, yPercent: 50, scale: 1 };

export function ProductPage() {
  const { pathname } = useLocation();
  const product = productBySlugPath.get(pathname);
  const { addItem } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [appliedDesign, setAppliedDesign] = useState<ProductDesignOverlay | null>(null);
  const [appliedDesignPlacement, setAppliedDesignPlacement] = useState<DesignPlacement>(defaultPlacement);
  const [status, setStatus] = useState<ProductStatus>(blankStatus);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    if (!product) {
      setSelectedOptions({});
      return;
    }

    setSelectedOptions(
      product.options.reduce<Record<string, string>>((acc, option) => {
        acc[option.name] = "";
        return acc;
      }, {})
    );
    setQuantity(1);
    setAppliedDesign(null);
    setAppliedDesignPlacement(defaultPlacement);
    setStatus(blankStatus);
    setActiveImageIndex(0);
  }, [product]);

  const related = useMemo(
    () => (product ? products.filter((entry) => entry.collectionPath === product.collectionPath && entry.id !== product.id) : []),
    [product]
  );
  const compatibleDesigns = useMemo(() => (product ? getCompatibleDesignsForProduct(product) : []), [product]);

  if (!product) {
    return (
      <section className="page-hero compact">
        <h1>Product not found</h1>
        <p>This product slug is not available in the local dataset.</p>
      </section>
    );
  }

  const galleryImages = product.galleryImages.length > 0 ? product.galleryImages : [product.thumbnailSrc];
  const currentImage = galleryImages[activeImageIndex] ?? galleryImages[0];
  const designBaseImage = product.designBaseImage;
  const showBackBoardPreview = currentImage === designBaseImage;
  const showInPlaceDesignPreview = Boolean(appliedDesign && showBackBoardPreview);
  const activeDesign = showInPlaceDesignPreview ? appliedDesign : null;

  const goToPreviousImage = () => {
    setActiveImageIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNextImage = () => {
    setActiveImageIndex((current) => (current + 1) % galleryImages.length);
  };

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
    touchStartXRef.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (event) => {
    const start = touchStartXRef.current;
    const end = event.changedTouches[0]?.clientX ?? null;
    if (start === null || end === null) return;
    const delta = end - start;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) goToPreviousImage();
    else goToNextImage();
  };

  const handleAdd = () => {
    const missing = product.options.find((option) => !selectedOptions[option.name]);
    if (missing) {
      setStatus({ type: "error", message: `Please select ${missing.name}.` });
      return;
    }

    const optionsForCart = appliedDesign ? { ...selectedOptions, Design: formatSelectedDesignLabel(appliedDesign) } : selectedOptions;
    addItem(product, optionsForCart, quantity);
    setStatus({ type: "success", message: "Added!" });
  };

  return (
    <>
      <section className="product-page">
        <div className="product-view">
          <div className="product-media-large">
            <div className="product-carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <BoardPreview
                categoryTag={product.categoryTag}
                selectedDesign={activeDesign}
                boardImageSrc={currentImage}
                placement={appliedDesignPlacement}
                variant="flat"
              />
              {galleryImages.length > 1 && (
                <>
                  <button type="button" className="carousel-nav prev" onClick={goToPreviousImage} aria-label="Previous image">
                    {"<"}
                  </button>
                  <button type="button" className="carousel-nav next" onClick={goToNextImage} aria-label="Next image">
                    {">"}
                  </button>
                </>
              )}
            </div>
            {galleryImages.length > 1 && (
              <div className="carousel-dots">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    className={`carousel-dot ${index === activeImageIndex ? "active" : ""}`}
                    aria-label={`Image ${index + 1}`}
                    onClick={() => setActiveImageIndex(index)}
                  />
                ))}
              </div>
            )}
            {appliedDesign && !showInPlaceDesignPreview && <p className="design-preview-title">Select the back image to view the saved design preview.</p>}
          </div>
          <div className="product-panel">
            <h1>{product.title}</h1>
            <p className="price">
              {product.fromPrice ? "from " : ""}EUR {product.price.toFixed(2)}
            </p>
            <p>{product.summary}</p>
            <p className="meta-small"><strong>Best for:</strong> {product.bestFor}</p>
            <p className="meta-small"><strong>Skill level:</strong> {product.skillLevel}</p>
            <p className="meta-small"><strong>Wave range:</strong> {product.waveRange}</p>

            {compatibleDesigns.length > 0 && (
              <DesignSelectorPanel
                designs={compatibleDesigns}
                selectedDesign={appliedDesign}
                onSelect={(design) => {
                  setAppliedDesign(design);
                  const backIndex = galleryImages.findIndex((image) => image === designBaseImage);
                  if (backIndex >= 0) setActiveImageIndex(backIndex);
                }}
                onClear={() => setAppliedDesign(null)}
              />
            )}

            {product.options.map((option) => (
              <label className="field" key={option.name}>
                <span>{option.name}</span>
                <select
                  value={selectedOptions[option.name] ?? ""}
                  onChange={(event) =>
                    setSelectedOptions((current) => ({
                      ...current,
                      [option.name]: event.target.value
                    }))
                  }
                >
                  <option value="">Select</option>
                  {option.values.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>
            ))}

            <label className="field">
              <span>Quantity</span>
              <input type="number" min={1} value={quantity} onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))} />
            </label>

            <button className="btn" type="button" onClick={handleAdd}>
              Add To Cart
            </button>
            {status.type !== "idle" && <p className={`status ${status.type}`}>{status.message}</p>}
            <Link className="btn btn-secondary product-back-btn" to={product.collectionPath}>
              Back to {product.collectionTitle}
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="related-list">
          <h2>Other {product.collectionTitle}</h2>
          <div className="related-thumb-grid">
            {related.map((item) => (
              <Link key={item.id} to={item.slugPath} className="related-thumb-card">
                <div className="related-thumb-image-wrap">
                  <img src={item.thumbnailSrc} alt={item.subcategory} className="related-thumb-image" />
                </div>
                <span>{item.subcategory}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}


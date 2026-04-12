import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { PointerEventHandler } from "react";
import type { DesignPlacement, ProductDesignOverlay } from "../types";

type BoardPreviewProps = {
  categoryTag: string;
  selectedDesign?: ProductDesignOverlay | null;
  boardImageSrc: string;
  placement?: DesignPlacement;
  onPlacementChange?: (placement: DesignPlacement) => void;
  editable?: boolean;
  variant?: "staged" | "flat";
  large?: boolean;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const DEFAULT_PLACEMENT: DesignPlacement = {
  xPercent: 50,
  yPercent: 50,
  scale: 1
};

type InteractionState =
  | { mode: "idle" }
  | {
      mode: "drag";
      startClientX: number;
      startClientY: number;
      startXPercent: number;
      startYPercent: number;
    }
  | {
      mode: "resize";
      startClientX: number;
      startScale: number;
    };

export function BoardPreview({
  categoryTag,
  selectedDesign,
  boardImageSrc,
  placement,
  onPlacementChange,
  editable = false,
  variant = "staged",
  large = false
}: BoardPreviewProps) {
  const effectivePlacement = placement ?? DEFAULT_PLACEMENT;
  const silhouetteRef = useRef<HTMLDivElement | null>(null);
  const interactionRef = useRef<InteractionState>({ mode: "idle" });
  const [imageAspectRatio, setImageAspectRatio] = useState<number>(0.42);
  const [displayImageSrc, setDisplayImageSrc] = useState(boardImageSrc);

  const silhouetteStyle: CSSProperties = {
    aspectRatio: imageAspectRatio,
    height: "100%",
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%"
  };

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = boardImageSrc;
    img.onload = () => {
      if (cancelled) return;
      const { naturalWidth, naturalHeight } = img;
      if (naturalWidth > 0 && naturalHeight > 0) {
        setImageAspectRatio(naturalWidth / naturalHeight);
      }

      try {
        const canvas = document.createElement("canvas");
        canvas.width = naturalWidth;
        canvas.height = naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          setDisplayImageSrc(boardImageSrc);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const { data } = ctx.getImageData(0, 0, naturalWidth, naturalHeight);
        let minX = naturalWidth;
        let minY = naturalHeight;
        let maxX = -1;
        let maxY = -1;
        let hasAlphaContent = false;

        for (let y = 0; y < naturalHeight; y += 1) {
          for (let x = 0; x < naturalWidth; x += 1) {
            const alpha = data[(y * naturalWidth + x) * 4 + 3];
            if (alpha === 0) continue;
            hasAlphaContent = true;
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
          }
        }

        if (!hasAlphaContent || maxX < minX || maxY < minY) {
          setDisplayImageSrc(boardImageSrc);
          return;
        }

        const trimmedWidth = maxX - minX + 1;
        const trimmedHeight = maxY - minY + 1;
        const fullArea = naturalWidth * naturalHeight;
        const trimmedArea = trimmedWidth * trimmedHeight;
        const trimmingGain = 1 - trimmedArea / fullArea;

        if (trimmingGain < 0.06) {
          setDisplayImageSrc(boardImageSrc);
          return;
        }

        const trimmedCanvas = document.createElement("canvas");
        trimmedCanvas.width = trimmedWidth;
        trimmedCanvas.height = trimmedHeight;
        const trimmedCtx = trimmedCanvas.getContext("2d");
        if (!trimmedCtx) {
          setDisplayImageSrc(boardImageSrc);
          return;
        }

        trimmedCtx.drawImage(canvas, minX, minY, trimmedWidth, trimmedHeight, 0, 0, trimmedWidth, trimmedHeight);
        setImageAspectRatio(trimmedWidth / trimmedHeight);
        setDisplayImageSrc(trimmedCanvas.toDataURL("image/png"));
      } catch {
        setDisplayImageSrc(boardImageSrc);
      }
    };
    img.onerror = () => {
      if (!cancelled) setDisplayImageSrc(boardImageSrc);
    };
    return () => {
      cancelled = true;
    };
  }, [boardImageSrc]);

  useEffect(() => {
    if (!editable || !onPlacementChange) return;

    const onPointerMove = (event: PointerEvent) => {
      const rect = silhouetteRef.current?.getBoundingClientRect();
      if (!rect) return;

      const interaction = interactionRef.current;
      if (interaction.mode === "drag") {
        const deltaX = event.clientX - interaction.startClientX;
        const deltaY = event.clientY - interaction.startClientY;
        const xDeltaPercent = (deltaX / rect.width) * 100;
        const yDeltaPercent = (deltaY / rect.height) * 100;
        onPlacementChange({
          ...effectivePlacement,
          xPercent: clamp(interaction.startXPercent + xDeltaPercent, 8, 92),
          yPercent: clamp(interaction.startYPercent + yDeltaPercent, 8, 92)
        });
      }

      if (interaction.mode === "resize") {
        const deltaX = event.clientX - interaction.startClientX;
        const nextScale = interaction.startScale + deltaX / Math.max(rect.width, 1);
        onPlacementChange({
          ...effectivePlacement,
          scale: clamp(nextScale, 0.45, 2.3)
        });
      }
    };

    const onPointerUp = () => {
      interactionRef.current = { mode: "idle" };
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [editable, effectivePlacement, onPlacementChange]);

  const startDrag: PointerEventHandler<HTMLDivElement> = (event) => {
    if (!editable || !onPlacementChange) return;
    event.preventDefault();
    interactionRef.current = {
      mode: "drag",
      startClientX: event.clientX,
      startClientY: event.clientY,
      startXPercent: effectivePlacement.xPercent,
      startYPercent: effectivePlacement.yPercent
    };
  };

  const startResize: PointerEventHandler<HTMLButtonElement> = (event) => {
    if (!editable || !onPlacementChange) return;
    event.preventDefault();
    event.stopPropagation();
    interactionRef.current = {
      mode: "resize",
      startClientX: event.clientX,
      startScale: effectivePlacement.scale
    };
  };

  const silhouette = (
    <div className="board-silhouette board-silhouette-image" aria-label={categoryTag} ref={silhouetteRef} style={silhouetteStyle}>
      <img
        className="board-base-image"
        src={displayImageSrc}
        alt={categoryTag}
      />
      {selectedDesign ? (
        <div
          className={`board-design-overlay-image ${editable ? "is-editable" : ""}`}
          style={{
            left: `${effectivePlacement.xPercent}%`,
            top: `${effectivePlacement.yPercent}%`,
            width: `${26 * effectivePlacement.scale}%`
          }}
          onPointerDown={startDrag}
        >
          <img
            src={selectedDesign.overlaySrc}
            alt={`${selectedDesign.galleryName} ${selectedDesign.artworkName}`}
            title={`${selectedDesign.galleryName} / ${selectedDesign.artworkName}`}
          />
          {editable && <button type="button" className="board-design-resize-handle" aria-label="Resize design" onPointerDown={startResize} />}
        </div>
      ) : null}
    </div>
  );

  if (variant === "flat") {
    return <div className="board-preview-flat">{silhouette}</div>;
  }

  return (
    <div className={`board-stage ${large ? "large" : ""}`}>
      <div className="board-canvas">{silhouette}</div>
    </div>
  );
}

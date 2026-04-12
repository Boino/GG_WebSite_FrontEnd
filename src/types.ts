export type ProductOption = {
  name: string;
  values: string[];
};

export type Product = {
  id: string;
  title: string;
  subcategory: string;
  slugPath: string;
  collectionPath: string;
  collectionTitle: string;
  price: number;
  fromPrice?: boolean;
  options: ProductOption[];
  summary: string;
  categoryTag: string;
  thumbnailSrc: string;
  galleryImages: string[];
  designBaseImage: string;
};

export type CartItem = {
  key: string;
  productId: string;
  quantity: number;
  selectedOptions: Record<string, string>;
};

export type DesignItem = {
  slug: string;
  title: string;
  family: string;
  summary: string;
};

export type DesignArtwork = {
  id: string;
  name: string;
  imageSrc: string;
};

export type DesignCategory = {
  slug: string;
  name: string;
  thumbnailSrc: string;
  headerImageSrc: string;
  artworks: DesignArtwork[];
};

export type DesignOverlayCategory = {
  id: string;
  label: string;
};

export type ProductDesignOverlay = {
  id: string;
  galleryName: string;
  artworkName: string;
  categoryId: string;
  compatibleCollectionPaths: string[];
  thumbnailSrc: string;
  overlaySrc: string;
};

export type DesignPlacement = {
  xPercent: number;
  yPercent: number;
  scale: number;
};


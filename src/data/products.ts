import balanceThumbnail from "../../Images/Web_Page_Images/Products/Balance_Boards/Balance_Board_Tumbnail.png";
import decorationThumbnail from "../../Images/Web_Page_Images/Products/Decoration_Boards/Decoration_Board__Tumbnail.png";
import evolutiveThreeView from "../../Images/Web_Page_Images/Products/Evolutive_Boards/Evolutive_Board_3_View.png";
import evolutiveBack from "../../Images/Web_Page_Images/Products/Evolutive_Boards/Evolutive_Board_Back.png";
import evolutiveThumbnail from "../../Images/Web_Page_Images/Products/Evolutive_Boards/Evolutive_Board_Tumbnail.png";
import longThreeView from "../../Images/Web_Page_Images/Products/Long_Boards/Longboard_3_View.png";
import longBack from "../../Images/Web_Page_Images/Products/Long_Boards/Long_Board_Back.png";
import longThumbnail from "../../Images/Web_Page_Images/Products/Long_Boards/Long_Board_Tumbnail.png";
import shortThreeView from "../../Images/Web_Page_Images/Products/Short_Boards/Short_Board_3_View.png";
import shortFishTailThreeView from "../../Images/Web_Page_Images/Products/Short_Boards/Fish_Tail/Shortboard_Fishtail_3_View.png";
import shortBack from "../../Images/Web_Page_Images/Products/Short_Boards/Short_Board_Shallow_Tail_Back.png";
import shortThumbnail from "../../Images/Web_Page_Images/Products/Short_Boards/Short_Board_Tumbnail.png";
import type { Product } from "../types";

const makeId = (slugPath: string) => slugPath.replace(/[^a-z0-9]+/gi, "-").toLowerCase();

export const collections = [
  { path: "/shop", title: "Shortboards", heading: "Shortboards", thumbnailSrc: shortThreeView },
  { path: "/shop-evolutive-boards", title: "Evolutive Boards", heading: "Evolutive Boards", thumbnailSrc: evolutiveThreeView },
  { path: "/shop-longboards", title: "Longboards", heading: "Longboards", thumbnailSrc: longThreeView },
  { path: "/shop-balance-boards", title: "Balance Boards", heading: "Balance Boards", thumbnailSrc: balanceThumbnail },
  { path: "/shop-decoration-boards", title: "Decoration Boards", heading: "Decoration Boards", thumbnailSrc: decorationThumbnail }
] as const;

const p = (
  slugPath: string,
  title: string,
  subcategory: string,
  collectionPath: string,
  collectionTitle: string,
  price: number,
  options: Product["options"],
  categoryTag: string,
  summary: string,
  bestFor: string,
  skillLevel: string,
  waveRange: string,
  thumbnailSrc: string,
  galleryImages: string[],
  designBaseImage: string,
  fromPrice = false
): Product => ({
  id: makeId(slugPath),
  title,
  subcategory,
  slugPath,
  collectionPath,
  collectionTitle,
  price,
  options,
  categoryTag,
  summary,
  bestFor,
  skillLevel,
  waveRange,
  thumbnailSrc,
  galleryImages,
  designBaseImage,
  fromPrice
});

const shortGallery = [shortThreeView, shortThumbnail, shortBack];
const shortFishTailGallery = [shortFishTailThreeView, shortThumbnail, shortBack];
const evolutiveGallery = [evolutiveThreeView, evolutiveThumbnail, evolutiveBack];
const longGallery = [longThreeView, longThumbnail, longBack];
const balanceGallery = [balanceThumbnail];
const decorationGallery = [decorationThumbnail];

export const products: Product[] = [
  p(
    "/shop/p/twin-fish-tail",
    "Twin Fish Tail",
    "Twin Fish Tail",
    "/shop",
    "Shortboards",
    749,
    [{ name: "Size", values: ["5'4\" - 30L", "5'6\" - 32L", "5'8\" - 34L"] }],
    "Shortboards",
    "Fast shortboard with a fish-tail outline and quick rail-to-rail response.",
    "Advanced surfers looking for speed in punchy conditions.",
    "Advanced",
    "Medium to larger waves",
    shortFishTailThreeView,
    shortFishTailGallery,
    shortBack
  ),
  p(
    "/shop/p/swallow-tail",
    "Swallow Tail",
    "Swallow Tail",
    "/shop",
    "Shortboards",
    749,
    [{ name: "Size", values: ["5'8\" - 30L", "6'0\" - 32L", "6'2\" - 34L"] }],
    "Shortboards",
    "Responsive shortboard with a swallow-tail finish for sharp direction changes.",
    "Intermediate to advanced surfers riding steeper sections.",
    "Intermediate to Advanced",
    "Medium to larger waves",
    shortThreeView,
    shortGallery,
    shortBack
  ),
  p(
    "/shop/p/round-tail",
    "Round Tail",
    "Round Tail",
    "/shop",
    "Shortboards",
    749,
    [{ name: "Size", values: ["5'6\" - 30L", "5'8\" - 32L", "6'0\" - 34L"] }],
    "Shortboards",
    "Balanced round-tail shortboard built for control and reliable hold.",
    "Surfers who want one performance board for varied sessions.",
    "Intermediate to Advanced",
    "Medium to larger waves",
    shortThreeView,
    shortGallery,
    shortBack
  ),

  p(
    "/shop-evolutive-boards/p/hybrid",
    "Hybrid",
    "Hybrid",
    "/shop-evolutive-boards",
    "Evolutive Boards",
    779,
    [{ name: "Size", values: ["6'2\" - 40L", "6'4\" - 43L", "6'6\" - 46L"] }],
    "Evolutive Boards",
    "High-volume hybrid that paddles easily and keeps turns smooth.",
    "Progressing surfers moving from foam to hard boards.",
    "Beginner to Intermediate",
    "Small to medium waves",
    evolutiveThreeView,
    evolutiveGallery,
    evolutiveBack
  ),
  p(
    "/shop-evolutive-boards/p/swallow-tail",
    "Swallow Tail",
    "Swallow Tail",
    "/shop-evolutive-boards",
    "Evolutive Boards",
    779,
    [{ name: "Size", values: ["6'2\" - 40L", "6'4\" - 43L", "6'6\" - 46L"] }],
    "Evolutive Boards",
    "Evolutive shape with extra release for easier transitions through turns.",
    "Surfers refining technique while keeping paddle support.",
    "Beginner to Intermediate",
    "Small to medium waves",
    evolutiveThreeView,
    evolutiveGallery,
    evolutiveBack
  ),
  p(
    "/shop-evolutive-boards/p/funboard",
    "Funboard",
    "Funboard",
    "/shop-evolutive-boards",
    "Evolutive Boards",
    779,
    [{ name: "Size", values: ["6'4\" - 44L", "6'8\" - 48L", "7'0\" - 52L"] }],
    "Evolutive Boards",
    "Stable funboard with added volume for confidence and wave count.",
    "Riders who prioritize comfort, control, and easy take-offs.",
    "Beginner to Intermediate",
    "Small to medium waves",
    evolutiveThreeView,
    evolutiveGallery,
    evolutiveBack
  ),

  p(
    "/shop-longboards/p/longboard",
    "Longboard",
    "Longboard",
    "/shop-longboards",
    "Longboards",
    1079,
    [{ name: "Size", values: ["9'0\"", "9'2\"", "9'4\""] }],
    "Longboards",
    "Classic longboard with smooth glide and forgiving stability.",
    "Surfers who want to enjoy smaller waves and longer rides.",
    "All levels",
    "Small to medium waves",
    longThreeView,
    longGallery,
    longBack
  ),

  p(
    "/shop-balance-boards/p/balance-boards",
    "Balance Board Set",
    "Balance Board Set",
    "/shop-balance-boards",
    "Balance Boards",
    89,
    [],
    "Balance Boards",
    "Indoor wooden balance board set for day-to-day surf training.",
    "Training balance, posture, and deep stabilizing muscles.",
    "All levels",
    "Off-water training",
    balanceThumbnail,
    balanceGallery,
    balanceThumbnail
  ),

  p(
    "/shop-decoration-boards/p/small-decoration-boards",
    "Small Decoration Boards",
    "Small Decoration Boards",
    "/shop-decoration-boards",
    "Decoration Boards",
    36.49,
    [{ name: "Size", values: ["60cm x 15cm x 1cm", "120cm x 60cm x 1cm"] }],
    "Decoration Boards",
    "Compact decorative board with custom shape and engraving options.",
    "Homes, offices, and gifts with a surf identity.",
    "All levels",
    "Not wave-specific",
    decorationThumbnail,
    decorationGallery,
    decorationThumbnail,
    true
  ),
  p(
    "/shop-decoration-boards/p/full-sized-decoration-boards",
    "Full-sized Decoration Boards",
    "Full-sized Decoration Boards",
    "/shop-decoration-boards",
    "Decoration Boards",
    249,
    [],
    "Decoration Boards",
    "Full-size decorative board for wall display with custom design.",
    "Statement wall pieces with your own logo or artwork.",
    "All levels",
    "Not wave-specific",
    decorationThumbnail,
    decorationGallery,
    decorationThumbnail
  ),
  p(
    "/shop-decoration-boards/p/skeleton-decoration-boards",
    "Skeleton Decoration Boards",
    "Skeleton Decoration Boards",
    "/shop-decoration-boards",
    "Decoration Boards",
    189,
    [],
    "Decoration Boards",
    "Skeleton-style decorative board that highlights wooden structure details.",
    "Minimal interior spaces and workshop-style decoration.",
    "All levels",
    "Not wave-specific",
    decorationThumbnail,
    decorationGallery,
    decorationThumbnail
  )
];

export const productBySlugPath = new Map(products.map((product) => [product.slugPath, product]));
export const productById = new Map(products.map((product) => [product.id, product]));

export const collectionNav = collections.map((collection) => ({ label: collection.title, path: collection.path }));

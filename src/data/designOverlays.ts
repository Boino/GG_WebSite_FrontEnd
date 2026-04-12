import celticLabaro from "../../Images/Web_Page_Images/Designs/Celtic/Cantabrian_Labaro_No_BG_01.png";
import celticMandala from "../../Images/Web_Page_Images/Designs/Celtic/Celtic_Mandala_no_BG_02.png";
import celticTree from "../../Images/Web_Page_Images/Designs/Celtic/Celtic_Tree.cdr.png";
import celticColoring from "../../Images/Web_Page_Images/Designs/Celtic/coloring-celtic-art-65_No_BG.jpg";
import greekMandala from "../../Images/Web_Page_Images/Designs/Greco-Roman/Greek_Mandala_No_BG_01.png";
import indianMandalaCircle from "../../Images/Web_Page_Images/Designs/Mandala/Indian_Mandala_Circle_Pattern_01.jpg";
import indianMandala2 from "../../Images/Web_Page_Images/Designs/Mandala/Indian_Mandala_No_BG_02.png";
import indianMandala3 from "../../Images/Web_Page_Images/Designs/Mandala/Indian_Mandala_No_BG_03.png";
import mayanCalendar from "../../Images/Web_Page_Images/Designs/Mesoamerican/Mayan_Calendar_01.cdr.png";
import mayanMandala1 from "../../Images/Web_Page_Images/Designs/Mesoamerican/Mayan_Mandala_01.png";
import mayanMandala2 from "../../Images/Web_Page_Images/Designs/Mesoamerican/Mayan_Mandala_02.png";
import polynesianMandala2 from "../../Images/Web_Page_Images/Designs/Polynesian/Polynesian_Mandala_No_BG_02.png";
import polynesianMandala5 from "../../Images/Web_Page_Images/Designs/Polynesian/Polynesian_Mandala_No_BG_05.png";
import polynesianMandala8 from "../../Images/Web_Page_Images/Designs/Polynesian/Polynesian_Mandala_No_BG_08.png";
import type { DesignOverlayCategory, Product, ProductDesignOverlay } from "../types";

export const designOverlayCategories: DesignOverlayCategory[] = [
  { id: "celtic", label: "Celtic" },
  { id: "greco-roman", label: "Greco-Roman" },
  { id: "mandala", label: "Mandala" },
  { id: "mesoamerican", label: "Mesoamerican" },
  { id: "polynesian", label: "Polynesian" }
];

const boardCollectionPaths = [
  "/shop",
  "/shop-evolutive-boards",
  "/shop-longboards",
  "/shop-decoration-boards",
  "/shop-balance-boards"
];

export const productDesignOverlays: ProductDesignOverlay[] = [
  {
    id: "celtic-labaro",
    galleryName: "Celtic",
    artworkName: "Cantabrian Labaro",
    categoryId: "celtic",
    compatibleCollectionPaths: boardCollectionPaths,
    thumbnailSrc: celticLabaro,
    overlaySrc: celticLabaro
  },
  {
    id: "celtic-mandala",
    galleryName: "Celtic",
    artworkName: "Celtic Mandala",
    categoryId: "celtic",
    compatibleCollectionPaths: boardCollectionPaths,
    thumbnailSrc: celticMandala,
    overlaySrc: celticMandala
  },
  {
    id: "celtic-tree",
    galleryName: "Celtic",
    artworkName: "Celtic Tree",
    categoryId: "celtic",
    compatibleCollectionPaths: boardCollectionPaths,
    thumbnailSrc: celticTree,
    overlaySrc: celticTree
  },
  {
    id: "celtic-coloring",
    galleryName: "Celtic",
    artworkName: "Celtic Art 65",
    categoryId: "celtic",
    compatibleCollectionPaths: boardCollectionPaths,
    thumbnailSrc: celticColoring,
    overlaySrc: celticColoring
  },
  {
    id: "greek-mandala",
    galleryName: "Greco-Roman",
    artworkName: "Greek Mandala",
    categoryId: "greco-roman",
    compatibleCollectionPaths: boardCollectionPaths,
    thumbnailSrc: greekMandala,
    overlaySrc: greekMandala
  },
  {
    id: "indian-mandala-circle",
    galleryName: "Mandala",
    artworkName: "Indian Circle Pattern",
    categoryId: "mandala",
    compatibleCollectionPaths: boardCollectionPaths,
    thumbnailSrc: indianMandalaCircle,
    overlaySrc: indianMandalaCircle
  },
  {
    id: "indian-mandala-2",
    galleryName: "Mandala",
    artworkName: "Indian Mandala 02",
    categoryId: "mandala",
    compatibleCollectionPaths: boardCollectionPaths,
    thumbnailSrc: indianMandala2,
    overlaySrc: indianMandala2
  },
  {
    id: "indian-mandala-3",
    galleryName: "Mandala",
    artworkName: "Indian Mandala 03",
    categoryId: "mandala",
    compatibleCollectionPaths: boardCollectionPaths,
    thumbnailSrc: indianMandala3,
    overlaySrc: indianMandala3
  },
  {
    id: "mayan-calendar",
    galleryName: "Mesoamerican",
    artworkName: "Mayan Calendar",
    categoryId: "mesoamerican",
    compatibleCollectionPaths: boardCollectionPaths,
    thumbnailSrc: mayanCalendar,
    overlaySrc: mayanCalendar
  },
  {
    id: "mayan-mandala-1",
    galleryName: "Mesoamerican",
    artworkName: "Mayan Mandala 01",
    categoryId: "mesoamerican",
    compatibleCollectionPaths: boardCollectionPaths,
    thumbnailSrc: mayanMandala1,
    overlaySrc: mayanMandala1
  },
  {
    id: "mayan-mandala-2",
    galleryName: "Mesoamerican",
    artworkName: "Mayan Mandala 02",
    categoryId: "mesoamerican",
    compatibleCollectionPaths: boardCollectionPaths,
    thumbnailSrc: mayanMandala2,
    overlaySrc: mayanMandala2
  },
  {
    id: "polynesian-2",
    galleryName: "Polynesian",
    artworkName: "Polynesian Mandala 02",
    categoryId: "polynesian",
    compatibleCollectionPaths: boardCollectionPaths,
    thumbnailSrc: polynesianMandala2,
    overlaySrc: polynesianMandala2
  },
  {
    id: "polynesian-5",
    galleryName: "Polynesian",
    artworkName: "Polynesian Mandala 05",
    categoryId: "polynesian",
    compatibleCollectionPaths: boardCollectionPaths,
    thumbnailSrc: polynesianMandala5,
    overlaySrc: polynesianMandala5
  },
  {
    id: "polynesian-8",
    galleryName: "Polynesian",
    artworkName: "Polynesian Mandala 08",
    categoryId: "polynesian",
    compatibleCollectionPaths: boardCollectionPaths,
    thumbnailSrc: polynesianMandala8,
    overlaySrc: polynesianMandala8
  }
];

export const getCompatibleDesignsForProduct = (product: Product) =>
  productDesignOverlays.filter((design) => design.compatibleCollectionPaths.includes(product.collectionPath));

export const formatSelectedDesignLabel = (design: ProductDesignOverlay) => `${design.galleryName} / ${design.artworkName}`;

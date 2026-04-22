import celticLabaro from "../../Images/Web_Page_Images/Designs/Celtic/Cantabrian_Labaro_No_BG_01.png";
import celticMandala from "../../Images/Web_Page_Images/Designs/Celtic/Celtic_Mandala_no_BG_02.png";
import celticTree from "../../Images/Web_Page_Images/Designs/Celtic/Celtic_Tree.cdr.png";
import celticArt from "../../Images/Web_Page_Images/Designs/Celtic/coloring-celtic-art-65_No_BG.jpg";
import greekMandala from "../../Images/Web_Page_Images/Designs/Greco-Roman/Greek_Mandala_No_BG_01.png";
import indianCircle from "../../Images/Web_Page_Images/Designs/Mandala/Indian_Mandala_Circle_Pattern_01.jpg";
import indianMandala2 from "../../Images/Web_Page_Images/Designs/Mandala/Indian_Mandala_No_BG_02.png";
import indianMandala3 from "../../Images/Web_Page_Images/Designs/Mandala/Indian_Mandala_No_BG_03.png";
import mayanCalendar from "../../Images/Web_Page_Images/Designs/Mesoamerican/Mayan_Calendar_01.cdr.png";
import mayanMandala1 from "../../Images/Web_Page_Images/Designs/Mesoamerican/Mayan_Mandala_01.png";
import mayanMandala2 from "../../Images/Web_Page_Images/Designs/Mesoamerican/Mayan_Mandala_02.png";
import polynesian2 from "../../Images/Web_Page_Images/Designs/Polynesian/Polynesian_Mandala_No_BG_02.png";
import polynesian5 from "../../Images/Web_Page_Images/Designs/Polynesian/Polynesian_Mandala_No_BG_05.png";
import polynesian8 from "../../Images/Web_Page_Images/Designs/Polynesian/Polynesian_Mandala_No_BG_08.png";
import type { DesignCategory } from "../types";

export const designCategories: DesignCategory[] = [
  {
    slug: "celtic",
    name: "Celtic",
    description: "Interlaced line work and symbolic motifs suited to classic wood finishes.",
    thumbnailSrc: celticMandala,
    headerImageSrc: celticLabaro,
    artworks: [
      { id: "cantabrian-labaro", name: "Cantabrian Labaro", imageSrc: celticLabaro, description: "Strong central emblem with clean circular framing." },
      { id: "celtic-mandala", name: "Celtic Mandala", imageSrc: celticMandala, description: "Radial knot pattern for centered board placement." },
      { id: "celtic-tree", name: "Celtic Tree", imageSrc: celticTree, description: "Organic tree mark with traditional celtic structure." },
      { id: "celtic-art-65", name: "Celtic Art 65", imageSrc: celticArt, description: "Dense ornamental drawing for more visual texture." }
    ]
  },
  {
    slug: "greco-roman",
    name: "Greco-Roman",
    description: "Classical geometry and medallion-style layouts inspired by Mediterranean heritage.",
    thumbnailSrc: greekMandala,
    headerImageSrc: greekMandala,
    artworks: [{ id: "greek-mandala", name: "Greek Mandala", imageSrc: greekMandala, description: "Symmetrical line design with a clean classical feel." }]
  },
  {
    slug: "mandala",
    name: "Mandala",
    description: "Circular compositions with balanced detail and clear focal points.",
    thumbnailSrc: indianMandala2,
    headerImageSrc: indianCircle,
    artworks: [
      { id: "indian-circle", name: "Indian Circle Pattern", imageSrc: indianCircle, description: "Simple circular layout with high readability." },
      { id: "indian-mandala-02", name: "Indian Mandala 02", imageSrc: indianMandala2, description: "Detailed mandala with medium-density line work." },
      { id: "indian-mandala-03", name: "Indian Mandala 03", imageSrc: indianMandala3, description: "Compact radial motif suited to smaller boards." }
    ]
  },
  {
    slug: "mesoamerican",
    name: "Mesoamerican",
    description: "Bold symbols and geometric structures based on mesoamerican references.",
    thumbnailSrc: mayanMandala1,
    headerImageSrc: mayanCalendar,
    artworks: [
      { id: "mayan-calendar", name: "Mayan Calendar", imageSrc: mayanCalendar, description: "Complex icon-based composition with high detail." },
      { id: "mayan-mandala-01", name: "Mayan Mandala 01", imageSrc: mayanMandala1, description: "Balanced geometric motif for central placement." },
      { id: "mayan-mandala-02", name: "Mayan Mandala 02", imageSrc: mayanMandala2, description: "Denser structure suited to larger board surfaces." }
    ]
  },
  {
    slug: "polynesian",
    name: "Polynesian",
    description: "Tribal-inspired patterns with flowing lines and directional rhythm.",
    thumbnailSrc: polynesian2,
    headerImageSrc: polynesian5,
    artworks: [
      { id: "polynesian-02", name: "Polynesian Mandala 02", imageSrc: polynesian2, description: "Clean tribal composition with medium contrast." },
      { id: "polynesian-05", name: "Polynesian Mandala 05", imageSrc: polynesian5, description: "Layered motif with stronger visual impact." },
      { id: "polynesian-08", name: "Polynesian Mandala 08", imageSrc: polynesian8, description: "Compact pattern for small and medium templates." }
    ]
  }
];

export const designCategoryBySlug = new Map(designCategories.map((category) => [category.slug, category]));

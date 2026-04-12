import decorationBoardSlide from "../../Images/Web_Page_Images/Home/Decoration_Board_01.jpeg";
import surfboardsCatalogSlide from "../../Images/Web_Page_Images/Home/Surboards_Catalog_01.jpeg";
import workshopSlide from "../../Images/Web_Page_Images/Home/WhatsApp Image 2024-08-01 at 00.50.42.jpeg";
import { catalogImages } from "./catalogImages";

export const homeHeroSlides = [decorationBoardSlide, surfboardsCatalogSlide, workshopSlide];

export const homeCatalogCards = [
  { label: "Short Boards", path: "/shop", imageSrc: catalogImages.shortBoards },
  { label: "Evolutive Boards", path: "/shop-evolutive-boards", imageSrc: catalogImages.evolutiveBoards },
  { label: "Long Boards", path: "/shop-longboards", imageSrc: catalogImages.longBoards },
  { label: "Balance Boards", path: "/shop-balance-boards", imageSrc: catalogImages.balanceBoards },
  { label: "Decoration Boards", path: "/shop-decoration-boards", imageSrc: catalogImages.decorationBoards }
];

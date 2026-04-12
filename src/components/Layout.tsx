import headerBannerImage from "../../Images/Web_Page_Images/Home/Gnarly_Gents_Background_Image_Mountains_2.jpg";
import { useLocation } from "react-router-dom";
import { collections, productBySlugPath } from "../data/products";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const showPageHeaderImage = pathname !== "/";
  const isHomeRoute = pathname === "/";
  const collection = collections.find((entry) => entry.path === pathname);
  const product = productBySlugPath.get(pathname);
  const categoryHeading = collection?.heading ?? product?.collectionTitle ?? null;

  return (
    <div className="site-shell">
      <a href="#main" className="skip-link">
        Skip to Content
      </a>
      <Header />
      {showPageHeaderImage && (
        <div className="page-header-image-wrap">
          <img src={headerBannerImage} alt="" className="page-header-image" />
          {categoryHeading && (
            <div className="page-header-image-overlay">
              <p className="page-header-image-kicker">Collection</p>
              <h1>{categoryHeading}</h1>
            </div>
          )}
        </div>
      )}
      <main id="main" className={`main-content ${isHomeRoute ? "home-main-content" : ""}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}


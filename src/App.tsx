import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AboutPage } from "./pages/AboutPage";
import { BoardCalculatorPage } from "./pages/BoardCalculatorPage";
import { CartPage } from "./pages/CartPage";
import { CollectionPage } from "./pages/CollectionPage";
import { ContactPage } from "./pages/ContactPage";
import { DesignDetailPage } from "./pages/DesignDetailPage";
import { DesignsGalleryPage } from "./pages/DesignsGalleryPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProductPage } from "./pages/ProductPage";
import { ProductsHubPage } from "./pages/ProductsHubPage";

const collectionPaths = [
  "/shop",
  "/shop-balance-boards",
  "/shop-evolutive-boards",
  "/shop-longboards",
  "/shop-decoration-boards"
];

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/designs-gallery" element={<DesignsGalleryPage />} />
        <Route path="/designs-gallery/:slug" element={<DesignDetailPage />} />
        <Route path="/board-calculator" element={<BoardCalculatorPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop-1" element={<ProductsHubPage />} />
        {collectionPaths.map((path) => (
          <Route key={path} path={path} element={<CollectionPage />} />
        ))}
        <Route path="/shop/p/:slug" element={<ProductPage />} />
        <Route path="/shop-balance-boards/p/:slug" element={<ProductPage />} />
        <Route path="/shop-decoration-boards/p/:slug" element={<ProductPage />} />
        <Route path="/shop-diy-kits/p/:slug" element={<ProductPage />} />
        <Route path="/shop-evolutive-boards/p/:slug" element={<ProductPage />} />
        <Route path="/shop-longboards/p/:slug" element={<ProductPage />} />
        <Route path="/shop-small-decoration-boards-solid/p/:slug" element={<ProductPage />} />
        <Route path="/products" element={<Navigate to="/shop-1" replace />} />
        <Route path="/shop-diy-kits" element={<Navigate to="/shop-1" replace />} />
        <Route path="/shop-small-decoration-boards-solid" element={<Navigate to="/shop-decoration-boards" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}


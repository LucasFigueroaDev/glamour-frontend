import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import NavBars from './components/navbars/NavBars'
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import CategoryPage from "./components/categoryPage/CategoryPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import AllProductsPage from "./components/allProductsPage/AllProductsPage";
import ProductDetailPage from "./components/productDetail/ProductDetailPage";
import CartPage from "./components/cartPage/CartPage";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-rigth" toastOptions={{ success: { style: { background: '#f7a8c4', color: '#333' } } }} />
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<AllProductsPage />} />
        <Route path="/producto/:productId" element={<ProductDetailPage />} />
        <Route path="/categoria/:categoryName/:categoryId" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

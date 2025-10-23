import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBars from './components/navbars/NavBars'
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import CategoryPage from "./components/categoryPage/CategoryPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import AllProductsPage from "./components/allProductsPage/AllProductsPage";
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<AllProductsPage />} />
        <Route path="/categoria/:categoryName/:categoryId" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

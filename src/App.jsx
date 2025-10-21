import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBars from './components/navbars/NavBars'
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import CategoryPage from "./components/categoryPage/CategoryPage";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryName/:categoryId" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

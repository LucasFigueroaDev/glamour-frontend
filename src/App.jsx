import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBars from './components/navbars/NavBars'
import Home from "./components/home/Home";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavBars />
      <Home />
      <Routes>
      </Routes>
    </BrowserRouter>
  )
}

export default App

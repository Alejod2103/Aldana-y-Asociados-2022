import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Homepage from './pages/Homepage';
import About from "./components/about/About";
import Contact from "./components/Contact/Contact";
import './css/style.css';
import './css/style.min.css';
import Articulo1 from "./components/articulos/Articulo1";
import Articulo2 from "./components/articulos/Articulo2";
import Articulo3 from "./components/articulos/Articulo3";
import Articulo4 from "./components/articulos/Articulo4";
import Articulo5 from "./components/articulos/Articulo5";
import Articulo6 from "./components/articulos/Articulo6";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/llc-usa" element={<Articulo1 />} />
        <Route path="/blog/empresa-usa" element={<Articulo2 />} />
        <Route path="/blog/bienesyraices" element={<Articulo3 />} />
        <Route path="/blog/contadores-miami" element={<Articulo4 />} />
        <Route path="/blog/ahorro" element={<Articulo5 />} />
        <Route path="/blog/taxes" element={<Articulo6 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;

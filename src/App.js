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

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home/servicios" element={<Contact />} />
        <Route path="/home/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;

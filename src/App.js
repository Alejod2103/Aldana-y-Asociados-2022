import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Topbar from './components/topbar/Topbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
    <Topbar />
    <Header />
    <Homepage />
    <Footer />
    </>
  );
}

export default App;

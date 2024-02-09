import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Contac from "./Components/Contac";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contac" element={<Contac />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

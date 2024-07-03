import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import Modall from "./components/Modall";
import { useState } from "react";
import Levels from "./pages/Levels";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <Modall isOpen={isModalOpen} onCloseModal={handleCloseModal} />
      <NavBar onOpenModal={handleOpenModal} />
      <Routes>
        <Route path="/" element={<Home onOpenModal={handleOpenModal} />} />
        <Route path="/course/:courseCode" element={<Levels />} />
      </Routes>
    </Router>
  );
}

export default App;

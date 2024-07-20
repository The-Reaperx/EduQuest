// App.jsx
import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import Modall from "./components/Modall";
import { useState, useEffect } from "react";
import Levels from "./pages/Levels";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionsPage from "./pages/QuestionsPage";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import ChallengerMode from "./pages/ChallengerMode";
import UnsupportedScreen from "./components/UnsupportedScreen";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLaptopOrHigher, setIsLaptopOrHigher] = useState(
    window.innerWidth >= 1024
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleResize = () => {
    setIsLaptopOrHigher(window.innerWidth >= 1300);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <ScrollToHashElement behavior="smooth" inline="center" block="center" />
      <Modall isOpen={isModalOpen} onCloseModal={handleCloseModal} />
      {isLaptopOrHigher && <NavBar onOpenModal={handleOpenModal} />}
      {isLaptopOrHigher ? (
        <Routes>
          <Route path="/" element={<Home onOpenModal={handleOpenModal} />} />
          <Route path="/course/:courseCode" element={<Levels />} />
          <Route
            path="/:courseCode/unit/:unitId/level/:levelId/questions"
            element={<QuestionsPage />}
          />
          <Route
            path="/:courseCode/unit/:unitId/level/:levelId/challenger"
            element={<ChallengerMode />}
          />
        </Routes>
      ) : (
        <UnsupportedScreen />
      )}
    </Router>
  );
}

export default App;

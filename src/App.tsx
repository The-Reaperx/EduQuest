import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import Modall from "./components/Modall";
import { useState } from "react";
import Levels from "./pages/Levels";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modall isOpen={isModalOpen} onCloseModal={handleCloseModal} />
      <NavBar onOpenModal={handleOpenModal} />
      <Home onOpenModal={handleOpenModal} />
      <Levels />
    </>
  );
}

export default App;

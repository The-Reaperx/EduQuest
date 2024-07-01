import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import Modall from "./components/Modall";
function App() {
  return (
    <>
      <Modall />
      <NavBar />
      <Home />
    </>
  );
}

export default App;

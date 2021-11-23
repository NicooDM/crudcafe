import "./App.css";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/pages/Inicio";

function App() {
  return (
    <>
      <Navigation />
      <Inicio />
      <Footer />
    </>
  );
}

export default App;

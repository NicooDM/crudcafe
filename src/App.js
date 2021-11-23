import "./App.css";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import ListaProducto from "./components/productos/ListaProducto"
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404"
import AgregarProducto from "./components/productos/AgregarProducto"
import EditarProducto from "./components/productos/EditarProducto"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navigation/>
        <Routes>
          <Route  exact path="/" element={<Inicio></Inicio>}>
          

          </Route>
          <Route exact path="/productos"element={<ListaProducto></ListaProducto>}></Route>
          <Route exact path="/productos/nuevo"element={<AgregarProducto></AgregarProducto>}></Route>
          <Route exact path="/productos/editar"element={<EditarProducto></EditarProducto>}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import ListaProducto from "./components/productos/ListaProducto";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";
import AgregarProducto from "./components/productos/AgregarProducto";
import EditarProducto from "./components/productos/EditarProducto";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [productos, setProductos] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    consultarAPI();
  }, []);
  const consultarAPI = async() =>{
    try{
      // codigo que ejecuto normalmente,Peticion GET
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      // console.log(respuesta);
      console.log(datos)
      setProductos(datos);
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/productos"
            element={<ListaProducto productos={productos}></ListaProducto>}
          ></Route>
          <Route
            exact
            path="/productos/nuevo"
            element={<AgregarProducto></AgregarProducto>}
          ></Route>
          <Route
            exact
            path="/productos/editar"
            element={<EditarProducto></EditarProducto>}
          ></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import React from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { campoRequerido, rangoPrecio } from "../helpers/helpers";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

const AgregarProducto = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [mensajeAlert,setmensajeAlert]=useState(false)
  const URL = process.env.REACT_APP_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    //CREAR UN OBJETO PARA ENVIAR A LA API
    //validar producto
    if (
      campoRequerido(nombreProducto) &&
      rangoPrecio(precioProducto) &&
      campoRequerido(categoria)
    ) {
      setmensajeAlert(false)
      //crear objeto para enviar a la API
      const productoNuevo = {
        nombreProducto,
        precioProducto,
        categoria
      }
       //enviar datos a la API- PETISION POST
       try{
         const parametros={
           method:"POST",
           headers:{
             "Content-Type":"application/json"
           },
           body:JSON.stringify(productoNuevo)
         }
         const respuesta= await fetch(URL,parametros)
         console.log(respuesta)
         if(respuesta.status===201){
           //mostrar al usuario un cartel de operación exitosa
           Swal.fire(
            'Producto Creado!',
            'El Producto Fue Correctamente Cargado!',
            'success'
          )

         //resetear el formulario
         e.target.reset();

         }else{
           //decirle al usuario que lo intente mas tarde
           Swal.fire({
            icon: 'error',
            title: 'Oops Error 401...',
            text: 'Intente Mas Tarde!',
            
          })
         }
         

       }catch(error){console.log(error)}

    } else {
      setmensajeAlert(true)
    }
  };
  return (
    <div>
      <Container>
        <h1 className="display-3 text-center my-4">Nuevo Producto</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del producto*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: café"
              onChange={(e) => setNombreProducto(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio*</Form.Label>
            <Form.Control
              type="number"
              placeholder="ej: 50"
              onChange={(e) => setPrecioProducto(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select onChange={(e) => setCategoria(e.target.value)}>
              <option value="">Seleccione una opcion</option>
              <option value="bebida-caliente">Bebida Caliente</option>
              <option value="bebida-fria">Bebida Fria</option>
              <option value="sandwich">Sandwich</option>
              <option value="dulce">Dulce</option>
              <option value="salado">Salado</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Guardar
          </Button>
        </Form>
        {mensajeAlert===true ?  (<Alert variant='danger' className="mb-5">Debe Completar Todos Los Campos!</Alert>) : null}
        

        
        
      </Container>
    </div>
  );
};

export default AgregarProducto;

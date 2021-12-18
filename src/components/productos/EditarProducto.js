import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {useEffect,useState,useRef} from 'react'
import { campoRequerido,rangoPrecio } from "../helpers/helpers";
import Swal from "sweetalert2";

const EditarProducto = (props) => {
  //Acceder al id del objeto
  const {id} = useParams()
  const [categoria,setCategoria]=useState('')
  const [producto,setProducto]=useState({})
  const URL = process.env.REACT_APP_API_URL+'/'+id;
  const nombreProductoRef=useRef('')
  const precioProductoRef=useRef(0)
  useEffect(async()=>{
    try{
    const respuesta= await fetch(URL)
     //consultar a la API un producto en particular,peticion GET
     if(respuesta.status===200){
      const dato = await respuesta.json()
      
      setProducto(dato)
      setCategoria(dato.categoria)
    }


    }catch(error){
      console.log(error)
    }
   
  })
  const handleSubmit=async (e)=>{
    e.preventDefault()
    //validar los datos
    if(campoRequerido(nombreProductoRef.current.value)&&rangoPrecio(precioProductoRef.current.value)&&campoRequerido(categoria)){
      //crear un objeto y enviarlo a la api
      const productoModificado={
        nombreProducto: nombreProductoRef.current.value,
        precioProducto: precioProductoRef.current.value,
        categoria
      }
      //pedir modificar los datos a la api
      try {
        const respuesta = await fetch(URL,{
          method:"PUT",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify(productoModificado)
        })
        if(respuesta.status===200){
          Swal.fire(
            'Producto Modifiado','El Producto fue Correctamente Modificado','success'
          )
          props.consultarAPI();
        }
      } catch (error) {
        console.log(error)
        
      }

    }
    else{

    }

    


  }
  return (
    <div>
      <Container>
        <h1 className="display-3 text-center my-4">Editar Producto</h1>
        <hr />
        <Form className="my-5"onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre del producto*</Form.Label>
            <Form.Control type="text" placeholder="Ej: café" defaultValue={producto.nombreProducto} ref={nombreProductoRef}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Precio*</Form.Label>
            <Form.Control type="number" placeholder="ej: 50" defaultValue={producto.precioProducto} ref={precioProductoRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select value={categoria} onChange={(e)=>setCategoria(e.target.value)}>
              <option>Seleccione una opcion</option>
              <option>Bebida Caliente</option>
              <option>Bebida Fria</option>
              <option>Sandwich</option>
              <option>Dulce</option>
              <option>Salado</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Guardar cambios
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditarProducto;

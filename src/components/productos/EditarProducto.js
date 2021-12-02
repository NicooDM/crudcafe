import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'

const EditarProducto = () => {
  //Acceder al id del objeto
  const {id} = useParams()
  
  const [producto,setProducto]=useState({})
  const URL = process.env.REACT_APP_API_URL+'/'+id;
  useEffect(async()=>{
    try{
    const respuesta= await fetch(URL)
     //consultar a la API un producto en particular,peticion GET
     if(respuesta.status===200){
      const dato = await respuesta.json()
      
      setProducto(dato)
    }


    }catch(error){
      console.log(error)
    }
   
  })
  return (
    <div>
      <Container>
        <h1 className="display-3 text-center my-4">Editar Producto</h1>
        <hr />
        <Form className="my-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre del producto*</Form.Label>
            <Form.Control type="text" placeholder="Ej: café" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Precio*</Form.Label>
            <Form.Control type="number" placeholder="ej: 50" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select>
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

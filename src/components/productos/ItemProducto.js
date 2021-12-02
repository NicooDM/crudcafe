import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

const ItemProducto = (props) => {
const eliminarProducto= ()=>{
  Swal.fire({
    title: 'Estas seguro que desea eliminar el producto?',
    text: "Esta acción no se puede revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Borrar!',
    cancelButtonText:'Cancelar'
  }).then(async (result) => {
    //pasos para pedirle a la API , borrar el producto
    try{
      const URL = process.env.REACT_APP_API_URL+'/'+props.producto.id
      const respuesta = await fetch (URL,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",

        }

      })
      if(respuesta.status===200){
        Swal.fire(
          'Producto Eliminado!',
          'Producto Borrado con Exito!.',
          'success'
        )
        props.consultarAPI()

      }


    }catch(error){
      Swal.fire({
        icon: 'error',
        title: 'Oops Error 402...',
        text: 'Intente Mas Tarde!',
       
      })
    }
   
  })
}
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <p>
          {props.producto.nombreProducto}
          <span className="fw-bolder">- Precio:$ {props.producto.precioProducto}</span>
        </p>
        <div>
          <Link to ={`/productos/editar/${props.producto.id}`}className="btn btn-warning me-2">Editar</Link>
          <Button variant="danger"onClick={()=>eliminarProducto()}>Borrar</Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ItemProducto;

import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ItemProducto = () => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <p>
          Lorem ipsum dolor sit.
          <span className="fw-bolder">- Precio: 50</span>
        </p>
        <div>
          <Button variant="warning">Editar</Button>
          <Button variant="danger">Borrar</Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ItemProducto;

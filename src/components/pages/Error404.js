import React from 'react';
import { Container } from 'react-bootstrap';
import error from  "../../img/error-404.jpg"
const Error404 = () => {
    return (
        <div>
            <Container>
                <img src={error} alt="error 404" className="w-100" />
            </Container>
        </div>
    );
};

export default Error404;
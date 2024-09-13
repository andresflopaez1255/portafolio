import React from 'react';
import { Element } from 'react-scroll'; // O cualquier librería que estés usando
import useTecnologies from '../hooks/tecnologies/useTecnologies';
import { Col, Row } from 'react-bootstrap';

export default function Tecnologies() {
  const { tecnologies } = useTecnologies();

  return (
    <Element name="tecnologies">
      <Row className="justify-content-center align-items-center">
        {tecnologies.map((tecnology: any) => (
          <Col xs={6} sm={6} lg={4} className="mb-5 d-flex justify-content-center align-items-center" key={tecnology.id}>
            <img
              className="image-tecnologies"
              src={tecnology.image}
              alt="Descripción de la imagen"
            />
          </Col>
        ))}
      </Row>
    </Element>
  );
}

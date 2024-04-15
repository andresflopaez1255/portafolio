import useTecnologies from "../hooks/tecnologies/useTecnologies";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-multi-carousel/lib/styles.css";
import { Element } from 'react-scroll';

export default function Tecnologies() {
  const { tecnologies } = useTecnologies();
  
  return (
    <Element name="tecnologies" >
       <Row>
      {tecnologies.map((tecnology: any) => {
        return (
         
            
             <Col lg={4} className="mb-5">
             <img
                  className="image-tecnologies"
                  src={tecnology.image}
                  alt="Descripción de la imagen"
                />
             </Col>
      
        );
      })}
         
         </Row>
    </Element>
   
  );
}

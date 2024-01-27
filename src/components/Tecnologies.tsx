import React from "react";
import useTecnologies from "../hooks/tecnologies/useTecnologies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Element } from 'react-scroll';

export default function Tecnologies() {
  const { tecnologies } = useTecnologies();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Element name="tecnologies" >
       <Carousel centerMode className="mb-3" draggable responsive={responsive}>
      {tecnologies.map((tecnology: any) => {
        return (
          <div>
            
                <img
                  className="image-tecnologies"
                  src={tecnology.image}
                  alt="Descripción de la imagen"
                />
            
          </div>
        );
      })}
    </Carousel>
    </Element>
   
  );
}

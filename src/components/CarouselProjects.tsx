import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';

import useDataProjects from "../hooks/projects/useDataProjects";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
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

export default function CarouselProjects() {
  const { projectsData } = useDataProjects();

  const handleClick = (link:string)=>{
    window.open(link, '_blank')
    }
    
    const setBackgroundBagde = (text:string) =>{
      if (text.includes("web")) {
        return "success"
      }

      if (text.includes("movil")) {
        return "primary"
      }


    }
  return (
    <Carousel className="mb-5" draggable responsive={responsive}>
      {projectsData.map((project:any) => {
        const color = setBackgroundBagde(project.specialty)

        console.log(color)
        return (
          <div>
            <Row>
              <Col lg={5} md={6} xs={12}>
                <img
                  className="item-image-carousel"
                  src={project.image}
                  alt="Descripción de la imagen"
                />
              </Col>
  
              <Col className="container-info-project" xs={12} lg={6} md={6}>
                <h4 className="title-project">{project.name}</h4>
              
  
                <p className="paragraph mt-0">{project.description}</p>
                <Badge bg={color}  className="badge" >{project.specialty}</Badge>
                <br />
                <Button onClick={()=>handleClick(project.urlRepository)} className="btn-project" variant="primary">
                  Visitar Web
                </Button>
  
               
              </Col>
            </Row>
          </div>
        )
      })}
    </Carousel>
  );
}

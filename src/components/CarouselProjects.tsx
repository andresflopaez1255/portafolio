import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Element } from "react-scroll";

import useDataProjects from "../hooks/projects/useDataProjects";
import VideoPlayerCustomButton from "./PlayerVideo";

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

  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  const setBackgroundBagde = (text: string) => {
    if (text.includes("web")) {
      return "success";
    }

    if (text.includes("movil")) {
      return "primary";
    }
  };
  return (
    <Element name="projects">
      <Carousel className="mb-3" draggable responsive={responsive}>
        {projectsData.map((project: any) => {
          const color = setBackgroundBagde(project.specialty);

          console.log(color);
          return (
            <div key={project.id}>
              <Row>
                <Row lg={12} md={12} xs={12}>
                  
                <VideoPlayerCustomButton />
                  {/*   <img
                  className="item-image-carousel"
                  src={project.image}
                  alt="Descripción de la imagen"
                /> */}
                </Row>

                <Col className="container-info-project" xs={12} lg={12} md={6}>
                  <h4 className="title-project">{project.name}</h4>

                  <p className="paragraph mt-0">{project.description}</p>
                  <Badge bg={color} className="badge">
                    {project.specialty}
                  </Badge>
                  <br />
                  {project.urlRepository != null ? (
                    <Button
                      onClick={() => handleClick(project.urlRepository)}
                      className="btn-project"
                      variant="primary"
                    >
                      Visitar Web
                    </Button>
                  ) : null}
                </Col>
              </Row>
            </div>
          );
        })}
      </Carousel>
    </Element>
  );
}

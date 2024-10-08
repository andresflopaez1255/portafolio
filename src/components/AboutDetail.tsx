import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";
import { Row } from "react-bootstrap";

export default function AboutDetail() {
  return (
    <Row lg={8} className="mx-lg-5 justify-content-center">
      <Col xs={12} md={12} lg={7} className="about align-content-center">
      <Col className="justify-content-center" lg={12}>
        <Image
          className="avatar"
          src="https://firebasestorage.googleapis.com/v0/b/portafolio-dd96b.appspot.com/o/profile.jpg?alt=media&token=07e95711-1e0a-4150-9655-d2cd6e82135f"
        />
      </Col>
        <span className="name-text">Andres Florez</span>
      
        <h3 className="about-text">
          Soy, un apasionado desarrollador de aplicaciones móviles
          multiplataforma con experiencia en tecnologías como React Native y
          Flutter. También tengo conocimientos básicos en desarrollo web con
          React.
        </h3>

        <Button onClick={() => {}} className="btn-arrow bg-transparent">
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
            className="navbar-link-text"
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/circled-chevron-down.png"
              alt="circled-chevron-down"
            />
          </Link>
        </Button>
      </Col>

    
    </Row>
  );
}

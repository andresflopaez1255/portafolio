import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

export default function AboutDetail() {
  return (
    <Col xs={12} md={12} lg={12} className="about">
      <Image
        className="avatar"
        src="https://firebasestorage.googleapis.com/v0/b/portafolio-dd96b.appspot.com/o/profile.jpg?alt=media&token=07e95711-1e0a-4150-9655-d2cd6e82135f"
      />
      <h1 className="about-title">Andres Florez</h1>

      <h3 className="about-text">
        Soy desarrollador de aplicaciones moviles mutilplataforma, Desarrollo
        web con react.js y maquetacion web con HTML y CSS
      </h3>
    </Col>
  );
}

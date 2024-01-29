import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import { ToggleProps } from "../interfaces/app.props";

export default function AboutDetail({ show }: ToggleProps) {
  return (
    <Col xs={12} md={12} lg={12} className="about">
      <Image
        className="avatar"
        src="https://firebasestorage.googleapis.com/v0/b/portafolio-dd96b.appspot.com/o/profile.jpg?alt=media&token=07e95711-1e0a-4150-9655-d2cd6e82135f"
      />
      <h1 className="about-title">Andres Florez</h1>

      <h3 className="about-text">
        Soy desarrollador de aplicaciones moviles mutilplataforma con tecnologias como react native y flutter, tambien tengo conocimiento basico en react web
      </h3>
    </Col>
  );
}

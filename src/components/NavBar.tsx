import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { ToggleProps } from "../interfaces/app.props";

export default function NavBarComp({ show,toggle }: ToggleProps) {
  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <img src={logo} alt="Descripción de la imagen" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>{
        toggle!(!show)
      }} />

      <Navbar.Collapse className="basic-navbar-nav">
        <Nav className="navbar-link-container ml-0">
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={-800}
            duration={200}
            className="navbar-link-text"
          >
            Mi experiencia
          </Link>

          <Link
            to="tecnologies"
            spy={true}
            smooth={true}
            offset={-200}
            duration={200}
            className="navbar-link-text"
          >
            Tecnologias
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={200}
            duration={200}
            className="navbar-link-text"
          >
            Mis Trabajos
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

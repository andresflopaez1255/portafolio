import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { ToggleProps } from "../interfaces/app.props";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function NavBarComp({ show, toggle }: ToggleProps) {
  return (
    <Navbar className="navbar bg-transparent" variant="dark" expand="lg">
      <Navbar.Brand href="#">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => toggle(!show)}
      />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between"
      >
        <Nav className="mx-auto navbar-links">
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
          {/* Otros enlaces según sea necesario */}
        </Nav>
        <Nav>
          <a
            href="https://www.linkedin.com/in/andres-florez-111595197/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/andresflopaez1255/andresflopaez1255"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

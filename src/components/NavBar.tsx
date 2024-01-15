
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function NavBarComp() {
  return (
    <Navbar className='navbar' bg="transparent" variant="dark" expand="lg" >
  
   <img
           
            src="src/assets/logo.png"
            alt="Descripción de la imagen"
          />
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='navbar-link-container' >
        <Nav.Link className='navbar-link-text' href="#home" >Mi experiencia</Nav.Link>
        <Nav.Link className='navbar-link-text' href="#about" >Mis Trabajos</Nav.Link>
        <Nav.Link className='navbar-link-text' href="#contact" >Tecnologias</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  
  </Navbar>
  )
}

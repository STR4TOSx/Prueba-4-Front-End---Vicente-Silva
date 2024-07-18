import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { scrollToElement } from '../utils'; // Función de utilidad para desplazamiento suave

// Componente funcional para la barra de navegación
const Navigation: React.FC = () => {
  // Hook para obtener la ubicación actual en la aplicación
  const location = useLocation();

  // Maneja el clic en los enlaces de navegación
  const handleNavClick = (e: React.MouseEvent, elementId: string) => {
    if (location.pathname === '/') {
      e.preventDefault(); // Previene la navegación por defecto
      scrollToElement(elementId); // Desplaza a la sección correspondiente
    }
  };

  return (
    // Barra de navegación de Bootstrap con estilos personalizados
    <Navbar bg="custom" variant="dark" expand="lg" className="custom-nav">
      <Container fluid className="px-3 px-lg-5">
        {/* Botón de toggle para dispositivos móviles */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Contenido colapsable de la barra de navegación */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Enlaces de navegación */}
            <Nav.Link as={Link} to="/" onClick={(e) => handleNavClick(e, 'quienes-somos')}>Quienes somos</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={(e) => handleNavClick(e, 'acerca-del-proyecto')}>Acerca del proyecto</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={(e) => handleNavClick(e, 'pokedex-section')}>Pokédex</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={(e) => handleNavClick(e, 'suscribete')}>Suscríbete</Nav.Link>
            <Nav.Link as={Link} to="/admin">Administrador</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Logo de la marca, alineado a la derecha */}
        <Navbar.Brand as={Link} to="/" className="custom-brand ms-auto">
          <img
            src="/imagenes/PokemonLogo.png"
            className="d-inline-block align-top custom-logo"
            alt="Pokemon logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;
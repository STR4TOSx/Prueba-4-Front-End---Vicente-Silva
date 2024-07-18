import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Componente funcional para el encabezado de la página
const Header: React.FC = () => {
  return (
    // Elemento header con clase personalizada para estilos específicos
    <header className="custom-header">
      {/* Contenedor Bootstrap para mantener el contenido centrado y responsive */}
      <Container>
        {/* Fila con clases para centrar el contenido y alinear los elementos verticalmente */}
        <Row className="justify-content-center align-items-center">
          {/* Columna para la imagen izquierda */}
          <Col xs={12} lg={6} xl={5} className="text-center text-lg-end mb-3 mb-lg-0">
            <img
              src="/imagenes/Pokemon_Pokedex_logo.png"
              alt="Imagen izquierda"
              className="header-image"
            />
          </Col>
          {/* Columna para la imagen derecha */}
          <Col xs={12} lg={6} xl={5} className="text-center text-lg-start right-image-col">
            <img
              src="/imagenes/BanerGif480.gif"
              alt="Imagen derecha"
              className="header-image"
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
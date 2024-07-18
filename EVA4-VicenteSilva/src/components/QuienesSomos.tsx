import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Componente funcional para la sección "Quiénes Somos"
const QuienesSomos: React.FC = () => {
  return (
    // Contenedor principal con ID para navegación y margen vertical
    <Container id="quienes-somos" className="my-5">
      {/* Fila con alineación vertical centrada */}
      <Row className="align-items-center">
        {/* Columna para la imagen, ocupa 5 columnas en pantallas medianas y grandes */}
        <Col md={5} className="mb-4 mb-md-0">
          <img
            src="/imagenes/AshPikachu.gif"
            alt="Quiénes Somos"
            className="img-fluid section-image"
            // img-fluid hace que la imagen sea responsive
            // section-image es una clase personalizada para estilos adicionales
          />
        </Col>
        {/* Columna para el texto, ocupa 7 columnas en pantallas medianas y grandes */}
        <Col md={7}>
          <h2 className="mb-4">Quiénes Somos</h2>
          <p>
            Hola, soy Vicente Silva, un apasionado estudiante de segundo año de Ingeniería en Informática en INACAP. 
            Desde pequeño, he tenido una gran afición por los videojuegos, especialmente por el universo de Pokémon, 
            que me ha acompañado a lo largo de mi vida. Este proyecto nace de mi interés por combinar mi formación 
            académica con mi pasión por los videojuegos, explorando nuevas tecnologías y desarrollando habilidades 
            en el desarrollo de aplicaciones web.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default QuienesSomos;
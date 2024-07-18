import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Componente funcional que representa la sección "Acerca del Proyecto"
const AcercaDelProyecto: React.FC = () => {
  return (
    // Contenedor principal con ID para navegación y margen vertical
    <Container id="acerca-del-proyecto" className="my-5">
      <Row className="align-items-center">
        {/* Columna para la imagen, ocupa 5 columnas en pantallas medianas y grandes */}
        <Col md={5} className="mb-4 mb-md-0">
          <img
            src="/imagenes/PokedexGIF.gif"
            alt="Acerca del Proyecto"
            className="img-fluid section-image"
            // img-fluid hace que la imagen sea responsive
            // section-image es una clase personalizada para estilos adicionales
          />
        </Col>
        {/* Columna para el texto, ocupa 7 columnas en pantallas medianas y grandes */}
        <Col md={7}>
          <h2 className="mb-4">Acerca del Proyecto</h2>
          <p>
            {/* Descripción detallada del proyecto */}
            Este proyecto tiene como objetivo desarrollar una aplicación web que sirva como una plataforma interactiva 
            para explorar el vasto mundo de Pokémon a través de la PokéAPI. La PokéAPI es una interfaz de programación 
            de aplicaciones gratuita y de código abierto que proporciona información detallada y accesible sobre 
            diferentes especies de Pokémon. Mediante esta API, la aplicación permite a los usuarios buscar y visualizar 
            información específica sobre sus Pokémon favoritos, incluyendo sus características, habilidades, y mucho más. 
            Esta herramienta no solo busca ser un recurso educativo para otros estudiantes y aficionados a los videojuegos, 
            sino también un medio para demostrar la aplicación práctica de las habilidades de programación y diseño web 
            aprendidas durante mi carrera.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AcercaDelProyecto;
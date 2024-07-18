import React from 'react';
import { Container } from 'react-bootstrap';

// Componente funcional para el pie de página
const Footer: React.FC = () => {
  return (
    // El elemento footer con clases personalizadas para estilo y espaciado
    <footer className="custom-footer py-3 text-center">
      {/* Contenedor fluido de Bootstrap con padding personalizado */}
      <Container fluid className="px-3 px-lg-5">
        {/* Título de la sección de contacto */}
        <h5>Contáctanos</h5>
        
        {/* Información del desarrollador */}
        <p>Sitio diseñado y programado por Vicente Silva</p>
        
        {/* Detalles de contacto */}
        <p>Email: vicente.silva16@inacapmail.cl</p>
        <p>Teléfono: (+56) 9-3250-7815</p>
        
        {/* Información sobre la fuente de datos */}
        <p>Toda la información utilizada fue generada a tráves de la API de pokemón (POKEAPI)</p>
        
        {/* Aviso legal sobre la propiedad intelectual */}
        <p>Pokémon, Pokémon Cards, and other content, are propiety of Nintendo, Creatures Inc., GAMEFREAK Inc. and others.</p>
      </Container>
    </footer>
  );
};

export default Footer;
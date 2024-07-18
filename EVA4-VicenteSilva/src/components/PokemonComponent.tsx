import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import '../PokemonComponent.css'; // Importación de estilos específicos para este componente

// Interfaz que define la estructura de datos de un Pokémon
interface Pokemon {
  id: number;
  nombre: string;
  sprites: {
    front_default: string;
  };
  tipos: Array<{
    type: {
      name: string;
    };
  }>;
  altura: number;
  peso: number;
  habilidades: Array<{
    ability: {
      name: string;
    };
  }>;
}

const PokemonComponent: React.FC = () => {
  // Estados para manejar el Pokémon, la búsqueda, carga y errores
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  // Función asíncrona para buscar un Pokémon
  const buscarPokemon = async () => {
    if (!busqueda) return;
    setCargando(true);
    setError('');
    setPokemon(null);

    try {
      // Realiza una petición a la PokeAPI
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda.toLowerCase()}`);
      if (!respuesta.ok) {
        throw new Error('Pokémon no encontrado');
      }
      const datos = await respuesta.json();
      // Adapta los datos recibidos a nuestra interfaz en español
      setPokemon({
        id: datos.id,
        nombre: datos.name,
        sprites: datos.sprites,
        tipos: datos.types,
        altura: datos.height,
        peso: datos.weight,
        habilidades: datos.abilities
      });
    } catch (err) {
      setError('Pokémon no encontrado. Por favor, intenta de nuevo.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <Container className="my-5 pokedex-container" id="pokedex-section">
      <h2 className="text-center mb-4 pokedex-title">Buscador de Pokemones</h2>
      <p className="text-center mb-4 pokedex-text">
        Este buscador te permite encontrar información sobre cualquier Pokémon. 
        Simplemente ingresa el nombre del Pokémon en el campo de búsqueda y haz clic en "Buscar". 
        La información se obtendrá de la PokeAPI y se mostrará a continuación.
      </p>
      <Row className="justify-content-center mb-4">
        <Col md={6}>
          <Form onSubmit={(e) => { e.preventDefault(); buscarPokemon(); }}>
            <Form.Group className="mb-3" controlId="busquedaPokemon">
              <Form.Control
                type="text"
                placeholder="Ingresa el nombre del Pokémon"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </Form.Group>
            <Button variant="light" type="submit" disabled={cargando}>
              {cargando ? 'Buscando...' : 'Buscar'}
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Muestra un mensaje de error si existe */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Muestra la información del Pokémon si se ha encontrado */}
      {pokemon && (
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="pokedex-card">
              <Card.Img variant="top" src={pokemon.sprites.front_default} alt={pokemon.nombre} />
              <Card.Body>
                <Card.Title className="text-capitalize">{pokemon.nombre}</Card.Title>
                <Card.Text>
                  <strong>ID:</strong> {pokemon.id}<br />
                  <strong>Tipos:</strong> {pokemon.tipos.map(tipo => tipo.type.name).join(', ')}<br />
                  <strong>Altura:</strong> {pokemon.altura / 10} m<br />
                  <strong>Peso:</strong> {pokemon.peso / 10} kg<br />
                  <strong>Habilidades:</strong> {pokemon.habilidades.map(habilidad => habilidad.ability.name).join(', ')}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default PokemonComponent;
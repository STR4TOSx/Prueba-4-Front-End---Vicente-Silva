// Admin.tsx
import React, { useState, useEffect } from 'react';
import { Container, Table, Form, Button, Alert, Pagination } from 'react-bootstrap';
import LoginAdmin from './LoginAdmin';

// Componente principal de administración
const Admin: React.FC = () => {
  // Estados para manejar la lista de correos, formularios y paginación
  const [correos, setCorreos] = useState<string[]>([]); // Lista de correos
  const [nuevoCorreo, setNuevoCorreo] = useState(''); // Input para nuevo correo
  const [mensaje, setMensaje] = useState(''); // Mensajes de feedback
  const [busqueda, setBusqueda] = useState(''); // Input de búsqueda
  const [paginaActual, setPaginaActual] = useState(1); // Página actual para paginación
  const [showLogin, setShowLogin] = useState(true); // Controla la visibilidad del modal de login
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticación

  const correosPorPagina = 10; // Número de correos a mostrar por página

  // Efecto para cargar correos desde localStorage al montar el componente
  useEffect(() => {
    const correosGuardados = JSON.parse(localStorage.getItem('correos') || '[]');
    setCorreos(correosGuardados);
  }, []);

  // Filtrar correos basado en la búsqueda
  const correosFiltered = correos.filter(correo =>
    correo.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Cálculos para la paginación
  const indexOfLastCorreo = paginaActual * correosPorPagina;
  const indexOfFirstCorreo = indexOfLastCorreo - correosPorPagina;
  const correosActuales = correosFiltered.slice(indexOfFirstCorreo, indexOfLastCorreo);

  // Manejar la adición de un nuevo correo
  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nuevoCorreo) return;

    if (correos.includes(nuevoCorreo)) {
      setMensaje('Este correo ya existe.');
      return;
    }

    const nuevosCorreos = [...correos, nuevoCorreo];
    localStorage.setItem('correos', JSON.stringify(nuevosCorreos));
    setCorreos(nuevosCorreos);
    setNuevoCorreo('');
    setMensaje('Correo añadido exitosamente.');
  };

  // Manejar la eliminación de un correo
  const handleDelete = (correoAEliminar: string) => {
    const nuevosCorreos = correos.filter(correo => correo !== correoAEliminar);
    localStorage.setItem('correos', JSON.stringify(nuevosCorreos));
    setCorreos(nuevosCorreos);
    setMensaje('Correo eliminado exitosamente.');
  };

  // Manejar la actualización de un correo
  const handleUpdate = (index: number, nuevoValor: string) => {
    const nuevosCorreos = [...correos];
    nuevosCorreos[index] = nuevoValor;
    localStorage.setItem('correos', JSON.stringify(nuevosCorreos));
    setCorreos(nuevosCorreos);
    setMensaje('Correo actualizado exitosamente.');
  };

  // Manejar el inicio de sesión exitoso
  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  // Mostrar el componente de login si el usuario no está autenticado
  if (!isLoggedIn) {
    return <LoginAdmin show={showLogin} onHide={() => setShowLogin(false)} onLogin={handleLogin} />;
  }

  // Renderizar el panel de administración
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Administración de Suscriptores</h2>
      
      {/* Formulario para añadir nuevo correo */}
      <Form onSubmit={handleAdd} className="mb-4">
        <Form.Group className="mb-3" controlId="formAddEmail">
          <Form.Label>Añadir nuevo correo</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Ingresa un nuevo email" 
            value={nuevoCorreo}
            onChange={(e) => setNuevoCorreo(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Añadir Correo
        </Button>
      </Form>

      {/* Campo de búsqueda */}
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Buscar correo"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </Form.Group>

      {/* Mostrar mensajes de feedback */}
      {mensaje && <Alert variant={mensaje.includes('exitosamente') ? 'success' : 'danger'}>{mensaje}</Alert>}

      {/* Tabla de correos */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Correo Electrónico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {correosActuales.map((correo, index) => (
            <tr key={index}>
              <td>{indexOfFirstCorreo + index + 1}</td>
              <td>
                <Form.Control 
                  type="email" 
                  value={correo}
                  onChange={(e) => handleUpdate(correos.indexOf(correo), e.target.value)}
                />
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(correo)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Paginación */}
      <Pagination>
        {[...Array(Math.ceil(correosFiltered.length / correosPorPagina))].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === paginaActual}
            onClick={() => setPaginaActual(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default Admin;
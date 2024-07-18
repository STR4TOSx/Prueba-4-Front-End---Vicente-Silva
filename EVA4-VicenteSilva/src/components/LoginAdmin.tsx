// LoginAdmin.tsx
import React, { useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';

// Definición de la interfaz para las props del componente
interface LoginAdminProps {
  show: boolean;  // Controla la visibilidad del modal
  onHide: () => void;  // Función para cerrar el modal
  onLogin: () => void;  // Función a ejecutar cuando el login es exitoso
}

// Componente funcional para el modal de login del administrador
const LoginAdmin: React.FC<LoginAdminProps> = ({ show, onHide, onLogin }) => {
  // Estados para manejar el nombre de usuario, contraseña y mensajes de error
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Maneja el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Verifica las credenciales (Nota: esto es solo para demostración, no es seguro para producción)
    if (username === 'admin' && password === '1234') {
      onLogin();  // Llama a la función de login si las credenciales son correctas
    } else {
      setError('Usuario o contraseña incorrectos');  // Establece un mensaje de error
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login Administrador</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {/* Muestra un mensaje de error si existe */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginAdmin;
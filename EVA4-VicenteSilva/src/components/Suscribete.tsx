import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Suscribete: React.FC = () => {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setMensaje('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Obtener correos existentes
    const correosGuardados = JSON.parse(localStorage.getItem('correos') || '[]');
    
    // Verificar si el correo ya existe
    if (correosGuardados.includes(email)) {
      setMensaje('Este correo ya está suscrito.');
      return;
    }

    // Añadir nuevo correo
    const nuevosCorreos = [...correosGuardados, email];
    localStorage.setItem('correos', JSON.stringify(nuevosCorreos));

    setMensaje('¡Te has suscrito exitosamente!');
    setEmail('');
  };

  return (
    <Container className="my-5" id="suscribete">
      <h2 className="text-center mb-4">Suscríbete</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dirección de correo electrónico</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Ingresa tu email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Suscribirse
        </Button>
      </Form>
      {mensaje && <Alert className="mt-3" variant={mensaje.includes('exitosamente') ? 'success' : 'danger'}>{mensaje}</Alert>}
    </Container>
  );
};

export default Suscribete;
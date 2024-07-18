import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import './styles/custom.css'; // Importa estilos personalizados
import Navigation from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import QuienesSomos from './components/QuienesSomos';
import AcercaDelProyecto from './components/AcercaDelProyecto';
import Suscribete from './components/Suscribete';
import PokemonComponent from './components/PokemonComponent';
import Admin from './components/Admin';

// Componente funcional para la página principal
const LandingPage: React.FC = () => (
  <>
    <QuienesSomos />
    <AcercaDelProyecto />
    <PokemonComponent />
    <Suscribete />
  </>
);

// Componente principal de la aplicación
const App: React.FC = () => {
  return (
    <Router>
      {/* Contenedor principal con clases para flexbox y altura mínima */}
      <div className="App d-flex flex-column min-vh-100">
        <Navigation />
        <Header />
        {/* Contenedor principal que crecerá para llenar el espacio disponible */}
        <main className="flex-grow-1 container-fluid px-3 px-lg-5">
          <Routes>
            {/* Ruta para la página principal */}
            <Route path="/" element={<LandingPage />} />
            {/* Ruta para la página de administración */}
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
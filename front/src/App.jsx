import React, { useState } from 'react';
import FiltroCategorias from './components/FiltroCategorias';
import FiltroPlataformas from './components/FiltroPlataformas';
import DetalleVideojuego from './components/DetalleVideojuego';
import VideojuegosList from './components/VideojuegosList';
import Buscador from './components/Buscador'
import './App.css';

const categoriasDisponibles = [
  { id: 1, nombre: "Lucha" },
  { id: 2, nombre: "Arcade" },
  { id: 3, nombre: "Plataformas" },
  { id: 4, nombre: "Shooter" },
  { id: 5, nombre: "Estrategia" },
  { id: 6, nombre: "Simulación" },
  { id: 7, nombre: "Deporte" },
  { id: 8, nombre: "Aventura" },
  { id: 9, nombre: "Rol" },
  { id: 10, nombre: "Educación" },
  { id: 11, nombre: "Puzzle" }
];

const plataformasDisponibles = [
  { id: 1, nombre: "PC" },
  { id: 2, nombre: "PS5" },
  { id: 3, nombre: "Xbox One" },
  { id: 4, nombre: "Switch" },
  { id: 5, nombre: "Android" },
  { id: 6, nombre: "iOS" },
];

const App = () => {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [plataformaSeleccionada, setPlataformaSeleccionada] = useState("");
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [videojuegoSeleccionado, setVideojuegoSeleccionado] = useState(null);
  const [claveActualizacion, setClaveActualizacion] = useState(0);

  const alternarCategoria = (id) => {
    setCategoriasSeleccionadas((prev) =>
      prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id]
    );
  };

  const manejarEliminacionExitosa = () => {
    setClaveActualizacion(prev => prev + 1);
    setVideojuegoSeleccionado(null);
  };

  return (
    <div className="App">
      <h1>Catálogo de Videojuegos</h1>
      <div className="filters">
        <FiltroCategorias 
          categorias={categoriasDisponibles} 
          categoriasSeleccionadas={categoriasSeleccionadas}
          onToggle={alternarCategoria}
        />
        <FiltroPlataformas 
          plataformas={plataformasDisponibles} 
          plataformaSeleccionada={plataformaSeleccionada} 
          onChange={setPlataformaSeleccionada} 
        />
      </div>
      <Buscador terminoBusqueda={terminoBusqueda} onSearchChange={setTerminoBusqueda} />
      <VideojuegosList 
        key={claveActualizacion}
        categoriasSeleccionadas={categoriasSeleccionadas} 
        plataformaSeleccionada={plataformaSeleccionada}
        terminoBusqueda={terminoBusqueda}
        onSelect={setVideojuegoSeleccionado}
        plataformasDisponibles={plataformasDisponibles}
        categoriasDisponibles={categoriasDisponibles}
      />
      {videojuegoSeleccionado && (
        <DetalleVideojuego
          videojuego={videojuegoSeleccionado}
          onClose={() => setVideojuegoSeleccionado(null)}
          onDeleteSuccess={manejarEliminacionExitosa}
        />
      )}
    </div>
  );
};

export default App;

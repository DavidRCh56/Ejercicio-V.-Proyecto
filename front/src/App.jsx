import React, { useState } from 'react';
import VideoGameList from './components/VideoGameList';
import CategoryFilter from './components/CategoryFilter';
import PlatformFilter from './components/PlatformFilter';
import SearchBox from './components/SearchBox';
import VideoGameDetail from './components/VideoGameDetail';
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
  const [selectedCategorias, setSelectedCategorias] = useState([]);
  const [selectedPlataforma, setSelectedPlataforma] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideojuego, setSelectedVideojuego] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const toggleCategoria = (id) => {
    setSelectedCategorias((prev) =>
      prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id]
    );
  };

  const handleDeleteSuccess = () => {
    setRefreshKey(prev => prev + 1);
    setSelectedVideojuego(null);
  };

  return (
    <div className="App">
      <h1>Catálogo de Videojuegos</h1>
      <div className="filters">
        <CategoryFilter 
          categorias={categoriasDisponibles} 
          selectedCategorias={selectedCategorias}
          onToggle={toggleCategoria}
        />
        <PlatformFilter 
          plataformas={plataformasDisponibles} 
          selectedPlataforma={selectedPlataforma} 
          onChange={setSelectedPlataforma} 
        />
      </div>
      <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <VideoGameList 
        key={refreshKey}
        selectedCategorias={selectedCategorias} 
        selectedPlataforma={selectedPlataforma}
        searchTerm={searchTerm}
        onSelect={setSelectedVideojuego}
        plataformasDisponibles={plataformasDisponibles}
        categoriasDisponibles={categoriasDisponibles}
      />
      {selectedVideojuego && (
        <VideoGameDetail
          videojuego={selectedVideojuego}
          onClose={() => setSelectedVideojuego(null)}
          onDeleteSuccess={handleDeleteSuccess}
        />
      )}
    </div>
  );
};

export default App;

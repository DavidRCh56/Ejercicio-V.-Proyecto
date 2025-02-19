import React, { useState, useEffect } from 'react';
import VideoGameCard from './VideoGameCard';

const VideoGameList = ({
  selectedCategorias,
  selectedPlataforma,
  searchTerm,
  onSelect,
  plataformasDisponibles,
  categoriasDisponibles,
}) => {
  const [videojuegos, setVideojuegos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/videojuegos')
      .then((response) => response.json())
      .then((data) => setVideojuegos(data));
  }, []);

  const filteredVideojuegos = videojuegos.filter(vj => {

    const categoryMatch = 
      selectedCategorias.length === 0 || 
      selectedCategorias.every(catId => vj.categorias.includes(catId));

    const platformMatch = 
      selectedPlataforma === "" || 
      vj.plataformas.includes(parseInt(selectedPlataforma));
      
    const searchMatch = searchTerm === "" ||
      vj.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vj.descripcion.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && platformMatch && searchMatch;
  });

  return (
    <div className="videojuego-list">
      {filteredVideojuegos.map((vj) => (
        <VideoGameCard
          key={vj.id}
          videojuego={vj}
          onSelect={onSelect}
          plataformasDisponibles={plataformasDisponibles}
          categoriasDisponibles={categoriasDisponibles}
        />
      ))}
    </div>
  );
};

export default VideoGameList;

// components/VideoGameCard.js
import React from 'react';

const VideoGameCard = ({ videojuego, onSelect, plataformasDisponibles, categoriasDisponibles }) => {
  const platformNames = videojuego.plataformas.map(pId => {
    const plat = plataformasDisponibles.find(p => p.id === pId);
    return plat ? plat.nombre : pId;
  });

  const categoryNames = videojuego.categorias.map(cId => {
    const cat = categoriasDisponibles.find(c => c.id === cId);
    return cat ? cat.nombre : cId;
  });

  const shortDescription = videojuego.descripcion.substring(0, 100) + '...';

  return (
    <div className="videojuego-card" onClick={() => onSelect(videojuego)}>
      <img src={videojuego.imagen} alt={videojuego.nombre} className="videojuego-imagen" />
      <h3>{videojuego.nombre}</h3>
      <p>{shortDescription}</p>
      <p><strong>Plataformas:</strong> {platformNames.join(', ')}</p>
      <p><strong>Categorías:</strong> {categoryNames.join(', ')}</p>
      <p><strong>Precio:</strong> ${videojuego.precio}</p>
    </div>
  );
};

export default VideoGameCard;

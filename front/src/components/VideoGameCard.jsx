import React from 'react';

const VideoGameCard = ({
  videojuego,
  onSelect,
  plataformasDisponibles,
  categoriasDisponibles,
}) => {
  const nombresPlataformas = videojuego.plataformas.map((pId) => {
    const platforma = plataformasDisponibles.find((p) => p.id === pId);
    return platforma ? platforma.nombre : pId;
  });

  const nombresCategorias = videojuego.categorias.map((cId) => {
    const categorias = categoriasDisponibles.find((c) => c.id === cId);
    return categorias ? categorias.nombre : cId;
  });

  const descripcionCorta =
    videojuego.descripcion.length > 100
      ? `${videojuego.descripcion.substring(0, 100)}...`
      : videojuego.descripcion;

  return (
    <div className="videojuego-card" onClick={() => onSelect(videojuego)}>
      <img
        src={videojuego.imagen}
        alt={videojuego.nombre}
        className="videojuego-imagen"
      />
      <h3>{videojuego.nombre}</h3>
      <p>{descripcionCorta}</p>
      <p>
        <strong>Plataformas:</strong> {nombresPlataformas.join(", ")}
      </p>
      <p>
        <strong>Categorías:</strong> {nombresCategorias.join(", ")}
      </p>
      <p>
        <strong>Precio:</strong> ${videojuego.precio}
      </p>
    </div>
  );
};

export default VideoGameCard;

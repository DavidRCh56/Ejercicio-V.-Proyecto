import React from 'react';

const CardVideojuego = ({
  videojuego,
  onSelect,
  plataformasDisponibles,
  categoriasDisponibles,
}) => {
  const nombresPlataformas = videojuego.plataformas.map((pId) => {
    const plataforma = plataformasDisponibles.find((p) => p.id === pId);
    return plataforma ? plataforma.nombre : pId;
  });

  const nombresCategorias = videojuego.categorias.map((cId) => {
    const categoria = categoriasDisponibles.find((c) => c.id === cId);
    return categoria ? categoria.nombre : cId;
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

export default CardVideojuego;

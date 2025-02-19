import React from 'react';

const Buscador = ({ terminoBusqueda, onSearchChange }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Buscar videojuegos..."
        value={terminoBusqueda}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default Buscador;

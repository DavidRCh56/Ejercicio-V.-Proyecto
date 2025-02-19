import React, { useState, useEffect } from 'react';
import TarjetaVideojuego from './CardVideojuego';

const VideojuegosList = ({
  categoriasSeleccionadas,
  plataformaSeleccionada,
  terminoBusqueda,
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

  const videojuegosFiltrados = videojuegos.filter(vj => {

    const coincideCategoria = 
      categoriasSeleccionadas.length === 0 || 
      categoriasSeleccionadas.every(catId => vj.categorias.includes(catId));

    const coincidePlataforma = 
      plataformaSeleccionada === "" || 
      vj.plataformas.includes(parseInt(plataformaSeleccionada));
      
    const coincideBusqueda = terminoBusqueda === "" ||
      vj.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      vj.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase());

    return coincideCategoria && coincidePlataforma && coincideBusqueda;
  });

  return (
    <div className="videojuego-list">
      {videojuegosFiltrados.map((vj) => (
        <TarjetaVideojuego
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

export default VideojuegosList;

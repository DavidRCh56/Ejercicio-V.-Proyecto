// components/PlatformFilter.js
import React from 'react';

const PlatformFilter = ({ plataformas, selectedPlataforma, onChange }) => {
  // Filtramos para eliminar "Otras"
  const plataformasFiltradas = plataformas.filter(plat => plat.nombre !== "Otras");

  return (
    <select value={selectedPlataforma} onChange={(e) => onChange(e.target.value)}>
      <option value="">Todas</option>
      {plataformasFiltradas.map(plat => (
        <option key={plat.id} value={plat.id}>{plat.nombre}</option>
      ))}
    </select>
  );
};

export default PlatformFilter;

import React from 'react';

const PlatformFilter = ({ plataformas, selectedPlataforma, onChange }) => {
  return (
    <select value={selectedPlataforma} onChange={(e) => onChange(e.target.value)}>
      <option value="">Todas</option>
      {plataformas.map((plat) => (
        <option key={plat.id} value={plat.id}>
          {plat.nombre}
        </option>
      ))}
    </select>
  );
};

export default PlatformFilter;

import React from 'react';

const FiltroPlataformas = ({ plataformas, plataformaSeleccionada, onChange }) => {
  return (
    <select value={plataformaSeleccionada} onChange={(e) => onChange(e.target.value)}>
      <option value="">Todas</option>
      {plataformas.map((plat) => (
        <option key={plat.id} value={plat.id}>
          {plat.nombre}
        </option>
      ))}
    </select>
  );
};

export default FiltroPlataformas;

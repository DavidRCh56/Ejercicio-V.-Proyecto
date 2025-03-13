import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FiltroPlataformas = ({ plataformas, plataformaSeleccionada, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="select-plataforma-label">Plataforma</InputLabel>
      <Select
        labelId="select-plataforma-label"
        value={plataformaSeleccionada}
        label="Plataforma"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="">
          <em>Todas</em>
        </MenuItem>
        {plataformas.map((plat) => (
          <MenuItem key={plat.id} value={plat.id}>
            {plat.nombre}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FiltroPlataformas;

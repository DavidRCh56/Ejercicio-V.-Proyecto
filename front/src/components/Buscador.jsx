import React from 'react';
import { TextField } from '@mui/material';

const Buscador = ({ terminoBusqueda, onSearchChange }) => {
  return (
    <TextField
      label="Buscar videojuegos..."
      variant="outlined"
      fullWidth
      value={terminoBusqueda}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default Buscador;

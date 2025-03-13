import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const FiltroCategorias = ({ categorias, categoriasSeleccionadas, onToggle }) => {
  return (
    <FormGroup>
      {categorias.map((cat) => (
        <FormControlLabel
          key={cat.id}
          control={
            <Checkbox 
              checked={categoriasSeleccionadas.includes(cat.id)}
              onChange={() => onToggle(cat.id)}
            />
          }
          label={cat.nombre}
        />
      ))}
    </FormGroup>
  );
};

export default FiltroCategorias;

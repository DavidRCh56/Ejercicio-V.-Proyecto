import React from 'react';

const FiltroCategorias = ({ categorias, categoriasSeleccionadas, onToggle }) => {
  return (
    <div className="category-grid">
      {categorias.map((cat) => (
        <label key={cat.id}>
          <input 
            type="checkbox"
            checked={categoriasSeleccionadas.includes(cat.id)}
            onChange={() => onToggle(cat.id)}
          />
          {cat.nombre}
        </label>
      ))}
    </div>
  );
};

export default FiltroCategorias;

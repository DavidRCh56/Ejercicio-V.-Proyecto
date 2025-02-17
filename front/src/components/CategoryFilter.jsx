// components/CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ categorias, selectedCategorias, onToggle }) => {
  return (
    <div className="category-grid">
      {categorias.map(cat => (
        <label key={cat.id}>
          <input 
            type="checkbox"
            checked={selectedCategorias.includes(cat.id)}
            onChange={() => onToggle(cat.id)}
          />
          {cat.nombre}
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter;

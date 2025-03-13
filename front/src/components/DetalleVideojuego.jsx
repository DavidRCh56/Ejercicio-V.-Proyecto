import React from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';

const DetalleVideojuego = ({ videojuego, onClose, onDeleteSuccess }) => {
  if (!videojuego) return null;

  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este videojuego?")) {
      axios.delete(`http://localhost:3000/videojuegos/${videojuego.id}`)
        .then(response => {
          if (response.status === 200) {
            alert("Videojuego eliminado correctamente.");
            if (onDeleteSuccess) onDeleteSuccess();
          } else {
            alert("Error al eliminar el videojuego.");
          }
        })
        .catch(error => {
          console.error("Error al eliminar el videojuego:", error);
          alert("Error al eliminar el videojuego.");
        });
    }
  };

  return (
    <Box sx={{ color: 'black' }}>
      <Button variant="contained" onClick={onClose}>Cerrar</Button>
      <Typography variant="h4" component="h2" gutterBottom>
        {videojuego.nombre}
      </Typography>
      <img src={videojuego.imagen} alt={videojuego.nombre} style={{ maxWidth: '100%' }} />
      <Typography variant="body1" gutterBottom>
        {videojuego.descripcion}
      </Typography>
      <Typography variant="body2">
        <strong>Fecha de lanzamiento:</strong> {videojuego.fechaLanzamiento}
      </Typography>
      <Typography variant="body2">
        <strong>Compañía:</strong> {videojuego.compania}
      </Typography>
      <Typography variant="body2">
        <strong>Plataformas:</strong> {videojuego.plataformas.join(", ")}
      </Typography>
      <Typography variant="body2">
        <strong>Categorías:</strong> {videojuego.categorias.join(", ")}
      </Typography>
      <Typography variant="body2">
        <strong>Precio:</strong> ${videojuego.precio}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <iframe 
          src={videojuego.video} 
          title={videojuego.nombre} 
          frameBorder="0" 
          allowFullScreen
          style={{ width: '100%', height: '315px' }}
        ></iframe>
      </Box>
      <Button variant="outlined" color="error" onClick={handleDelete} sx={{ mt: 2 }}>
        Eliminar videojuego
      </Button>
    </Box>
  );
};

export default DetalleVideojuego;

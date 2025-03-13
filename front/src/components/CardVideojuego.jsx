import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const CardVideojuego = ({ videojuego, onSelect, plataformasDisponibles, categoriasDisponibles }) => {
  const nombresPlataformas = videojuego.plataformas.map((pId) => {
    const plataforma = plataformasDisponibles.find((p) => p.id === pId);
    return plataforma ? plataforma.nombre : pId;
  });

  const nombresCategorias = videojuego.categorias.map((cId) => {
    const categoria = categoriasDisponibles.find((c) => c.id === cId);
    return categoria ? categoria.nombre : cId;
  });

  const descripcionCorta =
    videojuego.descripcion.length > 100
      ? `${videojuego.descripcion.substring(0, 100)}...`
      : videojuego.descripcion;

  return (
    <Card onClick={() => onSelect(videojuego)} sx={{ cursor: 'pointer' }}>
      <CardMedia
        component="img"
        height="140"
        image={videojuego.imagen}
        alt={videojuego.nombre}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {videojuego.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcionCorta}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Plataformas:</strong> {nombresPlataformas.join(", ")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Categorías:</strong> {nombresCategorias.join(", ")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Precio:</strong> ${videojuego.precio}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardVideojuego;

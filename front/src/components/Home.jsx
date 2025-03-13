import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Modal, Box, Typography } from '@mui/material';
import Buscador from './Buscador';
import FiltroCategorias from './FiltroCategorias';
import FiltroPlataformas from './FiltroPlataformas';
import CardVideojuego from './CardVideojuego';
import DetalleVideojuego from './DetalleVideojuego';

const Home = () => {
  const [videojuegos, setVideojuegos] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [plataformaSeleccionada, setPlataformaSeleccionada] = useState('');
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [videojuegoSeleccionado, setVideojuegoSeleccionado] = useState(null);

  const plataformasDisponibles = [
    { id: 1, nombre: 'PC' },
    { id: 2, nombre: 'PS5' },
    { id: 3, nombre: 'Xbox One' },
    { id: 4, nombre: 'Switch' },
    { id: 5, nombre: 'Android' },
    { id: 6, nombre: 'iOS' },
  ];

  const categoriasDisponibles = [
    { id: 1, nombre: 'Lucha' },
    { id: 2, nombre: 'Arcade' },
    { id: 3, nombre: 'Plataformas' },
    { id: 4, nombre: 'Shooter' },
    { id: 5, nombre: 'Estrategia' },
    { id: 6, nombre: 'Simulación' },
    { id: 7, nombre: 'Deporte' },
    { id: 8, nombre: 'Aventura' },
    { id: 9, nombre: 'Rol' },
    { id: 10, nombre: 'Educación' },
    { id: 11, nombre: 'Puzzle' },
  ];

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    axios.get('http://localhost:3000/videojuegos', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(response => {
        setVideojuegos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los videojuegos:', error);
      });
  }, []);

  const videojuegosFiltrados = videojuegos.filter(vj => {
    const coincideCategoria =
      categoriasSeleccionadas.length === 0 ||
      categoriasSeleccionadas.every(catId => vj.categorias.includes(catId));
    const coincidePlataforma =
      plataformaSeleccionada === "" ||
      vj.plataformas.includes(parseInt(plataformaSeleccionada));
    const coincideBusqueda = terminoBusqueda === "" ||
      vj.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      vj.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase());

    return coincideCategoria && coincidePlataforma && coincideBusqueda;
  });

  const handleToggleCategoria = (catId) => {
    if (categoriasSeleccionadas.includes(catId)) {
      setCategoriasSeleccionadas(categoriasSeleccionadas.filter(id => id !== catId));
    } else {
      setCategoriasSeleccionadas([...categoriasSeleccionadas, catId]);
    }
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Lista de Videojuegos
      </Typography>
      <Grid container spacing={2} marginBottom={2}>
        <Grid item xs={12} md={4}>
          <Buscador terminoBusqueda={terminoBusqueda} onSearchChange={setTerminoBusqueda} />
        </Grid>
        <Grid item xs={12} md={4}>
          <FiltroPlataformas 
            plataformas={plataformasDisponibles}
            plataformaSeleccionada={plataformaSeleccionada}
            onChange={setPlataformaSeleccionada}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FiltroCategorias 
            categorias={categoriasDisponibles}
            categoriasSeleccionadas={categoriasSeleccionadas}
            onToggle={handleToggleCategoria}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {videojuegosFiltrados.map((vj) => (
          <Grid item xs={12} sm={6} md={4} key={vj.id}>
            <CardVideojuego 
              videojuego={vj} 
              onSelect={setVideojuegoSeleccionado}
              plataformasDisponibles={plataformasDisponibles}
              categoriasDisponibles={categoriasDisponibles}
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={Boolean(videojuegoSeleccionado)}
        onClose={() => setVideojuegoSeleccionado(null)}
      >
        <Box sx={modalStyle}>
          {videojuegoSeleccionado && (
            <DetalleVideojuego 
              videojuego={videojuegoSeleccionado} 
              onClose={() => setVideojuegoSeleccionado(null)} 
              onDeleteSuccess={() => {
                setVideojuegos(videojuegos.filter(vj => vj.id !== videojuegoSeleccionado.id));
                setVideojuegoSeleccionado(null);
              }}
            />
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default Home;

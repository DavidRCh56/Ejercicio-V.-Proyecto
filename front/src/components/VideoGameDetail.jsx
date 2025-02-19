import React from 'react';

const VideoGameDetail = ({ videojuego, onClose, onDeleteSuccess }) => {
  if (!videojuego) return null;

  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este videojuego?")) {
      fetch(`http://localhost:3000/videojuegos/${videojuego.id}`, {
        method: 'DELETE'
      })
      .then(response => {
        if (response.ok) {
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
    <div className="modal-overlay">
      <div className="modal" style={{ color: 'black' }}>
        <button className="close-btn" onClick={onClose}>Cerrar</button>
        <h2>{videojuego.nombre}</h2>
        <img 
          src={videojuego.imagen} 
          alt={videojuego.nombre} 
          style={{ 
            display: 'block', 
            margin: '0 auto', 
            width: '300px', 
            height: '200px', 
            objectFit: 'cover'
          }} 
        />
        <p>{videojuego.descripcion}</p>
        <p>
          <strong>Fecha de lanzamiento:</strong> {videojuego.fechaLanzamiento}
        </p>
        <p>
          <strong>Compañía:</strong> {videojuego.compania}
        </p>
        <p>
          <strong>Plataformas:</strong> {videojuego.plataformas.join(", ")}
        </p>
        <p>
          <strong>Categorías:</strong> {videojuego.categorias.join(", ")}
        </p>
        <p>
          <strong>Precio:</strong> ${videojuego.precio}
        </p>
        <div className="video-container">
          <iframe 
            src={videojuego.video} 
            title={videojuego.nombre} 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>
        <button className="delete-btn" onClick={handleDelete}>Eliminar videojuego</button>
      </div>
    </div>
  );
};

export default VideoGameDetail;

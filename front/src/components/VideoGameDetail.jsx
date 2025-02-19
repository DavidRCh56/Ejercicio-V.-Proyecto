import React from 'react';

const VideoGameDetail = ({ videojuego, onClose }) => {
  if (!videojuego) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          Cerrar
        </button>
        <h2>{videojuego.nombre}</h2>
        <img src={videojuego.imagen} alt={videojuego.nombre} />
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
      </div>
    </div>
  );
};

export default VideoGameDetail;

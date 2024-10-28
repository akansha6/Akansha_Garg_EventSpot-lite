// src/Modal.js
import React, { useEffect, useState } from 'react';

const Modal = ({ event, closeModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Show the modal with animation

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % event.images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [event.images]);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className={`modal-content ${isVisible ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
        <h2>{event.name}</h2>
        <div className="image-container">
          {event.images && event.images.length > 0 ? (
            event.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={event.name}
                className={index === currentImageIndex ? 'active' : ''}
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
        <p>{event.description}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

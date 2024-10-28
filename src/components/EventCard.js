// src/EventCard.js
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const EventCard = ({ event, openModal }) => {
  return (
    <div className="event-card" onClick={() => openModal(event)}>
      <img src={event.image} alt={event.name} />
      <h3>{event.name}</h3>
      <p>
        <FontAwesomeIcon icon={faCalendarAlt} /> {event.date}
      </p>
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> {event.location}
      </p>
    </div>
  );
};

export default EventCard;

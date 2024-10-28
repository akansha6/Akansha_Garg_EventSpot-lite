// src/EventList.js
import React, { useState } from 'react';
import EventCard from './EventCard';
import Modal from './Modal';
import data from './data.json';

const EventList = () => {
  const [events] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter events based on name or location
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const openModal = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="event-list">
      <input
        type="text"
        placeholder="Search by event name or location..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="event-cards">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <EventCard key={event.id} event={event} openModal={openModal} />
          ))
        ) : (
          <p>No events found.</p>  
        )}
      </div>
      {selectedEvent && <Modal event={selectedEvent} closeModal={closeModal} />}
    </div>
  );
};

export default EventList;

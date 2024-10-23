import React, { useState } from 'react';

const CreateEvent = () => {
  const [event, setEvent] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    capacity: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Created:', event);
    // Add logic to save event to the database
  };

  return (
    <div>
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <label>Event Title:</label>
        <input
          type="text"
          name="title"
          value={event.title}
          onChange={handleChange}
          required
        />

        <label>Event Description:</label>
        <textarea
          name="description"
          value={event.description}
          onChange={handleChange}
          required
        ></textarea>

        <label>Event Date:</label>
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
        />

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={event.location}
          onChange={handleChange}
          required
        />

        <label>Capacity:</label>
        <input
          type="number"
          name="capacity"
          value={event.capacity}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;

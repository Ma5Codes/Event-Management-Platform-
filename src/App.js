import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import BrowseEvents from './pages/BrowseEvents';
import './styles.css';  // Global CSS for the app

function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a>
          <a href="/create-event">Create Event</a>
          <a href="/browse-events">Browse Events</a>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/browse-events" element={<BrowseEvents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

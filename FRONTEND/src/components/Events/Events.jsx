import React from 'react';
import { Camera, Calendar, ImageIcon } from 'lucide-react';
import EventCard from './EventCard';
import { schoolInfo } from '../../data/schoolData';
import './Events.css';

const Events = () => {
  return (
    <div className="events-container">
      <header>
        <h2>School Events &amp; Activities</h2>
        <p>Celebrating our students' achievements and memorable moments</p>
      </header>

      {schoolInfo.events.length === 0 ? (
        <section className="coming-soon">
          <h3>Events Gallery Coming Soon</h3>
          <p>
            We'll be sharing photos and highlights from our school events, competitions,
            field trips, and special occasions here.
          </p>

          <ul className="event-types">
            <li><span role="img" aria-label="trophy">🏆</span> Competitions</li>
            <li><span role="img" aria-label="theatre">🎭</span> Performances</li>
            <li><span role="img" aria-label="bus">🚌</span> Field Trips</li>
            <li><span role="img" aria-label="party">🎉</span> Celebrations</li>
            <li><span role="img" aria-label="soccer">⚽</span> Sports Days</li>
            <li><span role="img" aria-label="graduation">🎓</span> Graduations</li>
          </ul>

          <p>Stay tuned for upcoming events and photo galleries!</p>
        </section>
      ) : (
        <section className="events-list">
          {schoolInfo.events.map((event) => (
            <EventCard key={event.id || event.title} event={event} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Events;

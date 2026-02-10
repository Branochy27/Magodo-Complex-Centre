import React from 'react';
import { Calendar } from 'lucide-react';
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
          <div className="events-grid">
            {schoolInfo.events.map((event) => (
              <article key={event.id || event.Title || event.title} className="event-card">
                <div className="event-image">
                  {event.image ? (
                    <img src={event.image} alt={event.Title || event.title || 'Event image'} />
                  ) : (
                    <div className="event-placeholder">
                      <span>📷</span>
                      <p>No image</p>
                    </div>
                  )}
                </div>
                <div className="event-content">
                  <div className="event-date"><Calendar size={16} /> {event.date || event.Date || ''}</div>
                  <h3 className="event-title">{event.Title || event.title || 'Event'}</h3>
                  <p className="event-description">{event.Description || event.description || ''}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Events;

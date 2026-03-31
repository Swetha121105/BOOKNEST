import React from "react";
import "./Events.css";

const MyEvents = ({ myEvents }) => {
  return (
    <div className="events-container">
      <h2 className="page-title">🎉 My Events</h2>

      {myEvents.length === 0 ? (
        <p className="no-events">⚠️ You haven't joined any events yet.</p>
      ) : (
        <div className="events-grid">
          {myEvents.map((event) => {
            const eventDate = event.date ? new Date(event.date) : null;
            const day = eventDate ? eventDate.getDate() : null;
            const monthShort = eventDate ? eventDate.toLocaleString("default", { month: "short" }) : null;

            return (
              <div key={event._id} className="event-card square-card">
                {eventDate && (
                  <div className="date-strip">
                    <span className="strip-day">{day}</span>
                    <span className="strip-month">{monthShort}</span>
                  </div>
                )}
                <div className="event-content">
                  <span className="joined-badge">✅ Joined</span>
                  <h3>{event.title}</h3>
                  <p className="event-desc">{event.description}</p>
                  {event.location && <p className="event-location">📍 <strong>{event.location}</strong></p>}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyEvents;

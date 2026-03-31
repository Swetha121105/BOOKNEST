import React, { useEffect, useState } from "react";
import API from "../api/api";
import "./Events.css";

const Events = ({ myEvents, setMyEvents }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [month, setMonth] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await API.get("/events");
        setEvents(data);
        setFilteredEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, []);

  const applyFilters = () => {
    let filtered = [...events];
    if (month !== "All") {
      filtered = filtered.filter((event) => {
        if (!event.date) return false;
        const eventMonth = new Date(event.date).toLocaleString("default", { month: "long" });
        return eventMonth === month;
      });
    }
    if (search.trim() !== "") {
      filtered = filtered.filter(
        (event) =>
          (event.title && event.title.toLowerCase().includes(search.toLowerCase())) ||
          (event.description && event.description.toLowerCase().includes(search.toLowerCase()))
      );
    }
    setFilteredEvents(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [month, search, events]);

  const handleJoin = (event) => {
    const alreadyJoined = myEvents.some((e) => e._id === event._id);
    if (!alreadyJoined) {
      const updated = [...myEvents, event];
      setMyEvents(updated);
      alert(`✅ You joined "${event.title}" successfully!`);
    } else {
      alert(`⚠️ You already joined "${event.title}".`);
    }
  };

  const months = [
    "All", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="events-container">
      <h2 className="page-title">📅 Upcoming Events</h2>

      {/* Filters */}
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="month-select">Month: </label>
          <select id="month-select" value={month} onChange={(e) => setMonth(e.target.value)}>
            {months.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div className="filter-group search-group">
          <input
            type="text"
            placeholder="🔍 Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Event Cards */}
      <div className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => {
            const eventDate = event.date ? new Date(event.date) : null;
            const day = eventDate ? eventDate.getDate() : null;
            const monthShort = eventDate ? eventDate.toLocaleString("default", { month: "short" }) : null;
            const joined = myEvents.some((e) => e._id === event._id);

            return (
              <div key={event._id} className="event-card square-card">
                {eventDate && (
                  <div className="date-strip">
                    <span className="strip-day">{day}</span>
                    <span className="strip-month">{monthShort}</span>
                  </div>
                )}

                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p className="event-desc">{event.description}</p>
                  {event.location && <p className="event-location">📍 <strong>{event.location}</strong></p>}

                  <button
                    className={`join-btn ${joined ? "joined" : ""}`}
                    onClick={() => handleJoin(event)}
                    disabled={joined}
                  >
                    {joined ? "✅ Joined" : "Join Event"}
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="no-events">⚠️ No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Events;

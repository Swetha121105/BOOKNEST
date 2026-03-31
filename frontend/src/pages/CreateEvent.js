import React, { useState } from "react";
import API from "../api/api"; // your axios instance
import "./Events.css";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !date) {
      setMessage("⚠️ Fill in Title, Description, and Date.");
      return;
    }

    try {
      const { data } = await API.post("/events", { title, description, date, location });
      setMessage(`✅ Event "${data.title}" created successfully!`);
      setTitle(""); setDescription(""); setDate(""); setLocation("");
    } catch (err) {
      console.error(err);
      setMessage("❌ Error creating event.");
    }
  };

  return (
    <div className="events-container">
      <h2>➕ Create Event</h2>
      {message && <p>{message}</p>}
      <form className="event-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title*" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Description*" value={description} onChange={e => setDescription(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;

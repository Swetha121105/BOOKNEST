import React, { useState } from "react";
import API from "../api/api";

const AdminEvents = () => {
  const [form, setForm] = useState({ title: "", description: "", date: "", location: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/events", form);
    alert("Event created!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Event</h2>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="date" placeholder="Date" onChange={handleChange} />
      <input name="location" placeholder="Location" onChange={handleChange} />
      <button type="submit">Create</button>
    </form>
  );
};

export default AdminEvents;

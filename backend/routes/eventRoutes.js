import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// @desc   Get all events
// @route  GET /api/events
// @access Public
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No events available" });
    }
    res.json(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ message: "Server error while fetching events" });
  }
});

// @desc   Create new event
// @route  POST /api/events
// @access Public (make private if needed)
router.post("/events", async (req, res) => {
  try {
    const { title, description, date } = req.body;

    if (!title || !description || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEvent = new Event({ title, description, date });
    await newEvent.save();

    res.status(201).json(newEvent);
  } catch (err) {
    console.error("Error creating event:", err);
    res.status(500).json({ message: "Server error while creating event" });
  }
});

export default router;

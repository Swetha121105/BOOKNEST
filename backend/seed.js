import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "./models/Event.js";  // make sure Event.js exists in models folder

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const events = [
  {
    title: "Book Reading Session",
    description: "Join us for a community book reading event.",
    date: "2025-10-25",
  },
  {
    title: "Tech Talk: Future of AI",
    description: "An engaging session on AI trends and applications.",
    date: "2025-09-02",
  },
  {
    title: "Creative Writing Workshop",
    description: "Improve your storytelling and writing skills.",
    date: "2025-09-10",
  },
  {
    title: "Music Fest 2025",
    description: "An evening of live performances and fun.",
    date: "2025-12-15",
  },
  {
    title: "Art & Craft Exhibition",
    description: "Showcase of paintings, crafts, and creative works.",
    date: "2025-09-20",
  },
  {
    title: "Startup Pitch Day",
    description: "Local entrepreneurs pitching innovative ideas.",
    date: "2025-10-25",
  },
];

const seedDB = async () => {
  try {
    await Event.deleteMany(); // clear old events
    await Event.insertMany(events);
    console.log("✅ 6 Events Seeded Successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error seeding events:", err);
  }
};

seedDB();

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import AdminEvents from "./pages/AdminEvents";
import MyEvents from "./pages/MyEvents";
import CreateEvent from "./pages/CreateEvent";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [myEvents, setMyEvents] = useState(() => {
    return JSON.parse(localStorage.getItem("myEvents") || "[]");
  });

  const handleSetMyEvents = (events) => {
    setMyEvents(events);
    localStorage.setItem("myEvents", JSON.stringify(events));
  };

  return (
    <AuthProvider>
      <Navbar myEvents={myEvents} />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Events Page */}
        <Route
          path="/events"
          element={<Events myEvents={myEvents} setMyEvents={handleSetMyEvents} />}
        />

        {/* My Events Page */}
        <Route path="/my-events" element={<MyEvents myEvents={myEvents} />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <AdminEvents />
            </ProtectedRoute>
          }
        />

       
        <Route
          path="/create-event"
          element={
            <ProtectedRoute adminOnly>
              <CreateEvent />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;

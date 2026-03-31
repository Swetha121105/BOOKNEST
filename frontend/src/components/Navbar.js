

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // make sure this exists
import "./Navbar.css";

function Navbar({ myEvents }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">📋 EVENTS NEST</div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/my-events">My Events </Link></li>

        {/* Admin-only links */}
        {user && user.role === "admin" && (
          <>
            <li><Link to="/admin">Admin Events</Link></li>
            <li><Link to="/create-event">➕ Create Event</Link></li>
          </>
        )}

        {/* Auth Links */}
        {!user ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        ) : (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

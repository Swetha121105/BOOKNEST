
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>🎉 Welcome to EventsNest  🎉</h1>
      <p className="home-subtitle">
        Discover and join exciting events happening around you.  
        Connect, learn, and have fun with the community!
      </p>

      <div className="home-cards">
        <div className="home-card">
          <h3>📚 Book Club Meetups</h3>
          <p>Discuss your favorite books with fellow readers.</p>
        </div>
        <div className="home-card">
          <h3>🎶 Music Nights</h3>
          <p>Enjoy live performances and open mic sessions.</p>
        </div>
        <div className="home-card">
          <h3>💡 Tech Talks</h3>
          <p>Learn the latest trends from industry experts.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">

          {/* Contact Section */}
          <div className="footer-section contact">
            <h4>Contact Us</h4>
            <p>Email: info@eventnest.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: 125/9, North street, Chennai, India</p>
          </div>

          {/* About Us Section */}
          <div className="footer-section about">
            <h4>About Us</h4>
            <p>
              EventNest Events is a platform to discover and join amazing events. 
              We aim to connect people, promote learning, and create memorable experiences 
              through workshops, meetups, and community activities.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/events">Events</a></li>
              <li><a href="/my-events">My Events</a></li>
              <li><a href="/signup">Sign Up</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>

       
          

        </div>

        <div className="footer-bottom">
          <p>© 2025 EventNest. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

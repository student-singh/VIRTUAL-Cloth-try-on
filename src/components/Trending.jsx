import React from "react";
import "../styles/stylish.css";

function Trending() {
  return (
    <section className="trending-section">
      <div className="container">
        <h2>Trending Looks</h2>
        <div className="looks-container">
          <div className="look-card">
            <img src="/assets/images/boy2 logo.jpeg" alt="Look 1" />
            <p>Streetwear Vibes</p>
          </div>
          <div className="look-card">
            <img src="/assets/images/boylogo.jpeg" alt="Look 2" />
            <p>Smart Casuals</p>
          </div>
          <div className="look-card">
            <img src="/assets/images/girlslogo.jpeg" alt="Look 3" />
            <p>Elegant Chic</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
import React from "react";
import "../styles/stylish.css";

function About() {
  return (
    <section className="about-contact">
      <div className="main-wrapper">
        <div className="left-section">
          <h1>Virtual Closet your personalized fashion guide</h1>
          <p>
            To empower individuals with clothing suggestions that perfectly
            match their unique skin tone and body type...
          </p>
          <p>Your comfort, your body type, your skin tone — all matter here...</p>
        </div>

        <div className="right-section">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
import React from "react";
import "../styles/stylish.css";

function Home() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
        rel="stylesheet"
      />
      <section className="carousel-section">
        <section className="home-thought">
          <div className="thought-text">
            <h1>
              Style that fits you perfectly – <span>Virtual Closet</span>
            </h1>
            <p>Your personalized fashion guide</p>
          </div>
        </section>

        <div className="carousel">
          <div className="carousel-track">
            <img
              src="/assets/images/download.jpeg"
              alt="Fashion Look 1"
              className="carousel-image"
            />
            <img
              src="/assets/images/closetkkkkk.jpeg"
              alt="Fashion Look 2"
              className="carousel-image"
            />
            <img
              src="/assets/images/VirtualFit - Virtual Try On Spatial UI Concept.jpeg"
              alt="Fashion Look 3"
              className="carousel-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
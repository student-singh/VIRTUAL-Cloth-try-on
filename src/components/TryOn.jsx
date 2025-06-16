import React from "react";
import "../styles/stylish.css";

function TryOn() {
  return (
    <section className="virtual-tryon-section">
      <section id="virtual-tryon">
        <div className="container">
          <h2>Virtual Try-On</h2>
          <p>Choose how you'd like to try on outfits virtually.</p>

          <div className="tryon-options">
            <div className="option-box">
              <h3>Upload an Image</h3>
              {/* Anchor link to the Preference section */}
              <a href="#preference" id="upload-btn">Upload Button</a>
            </div>

            <div className="option-box">
              <h3>Use Camera</h3>
              <button id="openCamera" className="submit-btn">
                Open Camera
              </button>
              <video id="video" autoPlay style={{ display: "none" }}></video>
              <button
                id="captureImage"
                className="submit-btn"
                style={{ display: "none" }}
              >
                Capture
              </button>
              <canvas id="canvas" style={{ display: "none" }}></canvas>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default TryOn;
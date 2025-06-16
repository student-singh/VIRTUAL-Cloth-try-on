import React, { useState } from "react";
import "../styles/stylish.css";

function Preference() {
  // State to store user preferences
  const [preferences, setPreferences] = useState({
    height: "",
    weight: "",
    bodyType: "",
    skinTone: "",
  });

  // Handle changes in the dropdowns
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Preferences:");
    console.log("Height:", preferences.height);
    console.log("Weight:", preferences.weight);
    console.log("Body Type:", preferences.bodyType);
    console.log("Skin Tone:", preferences.skinTone);

    // Reset the form fields
    setPreferences({
      height: "",
      weight: "",
      bodyType: "",
      skinTone: "",
    });
  };

  return (
    <div className="preference-wrapper">
      <div className="preference-container">
        <h2>Choose Your Preference</h2>

        <div className="image-frame">
          <div className="image-box">
            <img src="/assets/images/for him.jpeg" alt="For Him" />
            <a
              href="https://827b47b1b2cb2ed343.gradio.live/?__theme=light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button">For Him</button>
            </a>
          </div>
          <div className="image-box">
            <img src="/assets/images/for her.jpeg" alt="For Her" />
            <a
              href="https://827b47b1b2cb2ed343.gradio.live/?__theme=light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button">For Her</button>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="dropdowns">
          <label htmlFor="height">Height</label>
          <select
            id="height"
            value={preferences.height}
            onChange={handleChange}
          >
            <option value="">Select Height</option>
            <option value="short">Short</option>
            <option value="average">Average</option>
            <option value="tall">Tall</option>
          </select>

          <label htmlFor="weight">Weight</label>
          <select
            id="weight"
            value={preferences.weight}
            onChange={handleChange}
          >
            <option value="">Select Weight</option>
            <option value="slim">Slim</option>
            <option value="average">Average</option>
            <option value="heavy">Heavy</option>
          </select>

          <label htmlFor="bodyType">Body Type</label>
          <select
            id="bodyType"
            value={preferences.bodyType}
            onChange={handleChange}
          >
            <option value="">Select Body Type</option>
            <option value="hourglass">Hourglass</option>
            <option value="pear">Pear</option>
            <option value="rectangle">Rectangle</option>
            <option value="triangle">Triangle</option>
          </select>

          <label htmlFor="skinTone">Skin Tone</label>
          <select
            id="skinTone"
            value={preferences.skinTone}
            onChange={handleChange}
          >
            <option value="">Select Skin Tone</option>
            <option value="fair">Fair</option>
            <option value="wheatish">Wheatish</option>
            <option value="dusky">Dusky</option>
            <option value="dark">Dark</option>
          </select>

          <div>
            <button type="submit" className="submit-btn-preference">
              Submit Preferences
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Preference;
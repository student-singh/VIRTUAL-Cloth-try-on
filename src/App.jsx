import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Preference from "./components/Preference";
import TryOn from "./components/TryOn";
import Trending from "./components/Trending";
import About from "./components/About";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="preference">
        <Preference />
      </div>
      <div id="tryon">
        <TryOn />
      </div>
      <div id="trending">
        <Trending />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="login">
        <Login />
      </div>
      {/* Remove the iframe for Rent */}
    </>
  );
}

export default App;
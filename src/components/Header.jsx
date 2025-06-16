import React from "react";
import "../styles/stylish.css";
import Login from "./Login"; // 👈 Make sure this points to your actual Login component
import ReactDOM from "react-dom/client";

function Header() {
  const openLoginInNewTab = () => {
    const newWindow = window.open("", "_blank", "width=600,height=800");

    if (newWindow) {
      // Create a container div in new window
      newWindow.document.write("<div id='login-root'></div>");
      newWindow.document.title = "Login / Sign Up";

      // Add some basic styles (optional)
      const style = newWindow.document.createElement("style");
      style.textContent = `
        body { margin: 0; font-family: Arial, sans-serif; padding: 20px; }
      `;
      newWindow.document.head.appendChild(style);

      // Wait for the new window's DOM to be ready
      const interval = setInterval(() => {
        const mountNode = newWindow.document.getElementById("login-root");
        if (mountNode) {
          clearInterval(interval);
          const root = ReactDOM.createRoot(mountNode);
          root.render(<Login />);
        }
      }, 10);
    } else {
      alert("Pop-up blocked! Please allow pop-ups for this site.");
    }
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src="../assets/images/Logo_VC.jpeg" alt="Virtual Closet Logo" />
        </div>
        <nav>
          <a href="#home" className="nav-btn">Home</a>
          <a href="#preference" className="nav-btn">Your Preference</a>
          <a href="#tryon" className="nav-btn">Virtual Try-On</a>
          <a href="#trending" className="nav-btn">Trending</a>
          <a href="#about" className="nav-btn">About & Contact</a>

          {/* ✅ New Login/Sign up opens Login component in new tab */}
          <a
            href="#"
            className="nav-btn"
            onClick={(e) => {
              e.preventDefault();
              openLoginInNewTab();
            }}
          >
            Login/Sign up
          </a>

          {/* Rent button still opens external app */}
          <a
            href="http://localhost:3000"
            className="nav-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rent
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

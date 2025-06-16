import React, { useState } from "react";
import "../styles/stylish.css";

function Login() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(isLoginForm ? "Login form submitted" : "Signup form submitted");
  };

  return (
    <section className="login-section">
      <section id="login-signup">
        <div className="container" id="form-container">
          {isLoginForm ? (
            <form id="login-form" onSubmit={handleFormSubmit}>
              <h2>Login</h2>
              <label htmlFor="login-username">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                id="login-username"
                required
              />

              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                id="login-password"
                required
              />

              <button type="submit" className="submit-btn">
                Login
              </button>

              <p className="form-toggle-text">
                New user?{" "}
                <a href="#" id="show-signup" onClick={toggleForm}>
                  Sign up
                </a>
              </p>

              <div className="google-btn">
                <button type="button" onClick={() => console.log("Gmail login clicked")}>
                  <img
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                    alt="Gmail Logo"
                    style={{ verticalAlign: "middle", marginRight: "8px" }}
                  />
                  Login with Gmail
                </button>
              </div>
            </form>
          ) : (
            <form id="signup-form" onSubmit={handleFormSubmit}>
              <h2>Sign Up</h2>
              <label htmlFor="signup-username">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                id="signup-username"
                required
              />

              <label htmlFor="signup-password">Create new Password</label>
              <input
                type="password"
                placeholder="Enter password"
                id="signup-password"
                required
              />

              <label htmlFor="signup-confirm">Confirm new Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                id="signup-confirm"
                required
              />

              <button type="submit" className="submit-btn">
                Sign Up
              </button>

              <p className="form-toggle-text">
                Already registered?{" "}
                <a href="#" id="show-login" onClick={toggleForm}>
                  Log in
                </a>
              </p>

              <div className="google-btn">
                <button type="button" onClick={() => console.log("Gmail signup clicked")}>
                  <img
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                    alt="Gmail Logo"
                    style={{ verticalAlign: "middle", marginRight: "8px" }}
                  />
                  Sign up with Gmail
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </section>
  );
}

export default Login;
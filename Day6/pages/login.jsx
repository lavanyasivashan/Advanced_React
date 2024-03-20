import React, { useRef, useState } from "react";
import "../assets/css/login.css";
import { Link } from "react-router-dom";

function Login() {
  const username = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredUsername = username.current.value.trim();
    const enteredPassword = password.current.value.trim();

    if (enteredUsername === "admin" && enteredPassword === "admin123") {
      // Redirect to /d
      window.location.href = "/d";
    } else {
      // Redirect to /home or show error message
      if (enteredUsername !== "" && enteredPassword.length === 8) {
        // Redirect to /home
        window.location.href = "/home";
      } else {
        // Show error message
        window.location.href = "/home";
      }
    }
  };

  return (
    <div className="a">
      <div className="login-page">
        <div className="login1">
          <center>
            <h2>LOGIN FOR A RIDE</h2>
          </center>
          <form className="form-login1" onSubmit={handleSubmit}>
            <div className="input-email">
              <input
                type="text"
                ref={username}
                placeholder="Enter your Username"
                required
                autoComplete="off"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
            <br />
            <div className="input-password">
              <input
                type="password"
                ref={password}
                minLength={8}
                maxLength={16}
                placeholder="Enter your Password"
                required
                autoComplete="off"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="button-container">
              <button type="submit">
                LOGIN
              </button>
            </div>
            <h5>OR</h5>
            <div className="button-container">
              <Link to="/register">
                <button type="button">
                  REGISTER
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useRef, useState } from "react";
import "../assets/css/login.css";
import { Link } from "react-router-dom";

function Login() {
  const username = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = () => {
    const isUsernameValid = username.current.value.trim() !== "";
    const isPasswordValid = password.current.value.trim().length === 8;
    setIsFormValid(isUsernameValid && isPasswordValid);
    setErrorMessage(""); // Reset error message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUsernameValid = username.current.value.trim() !== "";
    const isPasswordValid = password.current.value.trim().length === 8;

    if (!isUsernameValid || !isPasswordValid) {
      setErrorMessage("Please fill in both username and password correctly.");
      return; // Exit the function if form is not valid
    }

    alert(username.current.value);
    console.log(password.current.value);
    // Redirect to dashboard
    // setRedirectToDashboard(true); // You can add redirection logic here
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className='button-container'>
              <Link to="/home">
                <button type="submit" disabled={!isFormValid}>
                  LOGIN
                </button>
              </Link>
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

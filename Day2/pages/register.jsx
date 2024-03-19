import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/register.css";

function Register() {
  const username = useRef(null);
  const mobile = useRef(null);
  const password = useRef(null);
  const confirmpassword = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const sub = (e) => {
    e.preventDefault();

    const usernameValue = username.current.value.trim();
    const mobileValue = mobile.current.value.trim();
    const passwordValue = password.current.value.trim();
    const confirmPasswordValue = confirmpassword.current.value.trim();

    if (!usernameValue || !mobileValue || !passwordValue || !confirmPasswordValue) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (passwordValue !== confirmPasswordValue) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Validation passed, you can proceed with registration logic here
    alert("Registration successful!"); // Replace this with actual registration logic

    // Clear form fields after successful registration
    username.current.value = "";
    mobile.current.value = "";
    password.current.value = "";
    confirmpassword.current.value = "";
    setErrorMessage("");
  };

  return (
    <div className="aa">
      <div className="register-page1">
        <div className="register1">
          <center>
            <h2 style={{ fontSize: "27px" }}>New? Join Us Now</h2>
          </center>
          <form className="form-register1" onSubmit={sub}>
            <br />
            <div className="register-input-email">
              <input
                type="text"
                ref={username}
                placeholder="Enter your Username / Email"
                required
              />
            </div>
            <br />
            <div className="register-input-mobile">
              <input
                type="text"
                ref={mobile}
                placeholder="Enter your Mobile Number"
                required
              />
            </div>
            <br />
            <div className="register-input-password">
              <input
                type="password"
                ref={password}
                minLength={8}
                maxLength={16}
                placeholder="Enter your Password"
                required
              />
            </div>
            <br />
            <div className="register-input-password">
              <input
                type="password"
                ref={confirmpassword}
                minLength={8}
                maxLength={16}
                placeholder="Re-Enter your Password"
                required
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="button-containers">
            <Link to="/home">REGISTER</Link>
            </div>
            <h5>OR</h5>
            <div className="button-containers">
              <Link to="/">Already have an account? Click Here..</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

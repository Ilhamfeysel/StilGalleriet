import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (user) return user;
  };

  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        <div className="input-field">
          <label>FirstName</label>
          <input
            type="text"
            placeholder="Your First Name?"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label>LastName</label>
          <input
            type="text"
            placeholder="Your Last Name?"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label>Username</label>
          <input
            type="text"
            placeholder="Choose e Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Your Email?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Choose a password?"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="signin-button">
          {" "}
          Sign In
        </button>
      </form>
    </div>
  );
};
export default Register;

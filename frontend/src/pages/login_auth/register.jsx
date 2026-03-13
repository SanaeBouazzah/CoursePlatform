import { useState } from "react";
import "./style_login.css";
import { useNavigate, Link } from "react-router-dom";
import API from "../../services/ApiHelper";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password) {
      setError("Please fill all fields.");
      return;
    }

    try {
      const response = await API.post("/auth/register", { name, email, password, role });
      const data = response.data;
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setSuccess("Registration successful. Redirecting...");
      setTimeout(() => navigate("/acceuil"), 500);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="wrapper_login">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h2>Create Account</h2>
            <p>Register to access your space</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-wrapper">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <label htmlFor="role">Role</label>
                <select id="role" className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

            <button type="submit" className="login-btn btn">Register</button>
          </form>

          <div className="form-footer">
            Already registered? <Link to="/auth/login">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

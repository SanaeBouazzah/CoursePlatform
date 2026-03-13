import { useState } from "react";
import "./style_login.css";
import { useNavigate, Link } from "react-router-dom";
import API from "../../services/ApiHelper";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please provide both email and password.");
      return;
    }

    try {
      const response = await API.post("/auth/login", { email, password });
      const data = response.data;

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccess(true);
      setTimeout(() => navigate("/acceuil"), 350);
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed.");
    }
  };

  return (
    <div className="wrapper_login">
      <div className="login-container">
        <div className="login-card">
          <div className="auth-header">
            <Link to="/" className="back-link">← Retour à l'accueil</Link>
          </div>

          <div className="login-header">
            <h2>Sign in</h2>
            <p>Use your account to access the platform</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">Login successful. Redirecting...</div>}

            <button type="submit" className="login-btn btn">Sign In</button>
          </form>

          <div className="form-footer">
            Don&apos;t have an account? <Link to="/auth/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

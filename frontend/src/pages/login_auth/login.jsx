import { useState } from "react";
import "./style_login.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset errors
        setEmailError("");
        setPasswordError("");

        let valid = true;
        if (!email) { setEmailError("Email is required"); valid = false; }
        if (!password) { setPasswordError("Password is required"); valid = false; }
        if (!valid) return;

        try {
            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);

                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);   // 👈 ADD THIS

                navigate("/acceuil");
            }
            else {
                setPasswordError(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            setPasswordError("Something went wrong. Try again.");
        }
    };

    return (
        <div className="wrapper_login">
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <h2>Welcome Back</h2>
                        <p>Sign in to your account</p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <div className="input-wrapper">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="email">Email Address</label>
                                <span className="focus-border"></span>
                            </div>
                            {emailError && <span className="error-message">{emailError}</span>}
                        </div>

                        <div className="form-group">
                            <div className="input-wrapper password-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    required
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="password">Password</label>
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label="Toggle password visibility"
                                >
                                    <span className="eye-icon">{showPassword ? "👁️" : "🙈"}</span>
                                </button>
                                <span className="focus-border"></span>
                            </div>
                            {passwordError && (
                                <span className="error-message">{passwordError}</span>
                            )}
                        </div>

                        <div className="form-options">
                            <label className="remember-wrapper">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    name="remember"
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                />
                                <span className="checkbox-label">
                                    <span className="checkmark"></span>
                                    Remember me
                                </span>
                            </label>
                            <a href="#" className="forgot-password">
                                Forgot password?
                            </a>
                        </div>

                        <button type="submit" className="login-btn btn">
                            <span className="btn-text">Sign In</span>
                            <span className="btn-loader"></span>
                        </button>
                    </form>

                    <div className="divider">
                        <span>or continue with</span>
                    </div>

                    <div className="social-login">
                        <button type="button" className="social-btn google-btn">
                            <span className="social-icon google-icon"></span>
                            Google
                        </button>
                        <button type="button" className="social-btn github-btn">
                            <span className="social-icon github-icon"></span>
                            GitHub
                        </button>
                    </div>


                    {success && (
                        <div className="success-message" id="successMessage">
                            <div className="success-icon">✓</div>
                            <h3>Login Successful!</h3>
                            <p>Redirecting to your dashboard...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
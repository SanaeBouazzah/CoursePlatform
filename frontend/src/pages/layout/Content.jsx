import React, { useState } from "react";
import Sidebar from "./../../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";

const CoursesPage = () => {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  return (
    <>
      <header className="topbar">
        <div className="topbar-left">
          <span className="app-title">Plateforme Universitaire</span>
          <span className="app-subtitle">Espace privé</span>
        </div>
        <div className="topbar-right">
          <div className="profile-section" onClick={() => setProfileOpen((prev) => !prev)}>
            <div className="avatar">{(user?.name || "U").charAt(0).toUpperCase()}</div>
            <div className="profile-name">{user?.name || "Utilisateur"}</div>
            <div className="dropdown-arrow">▾</div>
          </div>
          {profileOpen && (
            <div className="profile-dropdown">
              <button type="button" className="menu-item" onClick={() => navigate("/auth/login")}>Edit Profile</button>
              <button type="button" className="menu-item" onClick={handleLogout}>Disconnect</button>
            </div>
          )}
        </div>
      </header>

      <div className="d-flex justify-content-start">
        <Sidebar />
        <div className="content_wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
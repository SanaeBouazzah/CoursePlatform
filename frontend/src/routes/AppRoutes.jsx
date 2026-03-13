import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login_auth/login";
import Register from "../pages/login_auth/register";
import ProtectedRoute from "../ProtectedRoute.jsx";
import Dashboard from "../pages/dashboard/DashboardT";
import Courses from "../pages/dashboard/Courses";
import Exercices from "../pages/dashboard/Exercices";
import Ateliers from "../pages/dashboard/Ateliers";
import OrganisationAcademiques from "../pages/dashboard/OrganisationAcademique";
import Examens from "../pages/dashboard/Examens";
import Calendrier from "../pages/dashboard/Calendrier";
import Projets from "../pages/dashboard/Projets";
import Communication from "../pages/dashboard/Communication";
import Content from "../pages/layout/Content";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

      <Route
        path="/acceuil"
        element={
          <ProtectedRoute>
            <Content />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="resources_pedagogique/cours" element={<Courses />} />
        <Route path="resources_pedagogique/exercices" element={<Exercices />} />
        <Route path="resources_pedagogique/ateliers_pratiques" element={<Ateliers />} />
        <Route path="organisation_academiques/organisation_academiques" element={<OrganisationAcademiques />} />
        <Route path="organisation_academiques/examens" element={<Examens />} />
        <Route path="organisation_academiques/calendrier" element={<Calendrier />} />
        <Route path="projets" element={<Projets />} />
        <Route path="communication" element={<Communication />} />
      </Route>
    </Routes>
  );
}

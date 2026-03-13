import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const location = useLocation();
    const [openResources, setOpenResources] = useState(false);
    const [openResources2, setOpenResources2] = useState(false);

    return (
        <div className="border-end sidebar" style={{ width: "30%", minHeight: "100vh" }}>
            <div className="d-flex justify-content-start align-items-center x-logo">
                <div className="logoDash"><i class="fa-solid fa-book-open"></i></div>
                <div className="p-3 title_name">
                    <h5>Plateforme</h5>
                    <small>Universitaire</small>
                </div>
            </div>

            <ul className="list-unstyled p-3 list">

                <li className="mb-2">
                    <Link to="/acceuil"
                        className={`w-100 text-start ${location.pathname === "/acceuil" ? "active-menu" : ""}`}>
                        <i className="fa-solid fa-house-chimney"></i> Accueil
                    </Link>
                </li>

                <li className="mb-2">
                    <button
                        className={`w-100 text-start ${location.pathname === "/acceuil/resources_pedagogique/cours" ||
                            location.pathname === "/acceuil/resources_pedagogique/exercices" ||
                            location.pathname === "/acceuil/resources_pedagogique/ateliers_pratiques"
                            ? "active-menu"
                            : ""
                            }`}
                        onClick={() => setOpenResources(!openResources)}>
                        <div className="d-flex justify-content-between align-items-center open-btn">
                            <div> <i className="fa-solid fa-book"></i> <span>Ressources Pedagogique</span></div>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </button>

                    {openResources && (
                        <ul className="list-unstyled ms-3 mt-2 border-start rounded-2 list2">

                            <li className="">
                                <Link
                                    className={`text-decoration-none ${location.pathname === "/acceuil/resources_pedagogique/cours" ? "active-menu" : ""}`}
                                    to="/acceuil/resources_pedagogique/cours"
                                >
                                    📄 Cours & Syllabus
                                </Link>
                            </li>

                            <li className="">
                                <Link
                                    className={`text-decoration-none ${location.pathname === "/acceuil/resources_pedagogique/exercices" ? "active-menu" : ""}`}
                                    to="/acceuil/resources_pedagogique/exercices"
                                >
                                    📝 Exercices (TD/TP)
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={`text-decoration-none ${location.pathname === "/acceuil/resources_pedagogique/ateliers_pratiques" ? "active-menu" : ""}`}
                                    to="/acceuil/resources_pedagogique/ateliers_pratiques"
                                >
                                    🔧 Ateliers pratiques
                                </Link>
                            </li>

                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <button
                        className={`w-100 text-start ${location.pathname === "/acceuil/organisation_academiques/organisation_academiques" ||
                            location.pathname === "/acceuil/organisation_academiques/examens" ||
                            location.pathname === "/acceuil/organisation_academiques/calendrier"
                            ? "active-menu"
                            : ""
                            }`}
                        onClick={() => setOpenResources2(!openResources2)}
                    >
                        {/* <i className="fa-solid fa-book"></i> */}
                        <div className="d-flex justify-content-between align-items-center">
                            <div>🏫<span>Organisation Académique</span></div>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </button>
                    {openResources2 && (
                        <ul className="list-unstyled ms-3 mt-2 border-start rounded-2 list2">

                            <li className="">
                                <Link
                                    className={`text-decoration-none ${location.pathname === "/acceuil/organisation_academiques/organisation_academiques" ? "active-menu" : ""}`}
                                    to="/acceuil/organisation_academiques/organisation_academiques"
                                >
                                    📄 Organisation Académiques
                                </Link>
                            </li>

                            <li className="">
                                <Link
                                    className={`text-decoration-none ${location.pathname === "/acceuil/organisation_academiques/examens" ? "active-menu" : ""}`}
                                    to="/acceuil/organisation_academiques/examens"
                                >
                                    📝 Dates d'Examens
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={`text-decoration-none ${location.pathname === "/acceuil/organisation_academiques/calendrier" ? "active-menu" : ""}`}
                                    to="/acceuil/organisation_academiques/calendrier"
                                >
                                    🔧 Calendrier Académiques
                                </Link>
                            </li>

                        </ul>
                    )}
                </li>

                <li className="mb-2">
                    <Link
                         className={`text-decoration-none ${location.pathname === "/acceuil/projets" ? "active-menu" : ""}`}
                        to="/acceuil/projets"
                    >
                        💡 Projets
                    </Link>
                </li>

                <li>
                    <Link
                        className={`text-decoration-none ${location.pathname === "/acceuil/communication" ? "active-menu" : ""}`}
                        to="/acceuil/communication"
                    >
                        📢 Communication
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;
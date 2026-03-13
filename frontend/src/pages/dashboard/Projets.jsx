import React from "react";
import Sidebar from "./../../components/Sidebar";
import { Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjetPage = () => {
    return (
        <>
            <div className="content_wrapper">
                <div>
                    <div>
                        <h1>Projets académiques</h1>
                        <p>Suivez l'avancement de vos projets de groupe</p>
                    </div>
                    <div className="d-flex justify-content-between gap-4">
                        <div style={{
                            background: "#FFF",
                            boxShadow: "0px 0px 2px #c3c3c391", padding: "20px", borderRadius: "10px"
                        }}>
                            <h5>Développement d'une application web</h5>
                            <span className="d-inline-block"
                                style={{
                                    color: "#004953", background: "#E7F2F1",
                                    padding: "2px 16px 4px", borderRadius: "15px", fontSize: "14px", margin: "15px 0"
                                }}>
                                En Cours</span>
                            <p style={{ color: "#6B747B" }}>Création d'une plateforme e-commerce avec React et Node.js</p>
                            <div className="d-flex justify-content-between">
                                <p>Progression</p>
                                <p>65%</p>
                            </div>
                            <div className="d-flex">
                                <div className="progress"
                                    style={{
                                        border: "0px solid #22303A",
                                        background: "#22303A",
                                        borderRadius: "20px", width: "65%", height: "7px"
                                    }}></div>
                                <div className="progress-bot"
                                    style={{
                                        border: "0px solid #22303A",
                                        background: "#F3F4F6",
                                        borderRadius: "20px", width: "35%"
                                    }}></div>
                            </div>
                            <div className="mt-5">
                                <span className="d-block mb-3"><i className="fa-solid fa-calendar"
                                    style={{ fontSize: "10px", marginRight: "17px" }}></i>
                                    Date limite: <small>20 Février 2026</small></span>
                                <span className="d-block mb-3"><i className="fa-solid fa-book-open"
                                    style={{ fontSize: "10px", marginRight: "17px" }}></i>
                                    Cours: <small>Développement Web</small></span>
                                <span className="d-block mb-3"><i className="fa-solid fa-users"
                                    style={{ fontSize: "10px", marginRight: "17px" }}></i>
                                    Équipe (3 membres) </span>
                                <div style={{
                                    background: "#F9FAFB", border: "1px solid #F3F4F6",
                                    padding: "10px 13px 14px 8px", borderRadius: "40px", display: "inline-block",
                                    marginRight: "10px"
                                }}>
                                    <span className="" style={{
                                        marginRight: "10px", background: "#0E7872",
                                        borderRadius: "80%", padding: "7px 10px 10px 10px", color: "#fff"
                                    }}>AM</span>
                                    <span>Alice Martin</span>
                                </div>
                                <div style={{
                                    background: "#F9FAFB", border: "1px solid #F3F4F6",
                                    padding: "10px 13px 14px 8px", borderRadius: "40px", display: "inline-block",
                                    marginRight: "10px"
                                }}>
                                    <span className="" style={{
                                        marginRight: "10px", background: "#0E7872",
                                        borderRadius: "80%", padding: "7px 10px 10px 10px", color: "#fff"
                                    }}>BD</span>
                                    <span>Bob Dupont</span>
                                </div>
                                <div style={{
                                    background: "#F9FAFB", border: "1px solid #F3F4F6",
                                    padding: "10px 13px 14px 8px", borderRadius: "40px", display: "inline-block",
                                    marginTop: "10px"
                                }}>
                                    <span className="" style={{
                                        marginRight: "10px", background: "#0E7872",
                                        borderRadius: "80%", padding: "7px 10px 10px 10px", color: "#fff"
                                    }}>CB</span>
                                    <span>Claire Bernard</span>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            background: "#FFF",
                            boxShadow: "0px 0px 2px #c3c3c391", padding: "20px", borderRadius: "10px"
                        }}>
                            <h5>Développement d'une application web</h5>
                            <span className="d-inline-block"
                                style={{
                                    color: "#004953", background: "#E7F2F1",
                                    padding: "2px 16px 4px", borderRadius: "15px", fontSize: "14px", margin: "15px 0"
                                }}>
                                En Cours</span>
                            <p style={{ color: "#6B747B" }}>Création d'une plateforme e-commerce avec React et Node.js</p>
                            <div className="d-flex justify-content-between">
                                <p>Progression</p>
                                <p>65%</p>
                            </div>
                            <div className="d-flex">
                                <div className="progress"
                                    style={{
                                        border: "0px solid #22303A",
                                        background: "#22303A",
                                        borderRadius: "20px", width: "65%", height: "7px"
                                    }}></div>
                                <div className="progress-bot"
                                    style={{
                                        border: "0px solid #22303A",
                                        background: "#F3F4F6",
                                        borderRadius: "20px", width: "35%"
                                    }}></div>
                            </div>
                            <div className="mt-5">
                                <span className="d-block mb-3"><i className="fa-solid fa-calendar"
                                    style={{ fontSize: "10px", marginRight: "17px" }}></i>
                                    Date limite: <small>20 Février 2026</small></span>
                                <span className="d-block mb-3"><i className="fa-solid fa-calendar"
                                    style={{ fontSize: "10px", marginRight: "17px" }}></i>
                                    Cours: <small>Développement Web</small></span>
                                <span className="d-block mb-3"><i className="fa-solid fa-calendar"
                                    style={{ fontSize: "10px", marginRight: "17px" }}></i>
                                    Équipe (3 membres) </span>
                                <div style={{
                                    background: "#F9FAFB", border: "1px solid #F3F4F6",
                                    padding: "10px 13px 14px 8px", borderRadius: "40px", display: "inline-block",
                                    marginRight: "10px"
                                }}>
                                    <span className="" style={{
                                        marginRight: "10px", background: "#0E7872",
                                        borderRadius: "80%", padding: "7px 10px 10px 10px", color: "#fff"
                                    }}>AM</span>
                                    <span>Alice Martin</span>
                                </div>
                                <div style={{
                                    background: "#F9FAFB", border: "1px solid #F3F4F6",
                                    padding: "10px 13px 14px 8px", borderRadius: "40px", display: "inline-block",
                                    marginRight: "10px"
                                }}>
                                    <span className="" style={{
                                        marginRight: "10px", background: "#0E7872",
                                        borderRadius: "80%", padding: "7px 10px 10px 10px", color: "#fff"
                                    }}>BD</span>
                                    <span>Bob Dupont</span>
                                </div>
                                <div style={{
                                    background: "#F9FAFB", border: "1px solid #F3F4F6",
                                    padding: "10px 13px 14px 8px", borderRadius: "40px", display: "inline-block",
                                    marginTop: "10px"
                                }}>
                                    <span className="" style={{
                                        marginRight: "10px", background: "#0E7872",
                                        borderRadius: "80%", padding: "7px 10px 10px 10px", color: "#fff"
                                    }}>CB</span>
                                    <span>Claire Bernard</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between gap-4">
                        <div style={{
                            background: "#FFF",
                            boxShadow: "0px 0px 2px #c3c3c391", padding: "20px", borderRadius: "10px",
                            marginTop: "30px", width:"100%"
                        }}>
                            <p>Algorithme de compression de données</p>
                            <span style={{
                                color: "#15803D", padding: "5px 14px", borderRadius: "30px",
                                background: "#DCFCE7", fontSize: "13px"
                            }}>Terminé</span>
                        </div>
                        <div style={{
                            background: "#FFF",
                            boxShadow: "0px 0px 2px #c3c3c391", padding: "20px", borderRadius: "10px",
                            marginTop: "30px", width:"100%"
                        }}>
                            <p>Simulation de réseau informatique</p>
                            <span style={{
                                color: "#4E5961", padding: "5px 14px", borderRadius: "30px",
                                background: "#F3F4F6", fontSize: "13px"
                            }}>À venir</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjetPage;
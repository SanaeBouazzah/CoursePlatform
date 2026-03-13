import React from "react";
import Sidebar from "./../../components/Sidebar";
import { Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardPage = () => {
    return (
        <>
            <main className="content_wrapper">
                <div className="add add-09">
                    <div>
                        <h5>Bienvenue sur votre plateforme</h5>
                        <p>Accédez à toutes vos ressources académiques en un seul endroit</p>
                    </div>
                </div>
                <div className="articles d-flex justify-content-between">
                    <div className="article article-01 d-flex align-items-center">
                        <div className="">
                            <span className="d-block text">Cours Disponibles</span>
                            <small className="d-block number">21</small>
                        </div>
                        <div className="logo_article"><i class="fa-solid fa-book"></i></div>
                    </div>
                    <div className="article article-02 d-flex align-items-center">
                        <div className="">
                            <span className="d-block text">Événements</span>
                            <small className="d-block number">8</small>
                        </div>
                        <div className="logo_article"><i class="fa-regular fa-calendar"></i></div>
                    </div>
                    <div className="article article-03 d-flex align-items-center">
                        <div className="">
                            <span className="d-block text">Projets</span>
                            <small className="d-block number">5</small>
                        </div>
                        <div className="logo_article"><i class="fa-solid fa-book-bookmark"></i></div>
                    </div>
                    <div className="article article-04 d-flex align-items-center">
                        <div className="">
                            <span className="d-block text">Nouvelles Annonces</span>
                            <small className="d-block number">3</small>
                        </div>
                        <div className="logo_article"><i class="fa-solid fa-tag"></i></div>
                    </div>
                </div>
                <p>Accès rapide</p>
            </main>
        </>
    );
};

export default DashboardPage;
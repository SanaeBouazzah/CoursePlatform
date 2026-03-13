import React from "react";
import NavigationBar from "../components/Navbar";
import school from "../school.jpg";
import { Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../index.css";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <NavigationBar />
            <main className="main_wrapper">
                <Container>
                    <div className="container_wrapper">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <h1 className="title">Bienvenue sur votre <span>Plateforme Universitaire</span></h1>
                                <p className="para">
                                    Accédez à vos cours, ressources pédagogiques et
                                    collaborez avec vos camarades dans un environnement
                                    moderne et sécurisé.
                                </p>
                                <div className="btn2">
                                    <Link className="w-40 text-start" to="/acceuil">
                                        <Button className="">Commencer Maintenant</Button>
                                    </Link>
                                    <Link className="w-100 text-start" to="/acceuil/resources_pedagogique/cours">
                                        <Button className="">En Savoir Plus</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="school_image">
                                <img
                                    src={school}
                                    width="40"
                                    height="40"
                                    className="d-block"
                                    alt="School"
                                />{' '}
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
};

export default HomePage;
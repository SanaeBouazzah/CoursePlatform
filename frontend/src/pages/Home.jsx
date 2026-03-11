import React from "react";
import NavigationBar from "../components/Navbar";
import school from "../school.jpg";
import {Container, Button } from "react-bootstrap";

const Home = () => {
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
                                    <Button className="">Commencer Maintenant</Button>
                                    <Button className="">En Savoir Plus</Button>
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

export default Home;